import { Controller, Get, Render } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common';
import { ThreeService } from './three.service';
import { QueryInterceptor } from '../../common/interceptors/query.interceptor';

@Controller()
export class ThreeController {
  constructor(private readonly appService: ThreeService) {}

  @Get('/three')
  @Render('/three')
  @UseInterceptors(QueryInterceptor)
  public three() {
    return {};
  }
}
