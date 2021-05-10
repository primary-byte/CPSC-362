import { UserService } from './services/user-service/user.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from './services/authentication-service/authentication.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {}

  navigateTo(value) {
    this.router.navigate(['../', value]);
  }

  logout() {
    this.authService.logout();
  }
}
