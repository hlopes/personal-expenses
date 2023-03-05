import { useExpenses } from '@/features/expenses/api/getExpenses'

const ExpensesList = () => {
  const { data, isLoading, isError } = useExpenses()

  console.log('### data ', data)
  console.log('### isLoading ', isLoading)
  console.log('### isError ', isError)

  return <div></div>
}

export default ExpensesList
