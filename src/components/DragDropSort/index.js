import React, { PureComponent } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import ItemContainer from './ItemContainer';

class DragDropContainer extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      children: props.children || [],
      className: props.className || '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state.children = nextProps.children;
  }

  find = index => {
    const { children } = this.state;

    return children.find((v, i) => i === index);
  };

  move = (from, to) => {
    console.log(`form...${from} ...to ${to}`);
    this.props.onItemMove(from, to, this.find(from), this.find(to));
  };

  render() {
    const { children, className } = this.state;
    return (
      <div className={className}>
        {Array.isArray(children) &&
          children.map((item, i) => (
            <ItemContainer id={i} dropItem={this.move} key={i.toString()}>
              {item}
            </ItemContainer>
          ))}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DragDropContainer);
