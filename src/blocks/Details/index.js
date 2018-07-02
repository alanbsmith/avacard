import { applyStyleModifiers } from 'styled-components-modifiers';
import { gridScale } from '../../utils';

import P from '../../elements/P';
import Card from '../Card';
import Title from './Title';

const modifiers = {
  posts: ({ theme }) => `
    padding-bottom: ${gridScale(8, theme)};
  `,
  instructions: () => `
    text-align: center;
  `
};

const Details = Card.extend`
  flex: 0 0 1090px;
  padding: ${gridScale(2)};
  transition: all 300ms ease;
  ${applyStyleModifiers(modifiers)};
`;

// for testing
Details.modifiers = modifiers;

Details.Body = P;
Details.Title = Title;

export default Details;
