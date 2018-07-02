import React, { Component } from 'react';

import Grid from '../../blocks/Grid';
import CardDisplay from '../CardDisplay';
import Details from '../Details';

const { Container, Row } = Grid;

class App extends Component {
  state = {
    selectedUserId: null,
    showPosts: false,
  }

  handleUserSelect = id => {
    const { selectedUserId, showPosts } = this.state;

    if (id !== selectedUserId) {
      return this.setState({
        selectedUserId: id,
        showPosts: true,
      });
    }

    return this.setState({ showPosts: !showPosts });
  }

  render() {
    return (
      <Container>
        <Row>
          <CardDisplay onUserSelect={this.handleUserSelect} />
        </Row>
        <Row>
          <Details showPosts={this.state.showPosts} />
        </Row>
      </Container>
    );
  }
};

export default App;
