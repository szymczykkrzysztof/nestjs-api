import { Injectable } from '@nestjs/common';
import { CreateUserDto, ReturnUserDto, UpdateUserDto } from './dto/users.dto';
import { UserNotFoundException } from './errors/users.exception';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/users.model';
import { UserMapper } from './mappers/user.mapper';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findAll(): Promise<ReturnUserDto[]> {
    try {
      const users = await this.userModel.findAll();
      return UserMapper.fromDocToDtoList(users);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findOne(id: string): Promise<ReturnUserDto> {
    try {
      const user = await this.userModel.findByPk(id);
      return UserMapper.fromDocToDto(user);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createUser(dto: CreateUserDto): Promise<ReturnUserDto> {
    try {
      const user = await this.userModel.create(dto);
      return UserMapper.fromDocToDto(user);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createUserWithModel(dto: CreateUserDto): Promise<User> {
    try {
      return await this.userModel.create(dto);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteUser(id: string): Promise<ReturnUserDto> {
    try {
      const user = await this.userModel.findByPk(id);
      if (!user) {
        throw new UserNotFoundException(id);
      }
      await user.destroy();
      return UserMapper.fromDocToDto(user);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateUser(id: string, dto: UpdateUserDto): Promise<ReturnUserDto> {
    try {
      const user = await this.userModel.findByPk(id);
      if (!user) {
        throw new UserNotFoundException(id);
      }
      await user.update(dto);
      return UserMapper.fromDocToDto(user);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
