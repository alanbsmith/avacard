import React from 'react';
import PropTypes from 'prop-types';

import AvatarCardBlock from '../../blocks/AvatarCard';
import Grid from '../../blocks/Grid';

const { Column, Container, Row } = Grid;

function AvatarCard({ catchPhrase, email, name }) {
  return (
    <AvatarCardBlock tabIndex="0">
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
  name: PropTypes.string.isRequired,
};

export default AvatarCard;
