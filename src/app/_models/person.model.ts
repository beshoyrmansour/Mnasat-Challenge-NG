import { Movie } from './movie.model';

export interface Person {
    adult: boolean;
    id: number;
    known_for: Movie[];
    length: number;
    name: string;
    popularity: number;
    profile_path: string;
}