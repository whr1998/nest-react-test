import { Injectable } from '@nestjs/common';
import { USERS } from '../mock/index.js';

@Injectable()
export class AppService {
  getUser(): string {
    return USERS;
  }

  addUser(user) {
    USERS.push({
      id: USERS.length + 1,
      ...user,
    });
    return USERS;
  }
}
