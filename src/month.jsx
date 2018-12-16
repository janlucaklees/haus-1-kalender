import React from 'react';

import PageGroundFloor from './page-groud-floor.jsx';
import PageFirstFloor from './page-first-floor.jsx';

export default class Month extends React.PureComponent {
  render() {
    let { year, monthIndex } = this.props;

    return (
      <div className="month">
        <PageGroundFloor year={ year } monthIndex={ monthIndex } />
        <PageFirstFloor year={ year } monthIndex={ monthIndex } />
      </div>
    );
  }
}
