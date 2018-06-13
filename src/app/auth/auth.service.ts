import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {T} from '@angular/core/src/render3';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _logged$ = new BehaviorSubject<boolean>(false);
  public username: string;

  constructor(private router: Router) {
  }

  isLoggedIn(): Observable<boolean> {
    return this._logged$.asObservable();
  }

  login(username) {
    this.username = username;
    this._logged$.next(true);
  }

  logout() {
    this._logged$.next(false);
    this.router.navigate(['home']);
  }
}
