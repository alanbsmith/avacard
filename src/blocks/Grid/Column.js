import styled from "styled-components";
import PropTypes from "prop-types";
import { applyStyleModifiers } from 'styled-components-modifiers';

import flex from "../../modifiers/flex";
import { gridScale } from "../../utils";

const modifiers = {
  ...flex,
};

const Column = styled.div`
  display: flex;
  flex: ${props => props.flex};
  padding: ${gridScale(1)};
  ${applyStyleModifiers(modifiers)}
`;

// for testing
Column.modifiers = modifiers;

Column.propTypes = {
  flex: PropTypes.number,
};

export default Column;
