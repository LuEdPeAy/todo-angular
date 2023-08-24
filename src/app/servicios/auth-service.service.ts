import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from 'src/enviroment/enviroment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {}

    login(user: User){
      return this.http.post<any>(`${environment.apiUrl}/login`, {user})
      .pipe(map(res => {
        let user : User = res.user;

        user.username = res.user.username;
        
        if (user && res.token) {

            /* localStorage.setItem(environment.appName + '-currentToken', JSON.stringify(res.token));
            localStorage.setItem(environment.appName + '-currentTokenType', JSON.stringify(res.token_type));
            localStorage.setItem(environment.appName + '-currentUser', JSON.stringify(user));
              */                                

        }
        return user;
    }));
    }
   }
