import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../../data/NewTaskData.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  cancel = output();
  //submit = output<NewTaskData>();
  @Output() submit = new EventEmitter<NewTaskData>();

  // enteredTitle = signal('');
  // enteredSummary =signal('');
  // enteredDate = signal('');

  enteredTitle = '';
  enteredSummary ='';
  enteredDate = '';

onCancel(){
  this.cancel.emit();
}

onSubmit(){
  const newTask: NewTaskData = {
    title: this.enteredTitle,
    summary: this.enteredSummary,
    dueDate: this.enteredDate
  };
  this.submit.emit(newTask);
}
}
