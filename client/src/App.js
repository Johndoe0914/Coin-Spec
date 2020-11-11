import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings'
import Navbar from './components/Navbar';

import reducer, { initialState } from "./reducers/user";
import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();

//redux






const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{state, dispatch}}>
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
    </StateContext.Provider>

  );
}
export const useStateValue = () => useContext(StateContext);

export default App;
