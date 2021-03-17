import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Components/UserContext';
import DeleteWatchlist from '../Components/DeleteWatchlist';

function Watchlist() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { user } = useContext(UserContext);
    const Url = "https://localhost:5001/api/watchlist/getwatchlist";
    const [watchlistData, setWatchlistData] = useState([]);


    
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
                    setWatchlistData(result);
                    
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, [watchlistData])
    
    function Delete(movieid){
        DeleteWatchlist(movieid);
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
                        {watchlistData.length > 0 ? (
                            watchlistData.map((watchlist,index) => (
                                <tr key={watchlist.movieId}>
                                    <th scope="row">{index+1}</th>
                                    <td>{watchlist.title}</td>
                                    <td>
                                        <button onClick={()=> {Delete(watchlist)}} className="btn btn-danger">
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

export default Watchlist