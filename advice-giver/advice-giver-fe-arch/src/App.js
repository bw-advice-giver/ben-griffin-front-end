import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

// Components
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import QuestionsList from './components/QuestionsList';
import Card from './components/QuestionsCard/Card';

import FormikAddQuestion from './components/AddQuestion';

// Private Route(s)
import PrivateRoute from './components/PrivateRoute';

const App = () => {

// HOOK(s)
const [savedList, setSavedList] = useState([])

const addSaved = question => {
  setSavedList([...savedList, question]);
};

  return (
    <Router>
      <div className="App">
        <h1>Advice Giver</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/profile">Profile Page</Link>
          </li>
          <li>
            <Link to="/questions">Question List</Link>
          </li>
          <li>
            <Link to="/addquestion">Post A Question</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />

          <PrivateRoute exact path="/questions" component = {QuestionsList}/>
          <PrivateRoute 
            path="/messages/:id"
            render={props => {
              return <Card {...props} addSaved={addSaved} />
            }}  
          />
          <PrivateRoute exact path="/profile" component={Profile}/>
          <PrivateRoute exact path="/addquestion" component={FormikAddQuestion}/> 

        </Switch>
      </div>
    </Router>
  );
}

export default App;
