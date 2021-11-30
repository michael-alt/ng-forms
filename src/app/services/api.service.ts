import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Framework } from '../model/framework';
import { User } from '../model/user';

@Injectable()
export class ApiService {
  getFrameworks(): Observable<Framework[]> {
    return throwError(() => new Error('Not implemented'));
  }

  getUserByAccount(account: string): Observable<User | null> {
    return throwError(() => new Error('Not implemented'));
  }

  createUser(user: User): Observable<User> {
    return throwError(() => new Error('Not implemented'));
  }

  updateUser(id: number, user: User): Observable<User> {
    return throwError(() => new Error('Not implemented'));
  }
}
