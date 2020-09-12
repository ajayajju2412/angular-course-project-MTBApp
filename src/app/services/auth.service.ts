import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //url for calling authController that we used in springboot project
  //get this from API documentation
  private url = 'http://localhost:7070/movie_app/v1/access-tokens';

  constructor(private httpClient: HttpClient) { }

  signin(credentials){
    //call signin API(back end API)
    //for calling API,we need httpClient object of HttpClient class.so inject the dependency here
    //with httpClient obj,all http methods are available eg:get,post,put
    //to use get or post,go to authController.java class and look at requestMapping over signin method
    //parameters of post() are url and body of LoginDTO.java which contains username and password
    //Now,API gives a response.This response is returned to calling method(signin) which is used in onSubmit
    return this.httpClient.post(this.url,credentials);
  }
}
