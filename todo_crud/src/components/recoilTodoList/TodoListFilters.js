import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../functions/recoil';
import OptionBox from '../molecules/OptionBox';
import { todoFilterShowAllTxt, todoFilterCompletedOnlyTxt, todoFilterInProgressOnlyTxt } from '../../content/contentEng';

function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);
  
    const updateFilter = ({target: {value}}) => {
      setFilter(value);
    };

    //to change option text do it here here and in recoil.js in function ...filteredTodoListState = selector...
    const options = [todoFilterShowAllTxt, todoFilterCompletedOnlyTxt, todoFilterInProgressOnlyTxt];
  
    return (
        <OptionBox options={options} value={filter} onChange={updateFilter} />         
    );
  }


  export default TodoListFilters;