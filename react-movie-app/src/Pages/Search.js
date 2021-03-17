import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import GetMovie from '../Components/GetMovie';
import { SearchContext } from '../Components/SearchContext';


function Search({ location }) {
    const { register, handleSubmit } = useForm();
    const { search, setSearch } = useContext(SearchContext);
    const onSubmit = (data,e)=> {
        setSearch(data);
        e.target.reset();
    };

    useEffect(() => {
        if (location.from !== 'Details') {
            if (search !== '') {
                setSearch('');
            }
        }

    },[]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input defaultValue="" name="search" ref={register} className="form-control" type="search"></input>
                </div>
                <button type="submit" className="btn btn-primary">
                    <i className="fa fa-search"></i>
                </button>
            </form>
            <div>

                {search === '' ? null : <GetMovie props={search} />}


            </div>
        </div>
    )
}
export default Search