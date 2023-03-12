import { useExpenses } from '@/features/expenses/api/getExpenses'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Button } from '@mui/material'

const ExpensesList = () => {
  const { data: expenses, isLoading, isError } = useExpenses()

  console.log('### data ', expenses)
  console.log('### isLoading ', isLoading)
  console.log('### isError ', isError)

  if (!expenses) {
    return null
  }

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'value', headerName: 'Value', width: 150 },
  ]

  return (
    <div style={{ height: 300, width: '100%' }}>
      <Button
        size="small"
        onClick={() => {
          console.log('### add ')
        }}>
        Add a row
      </Button>
      <DataGrid autoHeight rows={expenses} columns={columns} />
    </div>
  )
}

export default ExpensesList
