import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public user: any = {
    name: '',
    job: ''
  };

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public onSubmit(user: any){
    this.userService.saveUser(user).subscribe(response => {      
      this.router.navigate(['./users']);
    })
  }

}
