import { Injectable } from '@angular/core';
import { NewTaskData } from '../../data/NewTaskData.model';
import { Task } from '../../data/task';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = [
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

  constructor(){
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  getAllTasks() {
    return this.tasks;
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: NewTaskData, userId: string) {
    let newTask: Task = {
      id: new Date().getTime().toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
      userId: userId,
    };

    this.tasks.unshift(newTask);
    //this.tasks.push(newTask);
    this.saveTasks();

  }

  completeTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}