import styled from 'styled-components';
import { color, space, typography, variant } from 'styled-system';

export const Heading = styled('div')(
  color,
  space,
  typography,
  variant({
    variants: {
      primary: {
        color: 'greyFontColor',
        fontSize: 'xm',
        fontWeight: 'semiBold',
        textAlign: 'center',
        textTransform: 'uppercase',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    },
  })
);
