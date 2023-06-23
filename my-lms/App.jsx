// App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CourseList from './components/CourseList';
import Lesson from './components/Lesson';
import Quiz from './components/Quiz';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Courses</Link>
            </li>
            <li>
              <Link to="/lesson">Lesson</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={CourseList} />
          <Route path="/lesson" component={Lesson} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
