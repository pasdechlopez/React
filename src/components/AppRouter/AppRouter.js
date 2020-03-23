import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <p>We are now on the HOME page</p>
  </div>
);

const About = () => (
  <div>
    <p>We are now on the ABOUT page</p>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);
export default App;
