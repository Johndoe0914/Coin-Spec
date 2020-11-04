import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings'
import Navbar from './components/Navbar';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signup' exact component={Signup} />
        <Route path='/login' exact component={Login} />
        <Route path='/dashboard/:userId' exact component={Dashboard}/>
        <Route path='/settings/:userId' exact component={Settings} />

      </Switch>
    </Router>
  );
}

export default App;
