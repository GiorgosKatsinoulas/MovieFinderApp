using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Models
{
    public class Movie
    {
        public int Page { get; set; }
        public List<Result> Results { get; set; }
        public int Total_Results { get; set; }
        public int Total_Pages { get; set; }
    }
    public class Result
    {
        public string Poster_Path { get; set; }
        public bool Adult { get; set; }
        public string Overview { get; set; }
        public string Release_Date { get; set; }
        public List<int> Genre_Ids { get; set; }
        public int Id { get; set; }
        public string Original_Title { get; set; }
        public string Original_Language { get; set; }
        public string Title { get; set; }
        public string Backdrop_Path { get; set; }
        public float Popularity { get; set; }
        public int Vote_Count { get; set; }
        public bool Video { get; set; }
        public float Vote_Average { get; set; }

    }
}
