import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import TitleScreen from './components/recoilTodoList/TitleScreen';
import TodoList from './components/recoilTodoList/TodoList';
import Normalize from 'react-normalize';


const App = () => {
  return ( 
    <>  
    <Normalize />
    <Router>
      <Switch>
       <Redirect exact from="/" to="/home" />    
        <Route path="/action" component={TodoList} />   
        <Route path="/home" component={TitleScreen} />   
      <TodoList />    
     </Switch>         
    </Router>
    </>  
  );
}

export default App;