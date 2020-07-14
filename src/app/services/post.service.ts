import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/errors/app-error';
import { NotFoundError } from '../common/errors/not-found-error';
import { BadInputError } from '../common/errors/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError(this.errorHandler)
    );
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(postId) {
    return this.http.delete(this.url + '/' + postId).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.status === 404){
      return throwError(new NotFoundError());
    } else if (error.status === 400) {
      return throwError(new BadInputError(error));
    } else {
      return throwError(new AppError(error));
    }
  }
}
