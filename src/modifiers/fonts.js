import { fontWeights } from '../utils';

const weightModfiers = {
  light: ({ theme }) => `
    font-weight: ${fontWeights('light', theme)};
  `,
  normal: ({ theme }) => `
    font-weight: ${fontWeights('normal', theme)};
  `,
  semiBold: ({ theme }) => `
    font-weight: ${fontWeights('semiBold', theme)};
  `,
};

const styleModifiers = {
  italicize: ({ theme }) => `
    font-style: italic;
  `,
  lowercase: ({ theme }) => `
    text-transform: lowercase;
  `,
};

export default {
  ...weightModfiers,
  ...styleModifiers,
};
