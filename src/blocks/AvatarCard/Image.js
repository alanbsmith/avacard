import styled from 'styled-components';
import PropTypes from 'prop-types';

import { dimensions } from '../../utils';

const Image = styled.img.attrs({
  src: props => `https://api.adorable.io/avatars/150/${props.email}.png`,
  alt: 'adorable user avatar',
})`
  border-radius: ${dimensions('borderRadius')};
  height: 106px;
  width: 106px;
`;

Image.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Image;
