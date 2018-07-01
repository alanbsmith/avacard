import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from '../../blocks/Grid';
import withData from '../withData';
import AvatarCard from './AvatarCard';

function CardDisplay({ users }) {
  if (!users) {
    return null;
  }

  // shuffle array of users
  const shuffledUsers = users.sort(() => ( 0.5 - Math.random()));
  // choose the first three from that array
  const randomThree = shuffledUsers.slice(0,3);

  return (
    <Fragment>
      { randomThree.map(({ company, email, id, name }) => (
        <AvatarCard
          catchPhrase={company.catchPhrase}
          email={email}
          key={id}
          name={name}
        />
      ))}
    </Fragment>
  );
}

CardDisplay.propTypes = {
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

export default withData(CardDisplay);
