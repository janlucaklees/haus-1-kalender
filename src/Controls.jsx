import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import moment from  'moment';


const styles = {
  container: {
    textAlign: 'center',
    fontSize: '6rem',
  }
}

class Controls extends React.PureComponent {
  render() {
    let { classes } = this.props;
    let currentYear = moment().year();
    return (
      <div className={ classes.container }>
        Jahr auswählen: &nbsp;
        <select onChange={ event => this.props.onYearChange( event.target.value ) }>
          <option value={ currentYear }>{ currentYear }</option>
          <option value={ currentYear + 1 }>{ currentYear + 1 }</option>
          <option value={ currentYear + 2 }>{ currentYear + 2 }</option>
        </select>
      </div>
    );
  }
}

Controls.propTypes = {
  onYearChange: PropTypes.func,
}

export default injectSheet( styles )( Controls );
