import { createTheme } from '@mui/material/styles'

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#dc0a2d',
    },
    ...(mode === 'dark' ? {
      background: {
        default: '#2b3945',
        paper: '#3d4c5c',
      },
      text: {
        primary: '#ffffff',
        secondary: '#8a9aa9',
      },
    } : {
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
      text: {
        primary: '#2b3945',
        secondary: '#5a6a79',
      },
    }),
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'dark' ? '#ffffff' : '#ffffff',
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

export default getTheme('dark')
