import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {
  user: User
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (!id) id =1;
      this.user = null;
      this.userService.users.subscribe(users =>{
        if (users.length == 0) return;
        this.user = this.userService.userById(id);
      })
      this.user = this.userService.userById(id);
    })
  }

}
