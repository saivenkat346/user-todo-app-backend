import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { user } from 'src/utils/types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(user: user) {
    if (!user) {
        throw new BadRequestException('Name and Email are required');
      }
    
    const newUser = this.usersRepository.create({ ...user });
    this.usersRepository.save(newUser);
  }

  getUser(id: number) {
    if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
    return this.usersRepository.findBy({ id });
  }
}
