import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FullNewsModal from '../fullnewsmodal/fullnewsmodal';
import axios from 'axios';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import nonewsimage from '../../../nonewsimage.png';
import CircularProgress from '@material-ui/core/CircularProgress';

const NewsCard = props => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(false);
    const [news, setNews] = useState(false);
    const [newsImage, setNewsImage] = useState(null);
    const [loading, setloading] = useState(false);
    
    const handleOpen = () => {
        setloading(true);
        axios.get(`https://geekynews.herokuapp.com/fullnews?link=${props.newslink}`).then(response => {
            setTitle(response.data.title);
            setNews(response.data.news);
            setNewsImage(response.data.image);
            setOpen(true);
            setloading(false);
        }).catch(err => console.log(err));
      };
    
      const handleClose = () => {
        setOpen(false);
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
                    {
                        !loading ?
                        "Read More":
                        <CircularProgress size={20} color="secondary" /> 
                    }
                </Button>
            </CardActions>
        </Card>
        <FullNewsModal open={open} handleClose={handleClose} title={title} news={news} newsImage={newsImage} />
        </>
    );
}

export default NewsCard;