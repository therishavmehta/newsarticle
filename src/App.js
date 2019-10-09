import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import styled from 'styled-components';
import Cards from './components/HomePage/homepage.component';


const Hats = () => {
  return <h1>
    Hats Page
  </h1>
}

const Button = styled.button`
background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArticle: []
    }
  }
  componentWillMount() {
    fetch('http://www.mocky.io/v2/5d8686a032000024b607b40e')
      .then(response => response.json())
      .then(newsArticle => this.setState({ newsArticle: newsArticle.articles }));
  }
  render() {
    return (
      <div style={{ padding: '20px' }}>
        {this.state.newsArticle.map((data, index) => (<Cards key={index} data={data} />))}
      </div>
    );
  }
}

export default App;
