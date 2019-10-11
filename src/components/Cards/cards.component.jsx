import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';



class Cards extends React.Component {
    render() {
        const { history } = this.props;
        const { data } = this.props;
        return (
            <Grid container direction="row"  >
                <Grid item lg={3}>
                    <Card style={{ maxWidth: '345px' }} >
                        <CardActionArea>
                            {data.title ? (<CardMedia
                                component="img"
                                alt={data.title}
                                height="140"
                                image={data.urlToImage}
                                title={data.title}
                            />) : null}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {data.title} </Typography>
                                <div style={{ fontSize: '10px' }}>
                                    by {data.author}
                                    <br />
                                </div>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => { history.push(`/article/${data.id}`) }}>
                                Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default withRouter(Cards);