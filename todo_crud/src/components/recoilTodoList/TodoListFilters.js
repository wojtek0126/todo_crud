/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../functions/recoil";
import OptionBox from "../atoms/OptionBox";
import SearchField from '../atoms/SearchBox';
import SearchBox from '../atoms/SearchBox';
import TestComponent from '../atoms/TestSearch';
import TestSearch from '../atoms/TestSearch';

function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);
  
    const updateFilter = ({target: {value}}) => {
      setFilter(value);
    };

    const options = [`Show all`, `Show completed`, `Show Uncompleted`];
  
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
        {/* <TestSearch />       */}
      </Flex>
    );
  }

  export default TodoListFilters;