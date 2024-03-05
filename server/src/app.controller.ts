import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly userService: AppService) {}

  @Get()
  getHeros(): string {
    return this.userService.getHello();
  }
}
