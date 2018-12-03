import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const App = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.any,
};

export default App;
