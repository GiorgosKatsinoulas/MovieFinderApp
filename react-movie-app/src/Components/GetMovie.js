import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from './MovieContext';
import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { SearchContext } from './SearchContext';

function GetMovie() {
    const { data, setData } = useContext(MovieContext);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const Url = "https://localhost:44360/api/movie/";
    const history = useHistory();
    const { search } = useContext(SearchContext);

    console.log(data)
    useEffect(() => {
        fetch(Url + search.search)
            .then(res => res.json())
            .then(
                (result) => {
                    
                    setIsLoaded(true);
                    setData(result.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }, [search]); 

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div><i className="fa fa-spinner"></i></div>;
    } else {
        return (

            <Row>
                {data.map(movie => (
                    <Col key={movie.id} sm={4}>
                        <CardGroup>
                            <Card style={{ width: '18rem' }} className="Card-main">
                                <Card.Img className="Photo" variant="top" src={movie.poster_Path !== null ? "http://image.tmdb.org/t/p/w300//" + movie.poster_Path : "./Images/image.jpg"} />
                                <Card.Body>
                                    <Card.Title>{movie.Title}</Card.Title>
                                    <Card.Text>
                                        Release Date: {movie.release_Date}
                                    </Card.Text>
                                    <Card.Text>
                                        Average Vote: {movie.vote_Average}
                                    </Card.Text>
                                    <Card.Text>
                                        Total Votes: {movie.vote_Count}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    {/*<Link  to={`details/${movie.Id}`}>Details</Link> */}
                                    <button className="btn btn-primary" onClick={() => history.push({
                                        pathname: `/details/${movie.id}`

                                    })}>
                                        Details
                                </button>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Col>
                ))}
            </Row>

        )
    }
}

export default GetMovie