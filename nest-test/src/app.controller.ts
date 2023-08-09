import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser() {
    return this.appService.getUser();
  }

  @Post()
  addUser(@Body() user) {
    return this.appService.addUser(user);
  }
}
