import { atom, selector } from 'recoil';


export const todoListState = atom({
    key: 'todoListState',
    default: [],
  });


  export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All Tasks',
  });
  

  export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
      const filter = get(todoListFilterState);
      const list = get(todoListState);
  
      switch (filter) {
        case 'Show All Tasks':
          return list.filter((item) => item);
        case 'Completed Tasks Hidden':
          return list.filter((item) => !item.completed);
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