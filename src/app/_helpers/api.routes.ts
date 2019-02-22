import { environment as env } from "src/environments/environment";

export const API_ROUTES = {
  MOVIES: {
    POPULAR: env.BaseUrl + "movie/popular?language=en-US&page={PAGE_NUMBER}"
  },
  people: {
    POPULAR: "person/popular?page={PAGE_NUMBER}"
  }
};
