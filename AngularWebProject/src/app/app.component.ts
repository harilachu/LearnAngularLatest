import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from '../data/user';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularWebProject';
  users = DUMMY_USERS;
  selectedUserId: string = '';
  selectedUser: User | undefined;

  onSelectUser(id: string): void {
    this.selectedUserId = id;
    this.selectedUser = this.users.find((user) => user.id === this.selectedUserId);
  }
}
