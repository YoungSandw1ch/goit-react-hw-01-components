export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    profileShadow: '#dbe1ea',
    secondColor: '#8b96a2',
    profileBg: '#f4f6f9',
    profileBorder: '#e7ebf1',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
    custom: '26px',
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid',
  },

  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },

  sizes: {
    one: '100px',
    two: '200px',
    profile: '350px',
    container: '1030px',
    avatar: '150px',
  },

  shadows: {
    greyShadow: `3px 3px 1px #dbe1ea,
    -3px 3px 1px #dbe1ea`,
  },
};

// function spacing() {
//   const S = 4;
//   const a = arguments;
//   const l = a.length;

//   if (l === 1) return `${S * a[0]}px`;
//   if (l === 2) return `${S * a[0]}px ${S * a[1]}px`;
//   if (l === 3) return `${S * a[0]}px ${S * a[1]}px ${S * a[2]}px`;
//   if (l === S) return `${S * a[0]}px ${S * a[1]}px ${S * a[2]}px ${S * a[3]}px`;
// }
