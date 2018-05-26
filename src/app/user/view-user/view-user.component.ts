import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  public user_id: number;
  public user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.route.params.subscribe(param => {
      this.user_id = param['id'];
    });

    this.userService.getUserById(this.user_id).subscribe(response => {
      this.user = response['data'];
    })
  }

  ngOnInit() {
  }

}
