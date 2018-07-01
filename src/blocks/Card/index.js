import { colors, dimensions, gridScale } from "../../utils";

import Grid from '../../blocks/Grid';

const Card = Grid.Container.extend`
  border-radius: ${dimensions('borderRadius')};
  border: solid 1px ${colors('chrome100')};
  box-shadow: ${colors('shadow')};
  box-sizing: border-box;
  margin: ${gridScale(1)};
`;

export default Card;
