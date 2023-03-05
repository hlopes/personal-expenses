import { FC, ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/lib/query'

interface IQueryProviderProps {
  children: ReactNode
}

console.log('### queryClient ', queryClient)
const QueryProvider: FC<IQueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
