using Microsoft.AspNetCore.Mvc;
using MovieFinderUsers.Data;
using MovieFinderUsers.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieFinderUsers.Controllers
{
    [Route("api/[controller]")] // api/loved
    [ApiController]
    public class WatchedController : Controller
    {
        private readonly MovieDbContext _movieDbContext;

        public WatchedController(MovieDbContext movieDbContext)
        {
            _movieDbContext = movieDbContext;
        }
        [Route("GetWatched")]
        [HttpPost]
        public List<Watched> GetWatched([FromBody] Watched user)
        {
            var watchedlist = _movieDbContext.WatchedList.Where(x => x.UserId == user.UserId).ToList();

            return watchedlist;
        }
        [Route("SaveWatched")]
        [HttpPost]
        public async Task<IActionResult> SaveWatched([FromBody] Watched watched)
        {
            var check = _movieDbContext.WatchedList.FirstOrDefault(x => x.MovieId == watched.MovieId);
            if (check == null)
            {
                await _movieDbContext.WatchedList.AddAsync(watched);
                await _movieDbContext.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return BadRequest();
            }

        }
        [Route("DeleteWatched")]
        [HttpPost]
        public IActionResult DeleteWatched([FromBody] Watched watched)
        {
            var userWatchedList = _movieDbContext.WatchedList.Where(x => x.UserId == watched.UserId);
            var movieId = watched.MovieId;

            var movieFound = userWatchedList.FirstOrDefault(x => x.MovieId == movieId);
            _movieDbContext.WatchedList.Remove(movieFound);
            _movieDbContext.SaveChanges();

            return Ok();
        }
    }
}
