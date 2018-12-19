import React from 'react';
import injectSheet from 'react-jss';

import styles from './styles.js';


class Page extends React.PureComponent {
  render() {
    return (
      <div className={ this.props.classes.page }>
        { this.props.children }
      </div>
    );
  }
}

export default injectSheet(styles)(Page);
