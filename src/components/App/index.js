import React, { Component } from 'react';

import DataProvider from '../DataProvider';
import Grid from '../../blocks/Grid';

import CardDisplay from '../CardDisplay';

class App extends Component {
  render() {
    return (
      <DataProvider>
        <Grid.Container>
          <Grid.Row>
            <CardDisplay />
          </Grid.Row>
        </Grid.Container>
      </DataProvider>
    );
  }
};

export default App;
