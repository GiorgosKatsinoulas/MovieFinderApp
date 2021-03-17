import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Components/UserContext';
import DeleteLoved from '../Components/DeleteLoved';

function Loved() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { user } = useContext(UserContext);
    const Url = "https://localhost:5001/api/loved/getloved";
    const [loveData, setLoveData] = useState([]);


    
    useEffect(() => {
        fetch(Url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setLoveData(result);
                    
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, [loveData])
    
    function Delete(movieid){
        DeleteLoved(movieid);
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div><i className="fa fa-spinner"></i></div>;
    } else {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Title</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loveData.length > 0 ? (
                            loveData.map((love,index) => (
                                <tr key={love.movieId}>
                                    <th scope="row">{index+1}</th>
                                    <td>{love.title}</td>
                                    <td>
                                        <button onClick={()=> {Delete(love)}} className="btn btn-danger">
                                        <i className="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <p>No Movie Title choosen yet!</p>
                        )}
                    </tbody>
                </table>
            </div>
        )

    }
}

export default Loved