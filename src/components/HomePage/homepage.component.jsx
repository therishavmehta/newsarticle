import React from 'react';
import ReactDOM from 'react-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Cards extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props;
        return (
            <div>
                <Card style={{ maxWidth: '345px' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={data.title}
                            height="140"
                            image={data.urlToImage}
                            title={data.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {data.title} </Typography> ||
                                <div style={{ fontSize: '10px' }}>
                                {data.author}
                            </div>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {data.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
        </Button>
                        <Button size="small" color="primary">
                            Learn More
        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Cards;