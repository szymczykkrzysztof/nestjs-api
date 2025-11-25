import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, ReturnUserDto, UpdateUserDto } from './dto/users.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/users')
@ApiTags('Users API')
class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @ApiOperation({
    summary: 'Get all users',
  })
  @ApiResponse({
    status: 200,
    type: ReturnUserDto,
    isArray: true,
  })
  async findAll(): Promise<ReturnUserDto[]> {
    return await this.usersService.findAll();
  }
  @Get(':id')
  @ApiOperation({
    summary: 'Get user by id',
  })
  @ApiResponse({
    status: 200,
    type: ReturnUserDto,
    isArray: false,
  })
  async findOne(@Param('id') id: string): Promise<ReturnUserDto> {
    return await this.usersService.findOne(id);
  }
  @Post()
  @ApiOperation({
    summary: 'Create user',
  })
  @ApiResponse({
    status: 201,
    type: ReturnUserDto,
    isArray: false,
  })
  async createUser(@Body() dto: CreateUserDto): Promise<ReturnUserDto> {
    return await this.usersService.createUser(dto);
  }
  @Put(':id')
  @ApiOperation({
    summary: 'Edit user',
  })
  @ApiResponse({
    status: 200,
    type: ReturnUserDto,
    isArray: false,
  })
  async updateUser(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<ReturnUserDto> {
    return await this.usersService.updateUser(id, dto);
  }
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete user',
  })
  @ApiResponse({
    status: 204,
  })
  async deleteUser(@Param('id') id: string) {
    return await this.usersService.deleteUser(id);
  }
}

export default UsersController;
