import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { switchMap, tap, map, catchError } from 'rxjs/operators';
import { HttpEventType, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user.interface';
import { WINDOW } from 'src/app/window-token';
import { Inject } from '@angular/core';
import { BlogEntriesPageable } from 'src/app/model/blog-entry.interface';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

export interface File {
  data: any;
  progress: number;
  inProgress: boolean;
}

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.scss']
})
export class UpdateUserProfileComponent implements OnInit {



  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;

  file: File = {
    data: null,
    inProgress: false,
    progress: 0
  };

  form: FormGroup;
  pageEvent: PageEvent;

  origin = this.window.location.origin;

  private userId$: Observable<number> = this.activatedRoute.params.pipe(
    map((params: Params) => parseInt(params['id']))
  )

  user$: Observable<User> = this.userId$.pipe(
    switchMap((userId: number) => this.userService.findOne(userId))
  )

  blogEntries$: Observable<BlogEntriesPageable> = this.userId$.pipe(
    switchMap((userId: number) => this.blogService.indexByUser(userId, 1, 10))
  )


  constructor(   
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private userService: UserService,
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    @Inject(WINDOW) private window: Window
  ) { }

  // ngOnInit(): void {
  //   this.userId$.pipe(
  //     tap((userId: number) => {
  //       this.router.navigate(['./', userId])
  //     })
  //   );
  // }



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [{value: null, disabled: true}, [Validators.required]],
      name: [null, [Validators.required]],
      username: [null, [Validators.required]],
      profileImage: [null]
    });

    this.authService.getUserId().pipe(
      switchMap((id: number) => this.userService.findOne(id).pipe(
        tap((user: User) => {
          this.form.patchValue({
            id: user.id,
            name: user.name,
            username: user.username,
            profileImage: user.profileImage
          })
        })
      ))
    ).subscribe()
  }

  onClick() {
    const fileInput = this.fileUpload.nativeElement;
    fileInput.click();
    fileInput.onchange = () => {
      this.file = {
        data: fileInput.files[0],
        inProgress: false,
        progress: 0
      };
      this.fileUpload.nativeElement.value = '';
      this.uploadFile();
    }
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('file', this.file.data);
    this.file.inProgress = true;

    this.userService.uploadProfileImage(formData).pipe(
      map((event) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.file.inProgress = false;
        return of('Upload failed');
      })).subscribe((event: any) => {
        if(typeof (event) === 'object') {
          this.form.patchValue({profileImage: event.body.profileImage});
        }
      })
  }

  update() {
    this.userService.updateOne(this.form.getRawValue()).subscribe();
  }

  onPaginateChange(event: PageEvent) {
    return this.userId$.pipe(
      tap((userId: number) => this.blogEntries$ = this.blogService.indexByUser(userId, event.pageIndex, event.pageSize))
    ).subscribe();
  }

}
