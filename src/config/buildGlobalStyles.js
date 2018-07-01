function buildGlobalStyles(theme) {
  return `
    html {
      height: 100%;
    }
    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
      font-family: ${theme.font.primaryFallback};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weights.normal};
      height: 100%;
      margin: 0;

      button,
      input,
      select,
      textarea {
        font-family: ${theme.font.primaryFallback};
      }

      &.fonts-loaded {
        font-family: ${theme.font.primary};
        button,
        input,
        select,
        textarea {
          font-family: ${theme.font.primary};
        }
      }
    }
    #root {
      height: 100%;
    }
  `;
}

export default buildGlobalStyles;
