import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';
import { TitleController } from './title/title.controller';
import { TitleService } from './title/title.service';

@Module({
  imports: [],
  controllers: [AppController, MovieController, TitleController],
  providers: [AppService, MovieService, TitleService],
})
export class AppModule {}
