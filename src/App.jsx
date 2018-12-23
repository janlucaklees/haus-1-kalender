import React from 'react';
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';
import moment from  'moment';
import WebFont from 'webfontloader';

import './i18n';
import Controls from './Controls.jsx';
import Year from './Year.jsx';


WebFont.load({
  google: {
    families: ['Buenard', 'Noto Sans', 'Noto Serif'],
  }
});


const styles = {
  container: {
    width: '430mm',
    margin: '10mm auto',
    fontFamily: "'Noto Sans', sans-serif",
    color: '#0b0020',
    '@media print': {
      width: 'auto',
      margin: 0
    },
  },
  header: {
    backgroundColor: '#fff',
    padding: '5mm 7mm',
    boxShadow: '2px 2px 10px 0px #888',
    '@media print': {
      display: 'none',
    },
  },
  heading: {
    fontSize: '16mm',
    textAlign: 'center',
    marginBottom: '5mm',
  }
}

class _App extends React.PureComponent {
  constructor( props ) {
    super( props );
    this.state = {
      year: moment().year(),
    }
  }
  changeYear( newYear ) {
    let newYearInt = parseInt( newYear );
    if( !isNaN( newYearInt ) ) {
      this.setState({
        year: newYearInt,
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
        <Year year={ this.state.year } />
      </div>
    );
  }
}
const App = injectSheet( styles )( _App );


ReactDOM.render(
  <App />,
  document.getElementById('react-root')
);

module.hot.accept();
