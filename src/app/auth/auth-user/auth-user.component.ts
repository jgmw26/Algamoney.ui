import { Routes, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      senha: ['',Validators.required]
    })
  }

login(){

const email = this.loginForm.get("email").value;
const senha = this.loginForm.get("senha").value;

  this.authService.autenticacao(email,senha).subscribe(
    () => this.router.navigate(['search'])
  );

  console.log("-------------Login-------------")

}

}
