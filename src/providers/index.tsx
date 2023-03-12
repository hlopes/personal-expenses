import { FC, ReactNode } from 'react'

import Query from '@/providers/Query'
import Theme from '@/providers/Theme'

interface IProvidersProps {
  children: ReactNode
}

const Providers: FC<IProvidersProps> = ({ children }) => {
  return (
    <Query>
      <Theme>{children}</Theme>
    </Query>
  )
}

export default Providers
