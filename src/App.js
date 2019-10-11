import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/homepage.component';
import Article from './components/Article/article.component';


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
