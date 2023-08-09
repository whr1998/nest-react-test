import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUserInfo')
  getUser() {
    return this.userService.getUser();
  }

  @Post('addUser')
  addUser(@Body() userDto: UserDto) {
    return this.userService.addUser(userDto);
  }

  @Put('editUser/:id')
  editUser(@Param('id') id: string, @Body() user: any) {
    return this.userService.editUser(id, user);
  }

  @Delete('deleteUser/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
