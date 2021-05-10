import { TeachersComponent } from './components/teachers/teachers.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/user/users/users.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UpdateUserProfileComponent } from './components/user/update-user-profile/update-user-profile.component';
import { CreateBlogEntryComponent } from './components/blog-entry/create-blog-entry/create-blog-entry.component';
import { ViewBlogEntryComponent } from './components/blog-entry/view-blog-entry/view-blog-entry.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';


const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'update-profile', component: UpdateUserProfileComponent, canActivate: [AuthGuard] },
  { path: 'update-profile/:id', component: UpdateUserProfileComponent, canActivate: [AuthGuard] },
  { path: 'blog-entries/:id', component: ViewBlogEntryComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'create-blog-entry', component: CreateBlogEntryComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'courses', component: CoursesComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'courses/:id', component: CourseDetailsComponent, canActivate: [AuthGuard] },
  { path: 'teachers', component: TeachersComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'teachers/:id', component: TeacherDetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
