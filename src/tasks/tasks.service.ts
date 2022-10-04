import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { TaskStatus } from './tasks-status.enum';
import { Task } from './tasks.entity';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private taskEntityRepository: TaskRepository) {}

  getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.taskEntityRepository.getTasks(filterDto);
  }

  async getTaskById(id: string): Promise<Task> {
    return this.taskEntityRepository.findById(id);
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskEntityRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    return this.taskEntityRepository.deleteById(id);
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    return this.taskEntityRepository.updateTaskStatus(id, status);
  }
}
