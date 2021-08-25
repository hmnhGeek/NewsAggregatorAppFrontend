import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import CircularIndeterminate from '../../components/spinner/spinner';

const FullNewsPage = props => {
    const [loading, setloading] = useState(false);
    const [title, setTitle] = useState(false);
    const [news, setNews] = useState(false);
    const [newsImage, setNewsImage] = useState(null);

    useEffect(() => {
        console.log(props)
        setloading(true);
        axios.get(`https://geekynews.herokuapp.com/fullnews?link=${atob(props.match.params.newslink)}`).then(response => {
            // eslint-disable-next-line    
            setTitle(response.data.title);
            // eslint-disable-next-line    
            setNews(response.data.news);
            // eslint-disable-next-line    
            setNewsImage(response.data.image);
            // eslint-disable-next-line    
            setloading(false);
        }).catch(err => console.log(err));
    }, []);
    
    return (
        <Container>
            {
                loading ?
                <CircularIndeterminate /> :
                <>
                    <h1>{title}</h1>
                    {newsImage && <img style={{display: 'block', margin: '0 auto'}} src={newsImage} />}
                    <br />
                    <p align="justify" style={{fontSize: "20px", fontFamily: 'timesnewroman', lineHeight: "1.5"}} id="transition-modal-description">{news}</p>
                </>
            }
        </Container>
    );
}

export default FullNewsPage;