import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#dc0a2d',
    },
    background: {
      default: '#2b3945',
      paper: '#3d4c5c',
    },
    text: {
      primary: '#ffffff',
      secondary: '#8a9aa9',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#2b3945',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: 'uppercase',
        },
      },
    },
  },
})

export default theme
