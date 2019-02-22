import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment";
import { API_ROUTES } from "./api.routes";
@Injectable({
  providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log("request", request);
    // let newUrl = request.url.startsWith(API_ROUTES.COMMON.IMAGE_PATH)? request.url: request.url + "&api_key=" + env.MovieDBAPIKey;
    let newUrl = request.url + "&api_key=" + env.MovieDBAPIKey;
    console.log("newUrl", newUrl);

    const newhttpRequest = new HttpRequest(<any>request.method, newUrl);
    return next.handle(newhttpRequest);
  }
}
