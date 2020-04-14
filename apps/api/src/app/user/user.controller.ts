import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  getUser(): Promise<User[]> {
    console.log('user/user');

    return this.userService.findAll();
  }
}
