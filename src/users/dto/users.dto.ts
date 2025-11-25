import { UserInterface } from '../interface/users.inteface';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class UserDto implements UserInterface {
  @ApiProperty()
  @IsString()
  @Length(3)
  name: string;
}

export class CreateUserDto extends UserDto {}
export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  @Length(3)
  name: string;
}
export class ReturnUserDto {
  @ApiProperty()
  @IsString()
  id: string;
  @ApiProperty()
  @IsString()
  name: string;
}
