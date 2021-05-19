import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../functions/recoil";
import OptionBox from "../atoms/OptionBox";

function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);
  
    const updateFilter = ({target: {value}}) => {
      setFilter(value);
    };

    const options = [`Show All Tasks`, `Hide Completed Tasks`];
  
    return (
        <OptionBox options={options} value={filter} onChange={updateFilter} backgroundColor={`foreground`} />         
    );
  }


  export default TodoListFilters;