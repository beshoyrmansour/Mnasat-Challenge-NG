import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newhttpRequest = new HttpRequest(
      <any>request.method,
      request.url + "&api_key=" + env.MovieDBAPIKey
    );
    return next.handle(newhttpRequest);
  }
}
