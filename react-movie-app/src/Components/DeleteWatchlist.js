import  React from 'react';


function  DeleteWatchlist(movieid){
    const Url = "https://localhost:5001/api/watchlist/deletewatchlist";

    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieid)
    };
    const response =  fetch(Url, requestOptions);
    

};

export default DeleteWatchlist