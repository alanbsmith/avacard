import { rgba } from 'polished';

// common colors
const chrome000 = '#FFF';
const chrome100 = '#EEF1F2';
const text = '#294762';

const theme = {
  colors: {
    background: chrome000,
    chrome000,
    chrome050: '#F7F8F9',
    chrome100,
    chrome200: '#BAC3CB',
    text,
    textLight: rgba(text, 0.8),
    shadow: `3px 3px ${rgba(chrome100, 0.47)}`,
  },
  dimensions: {
    baseGrid: 10,
    borderRadius: '3px',
  },
  font: {
    primary: 'Open Sans',
    primaryFallback: 'Helvetica, Arial, sans-serif',
    sizes: {
      large: '20px',
      medium: '13px',
    },
    weights: {
      light: 300,
      normal: 400,
      semiBold: 600,
    },
  },
};

export default theme;
