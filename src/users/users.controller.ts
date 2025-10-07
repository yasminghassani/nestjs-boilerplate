import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [
      { id: 1, name: 'James' },
      { id: 2, name: 'Marten' },
    ];
  }
}
