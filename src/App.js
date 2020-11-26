import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Navbar from './components/layouts/navbar'
import Users from './components/users/Users'
import UserItem from './components/users/UserItem'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>

            <Switch>
              <Route exact path="/users" component={Users} />
              <Route exact path="/users/:login" component={UserItem} />
              <Route exact component={Users} />
            </Switch>
      </div>
    </Router>
  );
}

export default App;
