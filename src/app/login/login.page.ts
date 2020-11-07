import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  loginUser(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    let result = this.userService.loginUser(email, password);

    if(JSON.stringify(result) == 'verified'){
      window.location.reload();
    }
  }

  recoverPassword(){
  }

  googleLogin(){
    try{
      this.userService.googleLogin();
    }catch(err){
      console.log(err)
    }
  }

}
