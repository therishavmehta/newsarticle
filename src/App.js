import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import HomePage from './components/HomePage/homepage.component';
import Article from './components/Article/article.component';

const Hats = () => (
  <div>
    <h1>
      Hats Page sdfsdfsdfsvcxcv
  </h1>
  </div>
);

const Button = styled.button`
background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/article/:id" component={Article} />
      </Switch>
    </div>
  );
}

export default App;
