import { BadRequestException, NotFoundException } from '@nestjs/common';

export class UserNotFoundException extends NotFoundException {
  constructor(id: string) {
    super(`User with id ${id} not found`);
  }
}

export class UserNameTooShortException extends BadRequestException {
  constructor(message: string = 'Invalid user data') {
    super(message);
  }
}
