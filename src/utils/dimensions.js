function dimensions(dimension, theme) {
  if (theme) {
    return theme.dimensions[dimension];
  }
  return props => props.theme.dimensions[dimension];
}

export default dimensions;
