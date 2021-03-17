using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Models
{
    public interface IMovieService 
    {
        Task<Movie> GetMovie(string search);
    }
}
