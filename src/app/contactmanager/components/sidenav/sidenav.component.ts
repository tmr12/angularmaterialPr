import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT=720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`);
  users: Observable<User[]>;
  @ViewChild(MatSidenav,{static: false}) sidenav: MatSidenav;

  constructor(zone: NgZone, 
    private userService: UserService,
    private router: Router
    ) { 
   zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`));
  }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();
    // this.users.subscribe(data =>{
    //   if (data.length > 0) this.router.navigate(['/contactmanager', data[0].id]);
    //   });
      this.router.events.subscribe(() => {
        if (this.isSmallScreen()) {
          this.sidenav.close();
        }
      })
  }

  isSmallScreen() {
    return this.mediaMatcher.matches;
  }

}
