import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { shuffleList } from '../../utils';

import withData from '../withData';
import AvatarCard from './AvatarCard';

class CardDisplay extends Component {
  static displayName = "CardDisplay";

  state = {
    users: [],
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.users.length !== nextProps.users.length) {
      this.shuffleUsers(nextProps.users);
    };
  }

  shuffleUsers(users) {
    const shuffled = shuffleList(users);
    this.setState({ users: shuffled });
  }

  render() {
    const { users } = this.state;

    if (!users) {
      return null;
    }

    // choose the first three from array
    const randomThree = users.slice(0,3);
    return (
      <Fragment>
        { randomThree.map(({ company, email, id, name }) => (
          <AvatarCard
            catchPhrase={company.catchPhrase}
            email={email}
            id={id}
            key={id}
            name={name}
            onSelect={this.props.onUserSelect}
          />
        ))}
      </Fragment>
    );
  }
}

CardDisplay.propTypes = {
  onUserSelect: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.shape({
        catchPhrase: PropTypes.string.isRequired,
      }).isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

function mappedData({ users, fetchUsers }) {
  return {
    users,
    fetchUsers,
  };
};

export default withData(mappedData)(CardDisplay);
