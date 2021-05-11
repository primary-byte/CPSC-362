import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BlogEntry } from 'src/app/model/blog-entry.interface';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { WINDOW } from 'src/app/window-token';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-view-blog-entry',
  templateUrl: './view-blog-entry.component.html',
  styleUrls: ['./view-blog-entry.component.scss']
})
export class ViewBlogEntryComponent {

  origin = this.window.location.origin;

  blogEntry$: Observable<BlogEntry> = this.activatedRoute.params.pipe(
    switchMap((params: Params) => {
      const blogEntryId: number = parseInt(params['id']);

      return this.blogService.findOne(blogEntryId).pipe(
        map((blogEntry: BlogEntry) => blogEntry)
      )
    })
  )

  constructor(
    private activatedRoute: ActivatedRoute, 
    private blogService: BlogService,
    private http: HttpClient,
    @Inject(WINDOW) private window: Window) { }

    like(blogEntry: BlogEntry): Observable<BlogEntry> {
      blogEntry.likes = blogEntry.likes+1;
      return this.http.put<BlogEntry>('/api/blog-entries/', blogEntry);
    }


}
