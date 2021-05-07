import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/' exact component={Login}></Route>
      </Switch>
    </BrowserRouter>
  ) 
}