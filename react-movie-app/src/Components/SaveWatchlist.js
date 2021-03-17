import  React from 'react';


function  SaveWatchlist(watchlistDetails){
    const Url = "https://localhost:5001/api/watchlist/savewatchlist";

   
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(watchlistDetails)
    };
    const response =  fetch(Url, requestOptions);
    return response
};

export default SaveWatchlist