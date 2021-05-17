import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import AddTask from "./components/molecules/AddTask";
import EditTask from './components/molecules/EditTask';
import TaskDetails from "./components/molecules/TaskDetails";
import MainView from "./components/views/MainView";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import TodoList from './components/recoilTodoList/TodoList';

const App = () => {
  return (   
    <Router>
      <Switch>
    {/* //   <Redirect exact from="/" to="/home" />    
    //    <Route path="/home" component={MainView} />   
    //    <Route path="/details" component={TaskDetails} />
    //    <Route path="/add" component={AddTask} />   
    //    <Route path="/edit" component={EditTask} />                   
    / */}
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
       </Switch>         
     </Router>  
  );
}

export default App;