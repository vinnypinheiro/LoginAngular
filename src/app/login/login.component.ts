import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ApiService} from '../api.service';
import {TokenService} from '../token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  email = 'peter@klaven';
  password = 'cityslicka';

  constructor(private api: ApiService, private fb: FormBuilder, private tokenService: TokenService, private router: Router) {
  }
  get f() { return this.loginForm.controls; }

  userLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.tokenService.setToken(r.token);
            this.router.navigateByUrl('/dashboard');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username:  ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
