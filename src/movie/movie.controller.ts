import { Controller, Get, Param } from '@nestjs/common';
import { Movie } from 'src/core/model/movie';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get('')
  getMovies(): Movie[] {
    return this.movieService.getMovies();
  }

  @Get(':id')
  getMovieById(@Param('id') id: number): Movie {
    return this.movieService.getMovieById(id);
  }
}
