/* eslint-disable */
import { useRecoilState } from 'recoil'
import { todoListFilterState } from '../../functions/recoil'
import OptionBox from '../molecules/OptionBox'
import { handleOnChangeTargetValue } from '../../functions/functionStorage'
import { filteredOptions } from '../../variables/variablesStorage'

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  return <OptionBox options={filteredOptions} value={filter} onChange={handleOnChangeTargetValue(setFilter)} />
}

export default TodoListFilters
