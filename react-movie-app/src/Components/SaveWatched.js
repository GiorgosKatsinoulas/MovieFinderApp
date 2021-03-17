import  React from 'react';


function  SaveWatched(watchedDetails){
    const Url = "https://localhost:5001/api/watched/savewatched";
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(watchedDetails)
    };
    const response =  fetch(Url, requestOptions);
    return response
};

export default SaveWatched