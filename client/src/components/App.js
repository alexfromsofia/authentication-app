import React from 'react';

import Header from './Header';

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}s
    </div>
  );
};
