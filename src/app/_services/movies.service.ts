import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { API_ROUTES } from "../_helpers/api.routes";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  getPopularMovies(pageNumber = 1) {
    // params.set("addKey", "false");
    return this.http
      .get(
        API_ROUTES.MOVIES.POPULAR.replace(
          "{PAGE_NUMBER}",
          pageNumber.toString()
        )
      )
      .pipe(
        map(res => {
          return res["results"];
        })
      );
  }
}
