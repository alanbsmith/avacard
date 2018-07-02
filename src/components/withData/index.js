import React from 'react';

import DataProvider from '../DataProvider';

const withData = mappedData => Component => props => {
  return (
    <DataProvider.Consumer>
      {data => (
        <Component
          {...props}
          {...mappedData(data)}
        />
      )}
    </DataProvider.Consumer>
  );
};

export default withData;
