import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapListGroupComponent } from './bootstrap-list-group/bootstrap-list-group.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { NestedFormComponent } from './forms/nested-form/nested-form.component';
import { NewCourseFormComponent } from './forms/new-course-form/new-course-form.component';
import { AssignmentChangePasswordComponent } from './forms/assignment-change-password/assignment-change-password.component';
import { PostsComponent } from './http/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { FollowersComponent } from './http/followers/followers.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { ProfileComponent } from './http/followers/profile/profile.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { NavbarComponent } from './routes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    TitleCasePipe,
    FavoriteComponent,
    BootstrapListGroupComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NestedFormComponent,
    NewCourseFormComponent,
    AssignmentChangePasswordComponent,
    PostsComponent,
    FollowersComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:id/:username', component: ProfileComponent },
      { path: 'followers', component: FollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
