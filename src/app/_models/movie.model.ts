export interface Movie {
  id: number;
  title: string;
  video: boolean;
  adult: boolean;
  overview: string;
  popularity: number;
  vote_count: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  original_title: string;
  genre_ids: Array<number>;
  original_language: string;
}
