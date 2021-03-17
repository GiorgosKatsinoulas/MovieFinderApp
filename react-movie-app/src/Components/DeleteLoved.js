import  React from 'react';


function  DeleteLoved(movieid){
    const Url = "https://localhost:5001/api/loved/deleteloved";

    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieid)
    };
    const response =  fetch(Url, requestOptions);
    

};

export default DeleteLoved