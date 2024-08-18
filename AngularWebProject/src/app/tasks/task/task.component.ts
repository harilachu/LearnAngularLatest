import { Component, input, output } from '@angular/core';
import { Task } from '../../../data/task';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 task = input.required<Task>();
 complete = output<string>();

 onComplete(){
  this.complete.emit(this.task().id);
 }
}
