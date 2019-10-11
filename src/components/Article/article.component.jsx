import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core'

class Article extends React.Component {
    render() {
        const { newsArticle, match } = this.props;
        const val = Number(match.params.id) - 1;
        console.log(newsArticle[0][val]);
        const data = newsArticle[0][val];
        const { props } = this.props;
        console.log(props);
        return (
            <div style={{ paddingLeft: '20px' }}>
                <Grid container spacing={2} direction="row">
                    <Grid style={{ maxWidth: '200px' }} item lg={12}>
                        <img src={data.urlToImage} alt={data.title} />
                    </Grid>
                    <Grid item lg={12}>
                        <h2>{data.title}</h2><p>{data.publishedAt.slice(0, 10)}</p> by <h5>{data.author}</h5>
                        <p>{data.content}</p>
                        <a href={data.url} target="_blank" rel="noopener noreferrer">Read More</a>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    newsArticle: state.news.newsArticle
});

export default connect(mapStateToProps)(Article);