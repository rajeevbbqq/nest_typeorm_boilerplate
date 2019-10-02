import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Post()
  async someValidation(@Body() inputs: AuthDto) {
    return 'validated successfully';
  }
}
