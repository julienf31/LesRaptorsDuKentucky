import {Component, OnInit} from '@angular/core';
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
    if (this.password === 'admin') {
      this.auth.login(this.pseudo);
      this.router.navigate(['profil']);
    } else {
      // implements alert system
    }
  }

}
