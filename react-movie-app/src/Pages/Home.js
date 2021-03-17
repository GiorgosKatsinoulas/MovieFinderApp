import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {isLoggedContext} from '../Components/isLoggedContext';

function Home(){
    const {isLogged} = useContext(isLoggedContext);
    return(
        <Container>
        <div>
            <h1>Welcome to Movie Finder</h1>
            <img alt="movie" src="./Images/moviephoto.jpg"/>
        </div>
        <div>
        <Link to="/search"><button className="btn btn-primary">Search</button></Link>
        {!isLogged &&
            <div>
            <h3>You can save your Loved movies,you can mark them as watched and finally create a watchlist by registering!</h3>
            <h3>...or log in if you are already member in our community!</h3>
            <Link to="/register"><button className="btn btn-primary">Register</button></Link>
            <Link to="/login"><button className="btn btn-primary">Log in</button></Link>
        </div>}
        </div>
        </Container>
    )
}

export default Home