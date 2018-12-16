import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  a4: {
    width: '210mm',
    height: '297mm',
    pageBreakAfter: 'always',
  }
}

class Page extends React.PureComponent {
  render() {
    return (
      <div className={ this.props.classes.a4 }>
        { this.props.children }
      </div>
    );
  }
}

export default injectSheet(styles)(Page);
