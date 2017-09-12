import { Injectable } from '@angular/core';
import { Http, Response , Headers } from '@angular/http';
import { NewsData} from './news';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsService {
  title = 'app !!!';
   constructor(private http: Http){ }
   private apiUrl = 'https://newsapi.org/v1/sources?language=en';
  getData(data:string) {
    if(data === ""){
      window.alert("Please enter valid Channel.");
    }
    else{
    return this.http.get('https://newsapi.org/v1/articles?source='+ data +'&sortBy=top&apiKey=676c82698a2f4f97a9e5f0a8885bcb43')
     .map((res: Response) => res.json());
    }
  }
  
  getChannel(){
    return this.http.get(this.apiUrl)
    .map(response => response.json());
   }

  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  private isuserloggedin;
  public username;

  setuser(){
    this.isuserloggedin =false;
    this.username="admin";
 
  }

  getuser(){
    this.setuser();
    return this.isuserloggedin;
  }
}
