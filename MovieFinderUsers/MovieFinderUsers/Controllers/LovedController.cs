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
    public class LovedController : ControllerBase
    {
        private readonly MovieDbContext _movieDbContext;

        public LovedController( MovieDbContext movieDbContext)
        {
            _movieDbContext = movieDbContext;
        }
        [Route("GetLoved")]
        [HttpPost]
        public List<Loved> GetLoved([FromBody] Loved user)
        {
            var Lovedlist =  _movieDbContext.LovedList.Where(x => x.UserId == user.UserId).ToList();
           
            return Lovedlist;
        }
        [Route("SaveLoved")]
        [HttpPost]
        public async Task<IActionResult> SaveLoved([FromBody] Loved loved)
        {
            var check = _movieDbContext.LovedList.FirstOrDefault(x => x.MovieId == loved.MovieId);
            if (check == null)
            {
                await _movieDbContext.LovedList.AddAsync(loved);
                await _movieDbContext.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return BadRequest();
            }


            
        }
        [Route("DeleteLoved")]
        [HttpPost]
        public  IActionResult DeleteLoved([FromBody] Loved loved)
        {
            var userLoveList = _movieDbContext.LovedList.Where(x => x.UserId == loved.UserId);
            var movieId = loved.MovieId;
            
            var movieFound = userLoveList.FirstOrDefault(x => x.MovieId == movieId);
            _movieDbContext.LovedList.Remove(movieFound);
            _movieDbContext.SaveChanges();

            return Ok();
        }

    }
}
