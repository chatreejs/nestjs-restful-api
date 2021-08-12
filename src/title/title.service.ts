import { Injectable } from '@nestjs/common';
import { Title, titleList } from 'src/core/model/title';

@Injectable()
export class TitleService {
  private titles: Title[] = titleList;

  getTitle(): Title[] {
    return this.titles;
  }
}
