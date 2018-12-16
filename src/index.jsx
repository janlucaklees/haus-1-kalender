import React from 'react';
import ReactDOM from 'react-dom';

import './i18n';
import Year from './year.jsx';

ReactDOM.render(
  <Year year='2018' />,
  document.getElementById('react-root')
);

module.hot.accept();
