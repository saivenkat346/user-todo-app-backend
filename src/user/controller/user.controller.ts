import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDTO } from '../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  fetchUserByID(@Param() id: number) {
    return this.userService.getUser(id);
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  CreateNewUser(@Body() newUser: UserDTO) {
    this.userService.createUser(newUser);
    console.log(newUser);
    return {};
  }
}
