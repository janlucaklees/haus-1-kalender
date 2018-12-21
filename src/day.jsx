import React from 'react';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';

import styles from './styles.js';


class Day extends React.PureComponent {
  render() {
    let { classes, date } = this.props;
    return (
      <tr className={ `${classes[ 'rowDay_' + date.day() ]} ${classes.rowDay}` }>
        <td className={ classes.cellDayDate }>
          { date.format( 'DD' ) }.
        </td>
        <td className={ classes.cellDayName }>
          { this.props.t( 'day_names.' + date.day() + '.abbrev' ) }
        </td>
        { this.props.children }
      </tr>
    );
  }
}

export default translate()( injectSheet( styles )( Day ) );
