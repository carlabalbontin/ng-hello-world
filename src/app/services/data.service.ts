import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/errors/app-error';
import { NotFoundError } from '../common/errors/not-found-error';
import { BadInputError } from '../common/errors/bad-input';

export class DataService {

  constructor(private http: HttpClient, private url: string) { }

  getAll() {
    return this.http.get(this.url).pipe(
      catchError(this.errorHandler)
    );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      catchError(this.errorHandler)
    );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true })).pipe(
      catchError(this.errorHandler)
    );
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(
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
