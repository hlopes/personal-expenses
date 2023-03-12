import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
} from '@mui/x-data-grid'
import { Button } from '@mui/material'

import { IExpense } from '@/features/expenses/types'
import { useExpenses } from '@/features/expenses/api/getExpenses'

const getDate = (params: { row: IExpense }) => new Date(params.row.date)
const dateFormatter = (params: GridValueFormatterParams<Date>) =>
  format(params.value, 'dd-MM-yyyy', { locale: pt })

const ExpensesList = () => {
  const { data: expenses, isLoading, isError } = useExpenses()

  console.log('### data ', expenses)
  console.log('### isLoading ', isLoading)
  console.log('### isError ', isError)

  if (!expenses) {
    return null
  }

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 250, editable: true },
    {
      field: 'date',
      headerName: 'Date',
      type: 'date',
      width: 150,
      editable: true,
      valueGetter: getDate,
      valueFormatter: dateFormatter,
    },
    {
      field: 'value',
      headerName: 'Value',
      type: 'number',
      width: 150,
      editable: true,
    },
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
      <DataGrid
        rows={expenses}
        columns={columns}
        autoHeight
        getRowId={(row: IExpense) => row.id}
        processRowUpdate={(newRow, oldRow) => {
          console.log('### newRow ', newRow)
          console.log('### oldRow ', oldRow)
          return oldRow
        }}
      />
    </div>
  )
}

export default ExpensesList
