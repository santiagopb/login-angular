import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = {
    name: 'Santiago Pereira'
  };
  constructor() { }

  getAuth(): Observable<Object> {
    return of(this.user);
  }

}
