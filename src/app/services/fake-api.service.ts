import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Framework } from '../model/framework';
import { User } from '../model/user';
import { ApiService } from './api.service';

let lastId = 2;
const users: User[] = [
  {
    id: 1,
    account: 'micha',
    email: 'micha@home.de',
    password: 'S3cr3t!',
    zip: '03044',
    frameworkId: 1,
  },
  {
    id: 2,
    account: 'igor',
    email: 'igor@angular.de',
    password: 'S3cr3t!',
    zip: '50000',
    frameworkId: 1,
  },
];

@Injectable({
  providedIn: 'root',
})
export class FakeApiService extends ApiService {
  override getFrameworks(): Observable<Framework[]> {
    return of([
      { id: 1, name: 'Angular', url: 'https://angular.io' },
      { id: 1, name: 'Vue', url: 'https://vuejs.org' },
      { id: 1, name: 'React', url: 'https://reactjs.org/' },
    ] as Framework[]);
  }

  override getUserByAccount(account: string): Observable<User | null> {
    return of(users.find((u) => u.account === account) || null);
  }

  override createUser(user: User): Observable<User> {
    const createdUser = { ...user, id: ++lastId };
    users.push(createdUser);
    return of(createdUser);
  }

  override updateUser(id: number, user: User): Observable<User> {
    return throwError(() => new Error('Not implemented'));
  }
}
