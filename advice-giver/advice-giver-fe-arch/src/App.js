import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

// Components
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddQuestion from './components/AddQuestion';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello From APP</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/add-question">Add Question</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route  exact path = "/add-question" component = {AddQuestion} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
