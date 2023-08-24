import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../servicios/auth-service.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent {

  loginForm!:FormGroup;

  constructor(public authenticateService: AuthServiceService, private readonly fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.loginForm = this.initForm();
  }

  onSubmit():void{
    /* console.log('Form ->', this.loginForm.value);
    console.log(this.regiones); */
    this.authenticateService.login(this.loginForm.value).subscribe(
      response => {
        console.log(response);
        
        /* console.log(this.regiones);
        console.log(this.first_page);
        console.log(this.from_page);
        console.log(this.last_page); */
      });

    this.authenticateService.login(this.loginForm.value).pipe(
      catchError(error => {
        // Here you can handle the error and retrieve the HTTP status code
        
        const statusCode = error.status;
        // Do something with the status code
        return throwError('Login '+statusCode);
      })
    ).subscribe({
      next: (response) => {
        this.user_login = response;
        localStorage.setItem('username', this.user_login[0].username);
        localStorage.setItem('funcionario_id', this.user_login[0].funcionario_id);
        localStorage.setItem('token', this.user_login.token);

        this.router.navigate(['home']);
        
        /* console.log(this.user_login); */
      }
    });

    

}
initForm():FormGroup{
  return this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required]]
  });
}
}
