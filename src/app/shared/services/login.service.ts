import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  root = environment.flaskRoot;
  private BASE_URL = `${this.root}/init`;

  constructor(private http: HttpClient) { }

  login(login: any): Promise<any> {
    return this.http.post(this.BASE_URL + '/user/read', { email: login.email, password: login.password }).toPromise()
    .catch((err:any)=>{
      console.log(err);
    })
  }

  
  //handleError
  private handleError(error: any) {

    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
