import  React from 'react';


function  DeleteWatched(movieid){
    const Url = "https://localhost:5001/api/watched/deletewatched";

    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieid)
    };
    const response =  fetch(Url, requestOptions);
    

};

export default DeleteWatched