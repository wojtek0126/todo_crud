import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import { getAllTasks } from '../API/fetch';




//   const GetTasks = () => {
//       const [tasks, setTasks] = useState([])
      
//       useEffect(() => {
//           getAllTasks(`todos`, setTasks)          
//       }, [])

// //   }
// const tasksAll = []
// getAllTasks(`todos`, tasksAll)
// console.log(tasksAll, "dfsdfsdffsd")
// const mySelector = selector({
//     key: 'mySelector',
//     get: async ({get}) => {
//      return await getAllTasks("todos");
//     }
//   })

export const todoListState = atom({
    key: 'todoListState',
    default: [],
  });

  export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
  });

  export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
      const filter = get(todoListFilterState);
      const list = get(todoListState);
  
      switch (filter) {
        case 'Show All':
          return list.filter((item) => item.isComplete);
        case 'Hide Completed':
          return list.filter((item) => !item.isComplete);
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
      const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
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