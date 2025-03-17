import { Module } from '@nestjs/common';
import { TodoController } from './controller/todo.controller';
import { TodoService } from './service/todo.service';
import { Todo } from './entity/todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports:[TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
