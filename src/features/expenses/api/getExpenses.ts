import { useQuery } from '@tanstack/react-query'

import { supabase } from '@/lib/supabase'
import { IExpense } from '@/features/types'

const getExpenses = async (): Promise<IExpense[]> => {
  const { data } = await supabase.from('expenses').select()

  return data as IExpense[]
}

const useExpenses = () => {
  return useQuery({
    queryKey: ['comments'],
    queryFn: () => getExpenses(),
  })
}

export { useExpenses }
