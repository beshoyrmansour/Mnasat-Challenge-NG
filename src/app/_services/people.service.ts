import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { API_ROUTES } from "../_helpers/api.routes";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient) { }
  getPopularPeople(pageNumber = 1) {
    // params.set("addKey", "false");
    return this.http
      .get(
        API_ROUTES.PEOPLE.POPULAR.replace("{PAGE_NUMBER}", pageNumber.toString())
      )
      .pipe(
        map(res => {
          return res["results"];
        })
      );
  }

  getPersonDetails(personId) {
   return this.http.get(API_ROUTES.PEOPLE.DETAILS.replace("{PESRON_ID}", personId.toString()))
  }
}
