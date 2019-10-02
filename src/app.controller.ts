import { Controller, Get, Post, Body } from '@nestjs/common';

import { InjectQueue } from 'nest-bull';
import { DoneCallback, Job, Queue } from 'bull';

import { AppService } from './app.service';
import { AuthDto } from './app.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectQueue('test-queue') readonly queue: Queue,
  ) {}

  @Get('job')
  async runJob(): Promise<string> {
    return await this.queue.add('test-queue');
  }

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Post()
  async someValidation(@Body() inputs: AuthDto) {
    return 'validated successfully';
  }
}
