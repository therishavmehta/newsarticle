import React from 'react';
import Cards from '../Cards/cards.component';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { setNews } from '../../store/news/actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Grid } from '@material-ui/core';

const SearchField = styled.input`
    width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url('searchicon.png');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

&:focus {
  width: 70%;
}`;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsArticle: [],
            searchContent: null,
            searchArticle: []
        }
    }
    componentWillMount() {
        const { setNews } = this.props;
        try {
            fetch('http://www.mocky.io/v2/5d8686a032000024b607b40e')
                .then(response => response.json())
                .then(newsArticle => {
                    this.setState({ newsArticle: newsArticle.articles, searchArticle: newsArticle.articles }, () => {
                        var temp = this.state.newsArticle;
                        temp.forEach((item, index) => item.id = index + 1);
                        console.log(temp);
                        setNews({ ...temp });
                    })
                });
        } catch (error) {
            alert(error);
        }
    }
    render() {
        return (
            <div style={{ padding: '20px' }}>
                <Grid container spacing={3} direction="column">
                    <Grid item>
                        <SearchField type="search" placeholder="search content" onChange={this.handleChange} />
                    </Grid>
                    <Grid item>
                        {this.state.searchArticle.map((data, index) => (<Cards key={index} data={data} />))}
                    </Grid>
                </Grid>
            </div>
        );
    }
    handleChange = (e) => {
        if (e.target.value !== this.state.searchContent) {
            this.setState({ searchContent: e.target.value });
            this.changeData(e.target.value, this.state.newsArticle);
        }
    }
    changeData(search, data) {
        var newData = [];
        data.forEach((item) => {
            for (let property in item) {
                if (item.hasOwnProperty(property) && item[property] !== null && search !== null) {
                    if (item[property].toString().toLowerCase().indexOf(search.toLowerCase()) > -1) {
                        if (!newData.includes(item)) {
                            newData.push(item);
                        }
                    }
                }
            }
        });
        this.setState({
            searchArticle: newData
        })
    }
    handleClick = (key) => {
        console.log("hello", key);
    }
}

const mapDispatchToProps = dispatch => ({
    setNews: news => dispatch(setNews(news))
});

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(HomePage);