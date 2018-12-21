import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import styles from './styles.js';


class Page extends React.PureComponent {
  render() {
    let { classes, className } = this.props;
    return (
      <div className={ classNames( classes.page, className) }>
        { this.props.children }
      </div>
    );
  }
}

export default injectSheet(styles)(Page);
