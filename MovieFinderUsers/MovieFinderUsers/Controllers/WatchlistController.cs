using Microsoft.AspNetCore.Mvc;
using MovieFinderUsers.Data;
using MovieFinderUsers.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieFinderUsers.Controllers
{
    [Route("api/[controller]")] // api/Watchlist
    [ApiController]
    public class WatchlistController : Controller
    {
        private readonly MovieDbContext _movieDbContext;

        public WatchlistController(MovieDbContext movieDbContext)
        {
            _movieDbContext = movieDbContext;
        }
        [Route("GetWatchlist")]
        [HttpPost]
        public List<Watchlist> GetWatchlist([FromBody] Watchlist user)
        {
            var Watchlistlist = _movieDbContext.Watchlists.Where(x => x.UserId == user.UserId).ToList();

            return Watchlistlist;
        }
        [Route("SaveWatchlist")]
        [HttpPost]
        public async Task<IActionResult> SaveWatchlist([FromBody] Watchlist watchlist)
        {
            var check = _movieDbContext.Watchlists.FirstOrDefault(x => x.MovieId == watchlist.MovieId);
            if (check == null)
            {
                await _movieDbContext.Watchlists.AddAsync(watchlist);
                await _movieDbContext.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return BadRequest();
            }

        }
        [Route("DeleteWatchlist")]
        [HttpPost]
        public IActionResult DeleteWatchlist([FromBody] Watchlist watchlist)
        {
            var userWatchList = _movieDbContext.Watchlists.Where(x => x.UserId == watchlist.UserId);
            var movieId = watchlist.MovieId;

            var movieFound = userWatchList.FirstOrDefault(x => x.MovieId == movieId);
            _movieDbContext.Watchlists.Remove(movieFound);
            _movieDbContext.SaveChanges();

            return Ok();
        }
    }
}
