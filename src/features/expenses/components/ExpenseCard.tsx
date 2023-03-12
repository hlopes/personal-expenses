import { FC } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

import { IExpense } from '@/features/expenses/types'

interface IExpenseCardProps {
  expense: IExpense
}

const ExpenseCard: FC<IExpenseCardProps> = ({ expense }) => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {expense.name}
        </Typography>
        <Typography variant="body2">{expense.date}</Typography>
        <Typography variant="body2">{expense.value}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default ExpenseCard
