import { roboto } from '@theme-ui/presets';

const theme = {
  ...roboto,
  containers: {
    page: {
      width: '100%',
      maxWidth: '60px',
      m: 0,
      mx: 'auto',
    }
  },
  styles: {
    ...roboto.styles
  }
};

export default theme;