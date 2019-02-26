import { Component, OnInit, HostListener } from "@angular/core";
import { MoviesService } from "../_services/movies.service";
import { Movie } from "../_models/movie.model";
import { API_ROUTES } from "../_helpers/api.routes";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MoviesService) { }
  moviesPageNumber = 1;
  imgPath = "";
  moviesList: Array<Movie>;
  finished: Boolean;
  ngOnInit() {
    this.moviesList = new Array<Movie>();
    this.getMovies();
  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // Load Your Data Here
      this.getMovies(this.moviesPageNumber + 1)
      // alert('onScroll Fired')
    }
  }

  getMoviePoster(posterPath) {
    return API_ROUTES.COMMON.IMAGE_PATH + posterPath;
  }

  getMovies(PageNumber?) {
    console.log('moviesList', this.moviesList);

    if (PageNumber) this.moviesPageNumber = PageNumber;

    this.finished = false;
    this.moviesService
      .getPopularMovies(this.moviesPageNumber)
      .subscribe(moviesList => {
        moviesList.forEach((movie: Movie) => {
          this.moviesList.push(movie);
        });
        this.finished = true
      });
  }
}
