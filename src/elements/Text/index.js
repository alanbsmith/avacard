import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import fonts from "../../modifiers/fonts";

const modifiers = {
  ...fonts,
};

const Text = styled.span`
  display: inline-block;
  line-height: 1.4em;
  letter-spacing: 0;
  ${applyStyleModifiers(modifiers)}
`;

// for testing
Text.modifiers = modifiers;

export default Text;
