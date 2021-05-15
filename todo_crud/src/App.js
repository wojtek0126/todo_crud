import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddTask from "./components/molecules/AddTask";
import EditTask from './components/molecules/EditTask';
import TaskDetails from "./components/molecules/TaskDetails";
import MainView from "./components/views/MainView";

const App = () => {
  return (
    <>  
    <Router>
      <Switch>
        <Route path="/home" component={MainView} />           
        <Route path="/details" component={TaskDetails} />
        <Route path="/add" component={AddTask} />   
        <Route path="/edit" component={EditTask} />           
      </Switch>         
    </Router> 
  </>   
  );
}

export default App;