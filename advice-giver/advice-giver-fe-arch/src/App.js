import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

// Components
import Login from './components/Login';
import SignUp from './components/SignUp';
<<<<<<< HEAD
import AddQuestion from './components/AddQuestion';
=======
import Profile from './components/Profile';

// Private Route(s)
import PrivateRoute from './components/PrivateRoute';
>>>>>>> f0201b20203e871e81ef725e8d80238843902310

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
<<<<<<< HEAD
            <Link to="/add-question">Add Question</Link>
=======
            <Link to="/profile">Profile Page</Link>
          </li>
          <li>
            <Link to="/questions">Question List</Link>
>>>>>>> f0201b20203e871e81ef725e8d80238843902310
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
<<<<<<< HEAD
          <Route  exact path = "/add-question" component = {AddQuestion} />
=======
          <PrivateRoute exact path="/profile" component={Profile}/>
          {/* <PrivateRoute exact path="/questions" component={Questions}/> */}
>>>>>>> f0201b20203e871e81ef725e8d80238843902310
        </Switch>
      </div>
    </Router>
  );
}

export default App;
