using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace MovieAPI.Models
{
    public class MovieService : IMovieService
    {
       
        private string ApiKey = "?api_key=266779098388fcc21422723dea7bc354";

        public async Task<Movie> GetMovie(string search)
        {
            using (var client = new HttpClient())
            {
                string query = "&query=";
                client.BaseAddress = new Uri("https://api.themoviedb.org/3/search/movie");
                string test = ApiKey + query + search;
                var response = await client.GetAsync(test);

                var json = await response.Content.ReadAsStringAsync();

                var movieDetails = JsonConvert.DeserializeObject<Movie>(json);
                return movieDetails;
            }
    
           
        }
    }
}
