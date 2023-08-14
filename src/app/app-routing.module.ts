import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginCardComponent } from './login-card/login-card.component';

const routes: Routes = [
  { path: '', component: LoginCardComponent },
  { path: '', component: LoginCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
