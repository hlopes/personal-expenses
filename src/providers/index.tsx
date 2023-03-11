import { FC, ReactNode } from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import QueryProvider from '@/providers/QueryProvider'

interface IProvidersProps {
  children: ReactNode
}

const Providers: FC<IProvidersProps> = ({ children }) => {
  return (
    <CssBaseline enableColorScheme>
      <QueryProvider>{children}</QueryProvider>
    </CssBaseline>
  )
}

export default Providers
