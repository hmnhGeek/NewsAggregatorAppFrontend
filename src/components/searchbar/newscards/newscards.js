import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import nonewsimage from '../../../nonewsimage.png';

const NewsCard = props => {
    
    const handleOpen = () => {
        window.open(`/fullnews/${btoa(props.newslink)}`);
    };
    
    return (
        <>
        <Card>
            <CardActionArea>
            <CardMedia
                component="img"
                height="250"
                image={props.thumbnail ? props.thumbnail : nonewsimage}
            />
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {props.newsSource}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.headline}
                </Typography>
                <Typography color="textSecondary">
                    {props.date}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" onClick={handleOpen}>
                    Read more
                </Button>
            </CardActions>
        </Card>
        </>
    );
}

export default NewsCard;