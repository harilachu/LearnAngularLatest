import { Component, Input, computed, input, signal } from '@angular/core';
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

  //input from signal
  avatar = input.required<string>();
  name = input.required<string>();

   imagePath = computed(()=>'assets/users/' + this.avatar());

  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //Using computed, angular analyses the signal and recompute when the value changes
  //imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar);

  // get imagePath(): string {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  onSelectUser() {
    //Random User
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
