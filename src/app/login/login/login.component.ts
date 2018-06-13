import {Component, OnInit} from '@angular/core';
import {st} from '@angular/core/src/render3';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pseudo: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    if (this.pseudo === 'admin' && this.password === 'admin') {
      this.auth.login();
      this.router.navigate(['profil']);
    } else {
      // implements alert system
    }
  }

}
