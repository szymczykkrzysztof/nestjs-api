import { Injectable } from '@nestjs/common';
import { UserInterface } from './interface/users.inteface';

@Injectable()
export class UsersService {
  private readonly users: UserInterface[] = [
    { id: '1', name: 'John' },
    { id: '2', name: 'Doe' },
  ];
  findAll(): UserInterface[] {
    return this.users;
  }
  findOne(id: string): UserInterface {
    return this.users.filter((x) => x.id == id)[0];
  }
}
