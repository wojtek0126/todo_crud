import { atom, selector } from 'recoil';
import { showAllTasksTxt,showInProgressOnlyTxt, showCompletedOnlyTxt} from '../content/contentEng';


export const todoListState = atom({
    key: 'todoListState',
    default: [],
  }); 


  export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: showAllTasksTxt,
  });
  

  export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
      const filter = get(todoListFilterState);
      const list = get(todoListState);
  
      switch (filter) {
        case showAllTasksTxt:
          return list.filter((item) => item);
        case showInProgressOnlyTxt:
          return list.filter((item) => !item.completed);
          case showCompletedOnlyTxt:
            return list.filter((item) => item.completed);
        default:
          return list;
      }
    },
  });


  export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
      const todoList = get(todoListState);
      const totalNum = todoList.length;
      const totalCompletedNum = todoList.filter((item) => item.completed).length;
      const totalUncompletedNum = totalNum - totalCompletedNum;
      const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;
  
      return {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
      };
    },
  });