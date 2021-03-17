import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../Components/MovieContext';
import { Container } from 'react-bootstrap';
import {  useHistory } from 'react-router-dom';
import { isLoggedContext } from '../Components/isLoggedContext';
import { UserContext } from '../Components/UserContext';
import SaveLoved from '../Components/SaveLoved';
import DeleteLoved from '../Components/DeleteLoved';
import SaveWatched from '../Components/SaveWatched';
import DeleteWatched from '../Components/DeleteWatched';
import SaveWatchlist from '../Components/SaveWatchlist';
import DeleteWatchlist from '../Components/DeleteWatchlist';

function Details() {
    const { id } = useParams();
    const { data } = useContext(MovieContext);
    const history = useHistory();
    const {isLogged}= useContext(isLoggedContext);
    const {user} = useContext(UserContext);
    const [heartButton, setHeartButton]= useState(false);
    const [watchlistButton, setWatchlistButton]= useState(false);
    const [watchedButton, setWatchedButton]= useState(false);

    //Watchlist Buttons
    async function SvWatchlist(watchlistDetails){
       
        SaveWatchlist(watchlistDetails)
    }
    const SaveWatchlistButton = async watchlistDetails =>{
        await SvWatchlist({
            movieid: watchlistDetails.id,
            title: watchlistDetails.title,
            userid: user.userid
        });
        setWatchlistButton(true);
    }
    async function DltWatchlist(watchlistDetails){
        
        DeleteWatchlist(watchlistDetails)
    }

    const DeleteWatchlistButton = async watchlistDetails =>{
        await DltWatchlist({
            movieid: watchlistDetails.id,
            userid: user.userid
        });
        setWatchlistButton(false);
    }
    //Watched Buttons
    async function SvWatched(watchedDetails){
       
        SaveWatched(watchedDetails)
    }
    const SaveWatchedButton = async watchedDetails =>{
        await SvWatched({
            movieid: watchedDetails.id,
            title: watchedDetails.title,
            userid: user.userid
        });
        setWatchedButton(true);
    }
    async function DltWatched(watchedDetails){
        
        DeleteWatched(watchedDetails)
    }

    const DeleteWatchedButton = async watchedDetails =>{
        await DltWatched({
            movieid: watchedDetails.id,
            userid: user.userid
        });
        setWatchedButton(false);
    }
    //Love Buttons
    async function SaveLove(loveDetails){
       
         SaveLoved(loveDetails)
        
    }
    const SaveLoveButton = async loveDetails =>{
        await SaveLove({
            movieid: loveDetails.id,
            title: loveDetails.title,
            userid: user.userid
        });
       
        setHeartButton(true);
    }
    async function DeleteLove(loveDetails){
        
        DeleteLoved(loveDetails)
        
    }

    const DeleteLoveButton = async loveDetails =>{
        await DeleteLove({
            movieid: loveDetails.id,
            userid: user.userid
        });
        setHeartButton(false);
    }
    return (
        <Container style={{ width: '20rem'}}>
            {data.filter(movie => movie.id == id).map(filteredMovie => (
                <div key={filteredMovie.id}>
                    <img className="BackPhoto" alt="Photo"src={filteredMovie.backdrop_Path !== null ? "http://image.tmdb.org/t/p/w300//" + filteredMovie.backdrop_Path : "../Images/image.jpg"}  />
                    <h3>{filteredMovie.title}</h3>
                    <p>Overview:</p>
                    <p>{filteredMovie.overview}</p>
                   {isLogged &&
                   <div>
                    {watchedButton ? <button className="btn btn-danger" onClick={() =>{DeleteWatchedButton(filteredMovie)}}>Watched</button> :  <button className="btn btn-dark" onClick={() =>{SaveWatchedButton(filteredMovie)}}>Watched</button>}
                    {heartButton ? <button className="btn btn-danger" onClick={() =>{DeleteLoveButton(filteredMovie)}}><i class="fa fa-heart"></i></button> :  <button className="btn btn-dark" onClick={() =>{SaveLoveButton(filteredMovie)}}><i class="fa fa-heart"></i></button>}
                    {watchlistButton ? <button className="btn btn-danger" onClick={() =>{DeleteWatchlistButton(filteredMovie)}}>Watchlist</button> :  <button className="btn btn-dark" onClick={() =>{SaveWatchlistButton(filteredMovie)}}>Watchlist</button>}
                    </div>
                    }
                    <div>
                    <button className="btn btn-primary" onClick={() =>{
                        history.push({pathname:'/search' , from: "Details"});
                    }}>
                        Go back
                    </button>
                    </div>
                </div>
            ))}
        </Container>
    )
}

export default Details