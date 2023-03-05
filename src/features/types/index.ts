import { IBaseEntity } from '@/types'

interface IExpense extends IBaseEntity {
  name: string
  date: string
  value: number
}

export type { IExpense }
