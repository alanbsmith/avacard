import styled from "styled-components";
import { applyStyleModifiers } from 'styled-components-modifiers';

import flex from "../../modifiers/flex";
import { gridScale } from "../../utils";

const modifiers = {
  ...flex,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${gridScale(1)};
  ${applyStyleModifiers(modifiers)}
`;

// for testing
Container.modifiers = modifiers;

export default Container;
