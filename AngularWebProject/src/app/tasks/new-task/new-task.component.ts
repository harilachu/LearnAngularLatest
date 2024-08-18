import { Component, EventEmitter, inject, Input, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../../data/NewTaskData.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  close = output();
  //submit = output<NewTaskData>();
  @Input({required:true}) userId!: string;
  //@Output() submit = new EventEmitter<NewTaskData>();
  private taskService = inject(TaskService);

  // enteredTitle = signal('');
  // enteredSummary =signal('');
  // enteredDate = signal('');

  enteredTitle = '';
  enteredSummary ='';
  enteredDate = '';

onCancel(){
  this.close.emit();
}

onSubmit(){
  const newTask: NewTaskData = {
    title: this.enteredTitle,
    summary: this.enteredSummary,
    dueDate: this.enteredDate
  };
  //this.submit.emit(newTask);
  this.taskService.addTask(newTask, this.userId)
  this.close.emit();
}
}
