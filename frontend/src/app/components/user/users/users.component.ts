import { AllBlogEntriesComponent } from './../../blog-entry/all-blog-entries/all-blog-entries.component';
import { Component, OnInit } from '@angular/core';
import { UserData, UserService } from 'src/app/services/user-service/user.service';
import { map, tap } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { BlogEntriesPageable } from 'src/app/model/blog-entry.interface';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  filterValue: string = null;
  dataSource: UserData = null;
  pageEvent: PageEvent;
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'role'];
  blogEntries$: Observable<BlogEntriesPageable> = this.blogService.indexAll(1, 10);

  constructor(private blogService: BlogService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthenticationService) { }
 


  onPaginateChange(event: PageEvent) {
    this.blogEntries$ = this.blogService.indexAll(event.pageIndex, event.pageSize);
  }

  navigateTo(value) {
    this.router.navigate(['../', value]);
  }

  logout() {
    this.authService.logout();
  }
  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource() {
    this.userService.findAll(1, 10).pipe(
      map((userData: UserData) => this.dataSource = userData)
    ).subscribe();
  }

  /*onPaginateChange(event: PageEvent) {
    let page = event.pageIndex;
    let size = event.pageSize;


    if(this.filterValue == null) {
      page = page +1;
      this.userService.findAll(page, size).pipe(
        map((userData: UserData) => this.dataSource = userData)
      ).subscribe();
    } else {
      this.userService.paginateByName(page, size, this.filterValue).pipe(
        map((userData: UserData) => this.dataSource = userData)
      ).subscribe()
    }

  }*/

  findByName(username: string) {
    console.log(username);
    this.userService.paginateByName(0, 10, username).pipe(
      map((userData: UserData) => this.dataSource = userData)
    ).subscribe()
  }

  navigateToProfile(id) {
    this.router.navigate(['./' + id], {relativeTo: this.activatedRoute});
  }

}
