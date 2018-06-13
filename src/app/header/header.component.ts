import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public login: Observable<boolean>;

  constructor(protected auth: AuthService) {
    this.login = auth.isLoggedIn();
  }

  ngOnInit() {
  }

}
