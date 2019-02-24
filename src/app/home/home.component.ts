import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../_services/movies.service";
import { Movie } from "../_models/movie.model";
import { API_ROUTES } from "../_helpers/api.routes";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}
  moviesPageNumber = 1;
  imgPath = "";
  moviesList: Array<Movie>;
  ngOnInit() {
    this.moviesList = new Array<Movie>();
    this.getMovies();
  }

  getMoviePoster(posterPath) {
    return API_ROUTES.COMMON.IMAGE_PATH + posterPath;
  }

  getMovies(PageNumber?) {
    console.log('PageNumber', PageNumber);
    
    if (PageNumber) this.moviesPageNumber = PageNumber;

    console.log('moviesPageNumber', this.moviesPageNumber);

    this.moviesService
      .getPopularMovies(this.moviesPageNumber)
      .subscribe(moviesList => {
        moviesList.forEach((movie: Movie) => {
          this.moviesList.push(movie);
        });
        console.log("moviesList", moviesList);
      });
  }
}
