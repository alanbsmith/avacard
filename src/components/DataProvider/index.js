import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const { Consumer, Provider } = createContext();

class DataProvider extends Component {
  static Consumer = Consumer;

  state = {
    users: [],
  }

  async componentWillMount() {
    const users = await this.fetchUsers();
    this.setState({ users });
  }

  fetchUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
  }

  render() {
    const context = {
      users: this.state.users,
    };

    return (
      <Provider value={context}>
        {this.props.children}
      </Provider>
    );
  }
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
