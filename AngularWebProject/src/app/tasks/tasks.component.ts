import { Component, Input, inject } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from '../../data/NewTaskData.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({ required: true }) name!:string;
  isAddingTask = false;
  private taskService = inject(TaskService)

  // constructor(private taskService: TaskService){
  // }

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  addTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

  // completeTask(id: string){
  //   this.taskService.completeTask(id);
  // }

  // onSubmitTask(newTaskData:NewTaskData) {
  //   this.taskService.addTask(newTaskData, this.userId);

  //   this.isAddingTask = false;
  // }
}
