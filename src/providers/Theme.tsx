import { FC, ReactNode } from 'react'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

interface IThemeProps {
  children: ReactNode
}

const Theme: FC<IThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default Theme
