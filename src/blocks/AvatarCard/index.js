import { colors, gridScale } from "../../utils";

import Text from '../../elements/Text';
import Card from '../Card';
import Image from './Image';

const AvatarCard = Card.extend`
  flex: 0 0 ${gridScale(35)};
  height: 206px;
  padding: ${gridScale(4)} ${gridScale(1)};
  transition: border-color 300ms ease;

  &:hover,
  &:focus {
    border-color: ${colors('chrome200')};
  }
`;

AvatarCard.Image = Image;
AvatarCard.Text = Text;

export default AvatarCard;
