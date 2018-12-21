import React from 'react';
import PropTypes from 'prop-types';

import Month from './Month.jsx';


export default class Year extends React.PureComponent {
  render() {
    let { year } = this.props;

    let months = new Array();

    for( let monthIndex = 0; monthIndex < 12; monthIndex++) {
      months.push( <Month year={ year } monthIndex={ monthIndex } key={ 'month_' + monthIndex } /> );
    }

    return (
      <div className="year">
        { months }
      </div>
    );
  }
}

Year.propTypes = {
  year: PropTypes.number.isRequired,
};
