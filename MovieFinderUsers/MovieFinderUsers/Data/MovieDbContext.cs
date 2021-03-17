using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MovieFinderUsers.Models;


namespace MovieFinderUsers.Data
{
    public class MovieDbContext : IdentityDbContext
    {
        public virtual DbSet<RefreshToken> RefreshTokens { get; set; }
        public virtual DbSet<Loved> LovedList { get; set; }
        public virtual DbSet<Watched> WatchedList { get; set; }
        public virtual DbSet<Watchlist> Watchlists { get; set; }


        public MovieDbContext(DbContextOptions<MovieDbContext> options)
            : base(options)
        {

        }

    }
}
