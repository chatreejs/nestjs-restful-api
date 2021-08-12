import { Controller, Get } from '@nestjs/common';
import { Title } from 'src/core/model/title';
import { TitleService } from './title.service';

@Controller('titles')
export class TitleController {
  constructor(private titleService: TitleService) {}
  @Get()
  getTitles(): Title[] {
    return this.titleService.getTitle();
  }
}
