import React from 'react';
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import moment from  'moment';
import WebFont from 'webfontloader';

import './i18n';
import Controls from './Controls.jsx';
import Calendar from './Calendar/Calendar.jsx';
import { pageDimensions } from './Calendar/Sheet.jsx';


WebFont.load({
  google: {
    families: ['Buenard', 'Noto Sans', 'Noto Serif'],
  }
});


const styles = {
  '@global': {
    html: {
      fontSize: '1mm',
      '@media print': {
        fontSize: `${ 100 / pageDimensions.height }vh`,
      },
    },
    body: {
      backgroundColor: '#ddd',

    },
  },
  container: {
    width: '430rem',
    margin: '10rem auto',
    fontFamily: "'Noto Sans', sans-serif",
    color: '#0b0020',
    '@media print': {
      width: 'auto',
      margin: 0
    },
  },
  header: {
    backgroundColor: '#fff',
    padding: '5rem 7rem',
    boxShadow: '2px 2px 10px 0px #888',
    '@media print': {
      display: 'none',
    },
  },
  heading: {
    fontSize: '16rem',
    textAlign: 'center',
    marginBottom: '5rem',
  }
}

class _App extends React.PureComponent {
  constructor( props ) {
    super( props );
    let { t } = this.props;
    this.state = {
      year: moment().year(),
    }
    document.title = t( 'title', { year: moment().year() } );
  }
  changeYear( newYear ) {
    let { t } = this.props;
    let newYearInt = parseInt( newYear );
    if( !isNaN( newYearInt ) ) {
      this.setState({
        year: newYearInt,
      }, () => {
        document.title = t( 'title', { year: newYearInt } );
      });
    } else {
      throw new Error( 'Invalid year `' + newYear + '` supplied.' );
    }
  }
  render() {
    let { classes } = this.props;
    return (
      <div className={ classes.container }>
        <div className={ classes.header }>
          <h1 className={ classes.heading }>
            Haus 1 Kalender zum selber Drucken
          </h1>
          <Controls onYearChange={ newYear => this.changeYear( newYear ) }/>
        </div>
        <Calendar year={ this.state.year } />
      </div>
    );
  }
}
const App = translate()( injectSheet( styles )( _App ) );


ReactDOM.render(
  <App />,
  document.getElementById('react-root')
);

module.hot.accept();
