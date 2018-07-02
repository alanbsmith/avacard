import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const { Consumer, Provider } = createContext();

class DataProvider extends Component {
  static Consumer = Consumer;

  state = {
    users: [],
    userPosts: [],
  }

  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({ users: data });
  }

  fetchUserPosts = async id => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    this.setState({ userPosts: data });
  }

  render() {
    const context = {
      fetchUserPosts: this.fetchUserPosts,
      userPosts: this.state.userPosts,
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
