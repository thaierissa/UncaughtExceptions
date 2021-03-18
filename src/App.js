import React from 'react';
import { Container } from 'react-bootstrap';
import Particles from './components/Particles';
import LinkList from './components/LinkList'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Particles />
      <main>
        <Container>
          <LinkList/>
        </Container>
      </main>
    </Router>
  );
};

export default App;
