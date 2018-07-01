import { fontWeights } from '../../utils';

import Text from '../Text';

const P = Text.withComponent('p').extend`
  font-weight: ${fontWeights('semiBold')};
  line-height: 1.5em;
  margin: 0;
`;

export default P;
