import { FC, ReactNode } from 'react'

import QueryProvider from '@/providers/QueryProvider'

interface IProvidersProps {
  children: ReactNode
}

const Providers: FC<IProvidersProps> = ({ children }) => {
  return <QueryProvider>{children}</QueryProvider>
}

export default Providers
