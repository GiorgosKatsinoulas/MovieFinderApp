using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace MovieAPI.Controllers
{

    [Route("api/[controller]/{search}")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private IMovieService _movieService;
        public MovieController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        
        public  Task<Movie> Movie(string search)
        {
            
            var movieDetails = _movieService.GetMovie(search);

            return movieDetails;
        }

    }
}
