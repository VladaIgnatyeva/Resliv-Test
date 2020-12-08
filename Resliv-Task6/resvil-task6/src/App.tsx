import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Employees } from './Pages/Employees';
import { Home } from './Pages/Home';

const App = () => {
  return (
    <>
      <Router >
        <Header />

        <Route
          component={(props: any) => <Home {...props} />}
          path='/'
          exact
        />
        <Route
          component={(props: any) => <Employees {...props} />}
          path='/employees'
          exact
        />
      </Router>
    </>
  );
}

export default App;
