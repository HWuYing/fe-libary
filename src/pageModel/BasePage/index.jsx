import React, { Component } from 'react';
import { component } from '@particulate';
import { PageLayout } from '@layouts';

const { clearAttr, factoryComponentsConfig } = component;

class BasePage extends Component{
  static initialMergeProps = (props, clearArr=[]) => {
    return {
      ...clearAttr({ ...props }, [
        ...clearArr,
        'pageOptions',
        'pageProps',
        'className',
        'Model',
        'children',
      ]),
    };
  };

  constructor(props, context) {
    super(props, context);
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    this.initial(nextProps);
  }

  initial(props, clientArray) {
    this.childProps = BasePage.initialMergeProps(props, clientArray);
  }

  renderPage(children) {
    const { className, pageOptions, pageProps } = this.props;
    return (
      <PageLayout
        {...pageOptions}
        {...pageProps}
        className={[className].join(' ')}
      >
        { React.cloneElement(children) }
      </PageLayout>
    );
  }

  render() {
    return null;
  }
}

export { BasePage }

export default (Element, option) => (Model, options) => factoryComponentsConfig(Element)({
  Model,
  className: '',
  pageOptions: {
    ...options
  },
  ...option,
});
