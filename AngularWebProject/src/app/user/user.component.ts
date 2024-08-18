import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  //@Output() selectedUser = new EventEmitter<string>();

  //input from signal
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  selectedUser = output<string>();

  imagePath = computed(() => 'assets/users/' + this.avatar());

  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //Using computed, angular analyses the signal and recompute when the value changes
  //imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar);

  // get imagePath(): string {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  onSelectUser() {
    this.selectedUser.emit(this.id());
    //Random User
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
