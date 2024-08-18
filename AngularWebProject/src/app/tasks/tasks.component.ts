import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from '../../data/NewTaskData.model';
import { Task } from '../../data/task';

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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks(){
    return this.tasks.filter(t => t.userId === this.userId);
  }

  addTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  completeTask(id: string){
    this.tasks = this.tasks.filter(t => t.id!== id);
  }

  onSubmitTask(newTaskData:NewTaskData) {
    let newTask:Task = {
      id: new Date().getTime().toString(),
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.dueDate,
      userId: this.userId
    }
    this.tasks.unshift(newTask);
    //this.tasks.push(newTask);

    this.isAddingTask = false;
  }
}
