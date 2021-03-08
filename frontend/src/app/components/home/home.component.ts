import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { BlogEntriesPageable } from 'src/app/model/blog-entry.interface';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { UserService } from 'src/app/services/user-service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  blogEntries$: Observable<BlogEntriesPageable> = this.blogService.indexAll(1, 10);

  constructor(private blogService: BlogService, private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthenticationService, private userService: UserService) { }

  onPaginateChange(event: PageEvent) {
    this.blogEntries$ = this.blogService.indexAll(event.pageIndex, event.pageSize);
  }

  navigateTo(value) {
    this.router.navigate(['../', value]);
  }

  navigateToProfile(id) {
    this.router.navigate(['./' + id], {relativeTo: this.activatedRoute});
  }

  logout() {
    this.authService.logout();
  }

}
