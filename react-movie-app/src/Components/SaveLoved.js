import  React from 'react';


function  SaveLoved(loveDetails){
    const Url = "https://localhost:5001/api/loved/saveloved";

   
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loveDetails)
    };
    const response =  fetch(Url, requestOptions);
    return response
};

export default SaveLoved