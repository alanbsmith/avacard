import { gridScale } from '../../utils';

import Header from '../../elements/Header';

const Title = Header.extend`
  padding: ${gridScale(2)} 0;
`;

export default Title;
