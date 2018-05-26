import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[];

  constructor(
    private userService: UserService
  ) {
    this.userService.getAllUsers().
      subscribe(response => {
        this.users = response.data;
      })
  }

  ngOnInit() {

  }

}
