using Microsoft.EntityFrameworkCore.Migrations;

namespace MovieFinderUsers.Migrations
{
    public partial class AddingMovieId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MovieId",
                table: "Watchlists",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MovieId",
                table: "WatchedList",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MovieId",
                table: "LovedList",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MovieId",
                table: "Watchlists");

            migrationBuilder.DropColumn(
                name: "MovieId",
                table: "WatchedList");

            migrationBuilder.DropColumn(
                name: "MovieId",
                table: "LovedList");
        }
    }
}
