import React from 'react';

import DataProvider from '../DataProvider';

const withData = Component => props => {
  return (
    <DataProvider.Consumer>
      {data => (
        <Component {...props} {...data} />
      )}
    </DataProvider.Consumer>
  );
};

export default withData;
