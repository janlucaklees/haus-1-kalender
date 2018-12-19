import React from 'react';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';

import styles from './styles.js';


class Day extends React.PureComponent {
  render() {
    let { year, monthIndex, day, classes, className } = this.props;

    let date = new Date( year, monthIndex, day );

    return (
      <tr className={ `${classes[`day_${ date.getDay() }`]} ${classes.day}` }>
        <td className={ classes.dayDate }>
          { day.toString().padStart( 2, '0' ) }.
        </td>
        <td className={ classes.dayName }>
          { this.props.t( 'day_names.' + date.getDay() + '.abbrev' ) }
        </td>
        { this.props.children }
      </tr>
    );
  }
}

export default translate()( injectSheet( styles )( Day ) );
