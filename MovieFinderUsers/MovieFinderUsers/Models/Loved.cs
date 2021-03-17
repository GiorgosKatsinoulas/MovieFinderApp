using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieFinderUsers.Models
{
    public class Loved
    {

        
        [Key]
        public int Id { get; set; }
        public int MovieId { get; set; }
        public string UserId { get; set; }
        public string Title { get; set; }

        [ForeignKey(nameof(UserId))]
        public IdentityUser User { get; set; }
    }
}
