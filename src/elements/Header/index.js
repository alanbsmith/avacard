import styled from 'styled-components';

import { colors, fontSizes, fontWeights } from '../../utils';

const Header = styled.h2`
  color: ${colors('textLight')};
  font-size: ${fontSizes('large')};
  font-weight: ${fontWeights('light')};
  line-height: 1.5em;
  letter-spacing: 0;
  margin: 0;
  text-transform: capitalize;
`;

export default Header;
