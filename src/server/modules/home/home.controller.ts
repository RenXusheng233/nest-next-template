import { Controller, Get, Render } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common';
import { HomeService } from './home.service';
import { QueryInterceptor } from '../../common/interceptors/query.interceptor';

@Controller()
export class HomeController {
  constructor(private readonly appService: HomeService) {}

  @Get('/')
  @Render('index')
  @UseInterceptors(QueryInterceptor)
  public home() {
    return {};
  }
}
