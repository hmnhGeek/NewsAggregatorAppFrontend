import React, {useState} from 'react';
import SearchBar from '../../components/searchbar/searchbar';
import NewsCard from '../../components/searchbar/newscards/newscards';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import CircularIndeterminate from '../../components/spinner/spinner';

const Homepage = props => {
    const [searchResults, setSearchResults] = useState(null);
    const [loading, setloading] = useState(false);

    const searchNews = (keyword) => {
        setloading(true);
        axios.get(`https://geekynews.herokuapp.com/getheadlinesfor?keyword=${keyword}&page=1`).then(response => {
            setSearchResults(response.data);
            setloading(false);
        }).catch(err => console.log(err));
    }

    const renderGrid = data => {
        if (data !== null) {
            const columns = 2;
            const rows = Math.ceil(data.length / columns);
            let grids = [];

            for(var i=0; i<rows; i++) {
                for(var j=0; j<columns; j++) {
                    try {
                        let d = data[columns*i + j];
                        grids.push(
                            <Grid item xs={12/columns}>
                                <NewsCard 
                                    newsSource={d.news_source}
                                    headline={d.headline}
                                    date={d.date}
                                    description={d.description}
                                    newslink={d.link}
                                    thumbnail={d.thumbnail}
                                />
                            </Grid>
                        );
                    }
                    catch {
                        break
                    }
                }
            }

            return <Container><Grid container spacing={rows}>{grids}</Grid></Container>;
        }
    }

    return (
        <div style={{textAlign: "center", marginTop: "5%"}}>
            <SearchBar searchMethod={searchNews} />
            <br />
            {loading ? <CircularIndeterminate /> : renderGrid(searchResults)}
        </div>
    );
}

export default Homepage;