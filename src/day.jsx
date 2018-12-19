import React from 'react';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';

const styles = {};

class Day extends React.PureComponent {
  render() {
    let { year, monthIndex, day } = this.props;
    
    let date = new Date( year, monthIndex, day );

    return (
      <tr className="day">
        <td className="day-number">
          { day.toString().padStart( 2, '0' ) }.
        </td>
        <td className="day-name">
          { this.props.t( 'day_names.' + date.getDay() + '.abbrev' ) }
        </td>
        { this.props.children }
      </tr>
    );
  }
}

export default translate()( injectSheet( styles )( Day ) );
