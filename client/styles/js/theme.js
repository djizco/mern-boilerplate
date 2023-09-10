import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});

export default theme;
