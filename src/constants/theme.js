export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    black: '#000000',
    profileShadow: '#dbe1ea',
    secondColor: '#8b96a2',
    profileBg: '#f4f6f9',
    profileBorder: '#e7ebf1',
  },

  spacing: spacing,
});

function spacing() {
  const S = 4;
  const a = arguments;
  const l = a.length;

  if (l === 1) return `${S * a[0]}px`;
  if (l === 2) return `${S * a[0]}px ${S * a[1]}px`;
  if (l === 3) return `${S * a[0]}px ${S * a[1]}px ${S * a[2]}px`;
  if (l === S) return `${S * a[0]}px ${S * a[1]}px ${S * a[2]}px ${S * a[3]}px`;
}
