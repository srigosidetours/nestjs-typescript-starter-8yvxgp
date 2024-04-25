import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tastService: TasksService) {
    console.log('Ejecutando el Controlador');
    //Inyectar clase
  }

  @Get()
  getAllTasks() {
    return this.tastService.getAllTask();
  }

  //Body es json o un texto.
  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tastService.createTask(newTask.title, newTask.description);
  }
}
