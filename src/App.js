// import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/layouts/navbar'
import Users from './components/users/Users'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Users/>
    </div>
  );
}

export default App;
