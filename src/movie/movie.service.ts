import { Injectable } from '@nestjs/common';
import { Movie, moviesList } from 'src/core/model/movie';

@Injectable()
export class MovieService {
  private movies: Movie[] = moviesList;

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    return this.movies.find((movie) => movie.id == id);
  }
}
