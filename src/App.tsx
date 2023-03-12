import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import './App.css'

import Providers from '@/providers'
import ExpensesList from '@/features/expenses/components/ExpensesList'

function App() {
  return (
    <Providers>
      <ExpensesList />
    </Providers>
  )
}

export default App
