import { Controller, Get, Render } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common';
import { HomeService } from './home.service';
import { ParamsInterceptor } from '../../common/interceptors/params.interceptor';

@Controller()
export class HomeController {
  constructor(private readonly appService: HomeService) {}

  @Get('/')
  @Render('index')
  @UseInterceptors(ParamsInterceptor)
  public home() {
    return {};
  }
}
