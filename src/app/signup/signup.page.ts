import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name : ['', [Validators.required]],
      phone : ['', [Validators.required]],
      email : ['', [Validators.required]],
      password : ['', [Validators.required]],
      password2 : ['', [Validators.required]]
    });
  }

  createUser(){
    const name = this.registerForm.value.name;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const password2 = this.registerForm.value.password2;

    if(password == password2){

      this.userService.addUser(name, email, password);

    }

    this.router.navigate(['/list']);
  }

}
