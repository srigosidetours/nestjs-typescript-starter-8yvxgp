import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid'; //npm i --save-dev @types/uuid

@Injectable()
export class TasksService {
  //propiedad de la clase

  //simula una base de datos
  private tasks: Task[] = [
    {
      id: v4(),
      title: 'Primer Título',
      description: 'Primera Descripción',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTask() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    console.log('patata')
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);

    return task;
  }
  uptateTask() {}
  deleteTask() {}
}
