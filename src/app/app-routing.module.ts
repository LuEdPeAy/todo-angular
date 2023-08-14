import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { TaskMainComponent } from './task-main/task-main.component';

const routes: Routes = [
  { path: '', component: LoginCardComponent },
  { path: 'home', component: TaskMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
