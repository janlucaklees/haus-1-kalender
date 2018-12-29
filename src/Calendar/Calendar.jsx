import React from 'react';
import PropTypes from 'prop-types';
import moment from  'moment';

import Month from './Month.jsx';


class Calendar extends React.PureComponent {
  render() {
    let { year } = this.props;

    let months = new Array();
    for( let monthIndex = 0; monthIndex < 12; monthIndex++) {
      months.push( <Month year={ year } monthIndex={ monthIndex } key={ 'month_' + monthIndex } /> );
    }

    return (
      <div className="calendar">
        { months }
      </div>
    );
  }
}

Calendar.propTypes = {
  year: PropTypes.number
};

Calendar.defaultProps = {
  year: moment().year()
};

export default Calendar;
