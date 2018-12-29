import React, { PureComponent } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

class ItemContainer extends PureComponent {
  static propTypes = {
    
  };

  render() {
    const {
      connectDropTarget,
      connectDragPreview,
      connectDragSource,
      children: Component,
    } = this.props;

    return connectDragPreview(connectDropTarget(connectDragSource(Component)));
  }
}

const source = {
  beginDrag(props, monitor, component) {
    const Item = monitor.getItem();
    if (props.beginDrag) props.beginDrag(Item, Item.id, component);
    return {
      id: props.id,
    };
  },

  isDragging(props, monitor, component) {
    const Item = monitor.getItem();
    if (props.isDragging) props.isDragging(Item, props.id === Item.id, component);
    return props.id === Item.id;
  },

  endDrag(props, monitor) {
    const Item = monitor.getItem();
    if (props.isDragging) props.endDrag(Item, Item.id);
  },
};

const target = {
  canDrop(props, monitor) {
    const { id: draggedId } = monitor.getItem();
    const { id: dropId } = props;

    if (draggedId === dropId) return false;
    if (!monitor.isOver({ shallow: true })) return false;

    if (props.canDrop) props.canDrop(draggedId !== dropId && monitor.isOver({ shallow: true }));

    return true;
  },

  hover(props, monitor, component) {
    const { id: draggedId } = monitor.getItem();
    const { id: dropId } = props;

    if (props.dropHoverItem) props.dropHoverItem(draggedId, dropId, component);
  },

  drop(props, monitor, component) {
    const { id: draggedId } = monitor.getItem();
    const { id: dropId } = props;

    if (props.dropItem) props.dropItem(draggedId, dropId, component);
  },
};

const TYPE = 'ITEM';
export default DropTarget(TYPE, target, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(
  DragSource(TYPE, source, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }))(ItemContainer)
);
