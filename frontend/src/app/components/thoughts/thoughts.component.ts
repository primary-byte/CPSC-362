import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogEntriesPageable } from 'src/app/model/blog-entry.interface';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.scss']
})
export class ThoughtsComponent implements OnInit {

  blogEntries$: Observable<BlogEntriesPageable> = this.blogService.indexAll(1, 10);

  constructor(
    private blogService: BlogService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private authService: AuthenticationService, 
    private userService: UserService
    ) { }


  ngOnInit(): void {
  }
  
  onPaginateChange(event: PageEvent) {
    this.blogEntries$ = this.blogService.indexAll(event.pageIndex, event.pageSize);
  }

}
