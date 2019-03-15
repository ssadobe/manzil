import { Component } from '@angular/core';
//import { UserAuthService } from '../user/auth-service.service';
// give proper path to UserAuthService as per your file sstructure.

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAuthService } from 'src/app/user/user-auth.service';
;

@Component({
  selector: 'app-menu',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,public userAuth: UserAuthService ) {}

  }
