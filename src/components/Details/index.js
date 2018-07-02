import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { shuffleList } from '../../utils';

import DetailsBlock from '../../blocks/Details';
import Grid from '../../blocks/Grid';
import withData from '../withData';

const { Column, Row } = Grid;

function Details({ showPosts, userPosts }) {
  function renderContent() {
    if (!showPosts) {
      return (
        <DetailsBlock.Body>
          Click a card to view five of their posts
        </DetailsBlock.Body>
      );
    }

    const shuffled = shuffleList(userPosts);
    const randomFive = shuffled.slice(0,5);

    return (
      <Fragment>
        {randomFive.map(post => (
          <Row key={post.id}>
            <Column modifiers={['flexColumn']}>
              <DetailsBlock.Title>{post.title}</DetailsBlock.Title>
              <DetailsBlock.Body>{post.body}</DetailsBlock.Body>
            </Column>
          </Row>
        ))}
      </Fragment>
    );
  }

  const modifier = showPosts ? 'posts' : 'instructions';
  return (
    <DetailsBlock modifiers={[modifier]}>
      {renderContent()}
    </DetailsBlock>
  );
}

function mappedData({ userPosts }) {
  return {
    userPosts,
  };
};

Details.propTypes = {
  showPosts: PropTypes.bool.isRequired,
  userPosts: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default withData(mappedData)(Details);
