import { useRecoilState } from "recoil";
import { Flex } from "theme-ui";
import { todoListFilterState } from "../../functions/recoil";
import OptionBox from "../atoms/OptionBox";

function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);
  
    const updateFilter = ({target: {value}}) => {
      setFilter(value);
    };

    const options = [`Show All`, `Hide Completed`];
  
    return (
        <Flex
    sx={{
      flexDirection: 'column',
      background: 'linear-gradient(rgba(10,0,0,0.1),transparent)',     
      backgroundColor: 'foreground',
      borderRadius: 4,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}
  >
        Filter:
        <OptionBox options={options} value={filter} onChange={updateFilter} backgroundColor={`foreground`} />         
      </Flex>
    );
  }

  export default TodoListFilters;