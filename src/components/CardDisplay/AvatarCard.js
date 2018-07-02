import React from 'react';
import PropTypes from 'prop-types';

import AvatarCardBlock from '../../blocks/AvatarCard';
import Grid from '../../blocks/Grid';
import withData from '../withData';

const { Column, Container, Row } = Grid;

function AvatarCard(props) {
  const { catchPhrase, email, fetchUserPosts, onSelect, id, name } = props;

  function handleClick() {
    onSelect(id);
    return fetchUserPosts(id);
  }

  return (
    <AvatarCardBlock
      data-testid="avatar-card"
      onClick={handleClick}
      tabIndex="0"
    >
      <Row>
        <Column modifiers={['alignCenter']}>
          <AvatarCardBlock.Image email={email} />
        </Column>
        <Column>
          <Container modifiers={['fluid']}>
            <Row>
              <AvatarCardBlock.Text modifiers={['italicize']}>
                "{catchPhrase}"
              </AvatarCardBlock.Text>
            </Row>
            <Row>
              <Column modifiers={['flexColumn', 'fluid']}>
                <AvatarCardBlock.Text modifiers={['semiBold']}>
                  {name}
                </AvatarCardBlock.Text>
                <AvatarCardBlock.Text modifiers={['lowercase']}>
                  {email}
                </AvatarCardBlock.Text>
              </Column>
            </Row>
          </Container>
        </Column>
      </Row>
    </AvatarCardBlock>
  );
}

AvatarCard.propTypes = {
  catchPhrase: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fetchUserPosts: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

function mappedData({ fetchUserPosts }) {
  return { fetchUserPosts };
};

export default withData(mappedData)(AvatarCard);
