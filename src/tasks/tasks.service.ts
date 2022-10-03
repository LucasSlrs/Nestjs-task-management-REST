import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.entity';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private taskEntityRepository: TaskRepository) {}

  async getTaskById(id: string): Promise<Task> {
    return this.taskEntityRepository.findById(id);
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskEntityRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    return this.taskEntityRepository.deleteById(id);
  }
}
