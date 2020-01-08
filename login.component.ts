import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  category: any[] = [];
  constructor( private fb: FormBuilder, private router: Router ) { }
               emailPattern = new RegExp(/^[a-zA-z][a-zA-Z0-9._-]{2,64}@[a-zA-Z0-9-]{3,240}\.[a-zA-Z]{2,5}(\.[a-zA-Z]{5})?$/);
  loginUser = this.fb.group({
    username: ['', [Validators.pattern(this.emailPattern), Validators.required]],
    password: ['', Validators.required]
  });

  ngOnInit() {

  this.router.navigate(['/login']);
  }

  onSubmit() {
    this.category = [];
    if (this.loginUser.valid) {
            this.router.navigate(['/landing-page']);
    }
    // else {
    //      alert("Username or password entered is wrong!")
    // }
   }
}