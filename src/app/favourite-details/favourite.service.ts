import { Injectable } from '@angular/core';
import { Http, Response , Headers } from '@angular/http';
import { NewsData} from '../news';

import 'rxjs/add/operator/map';


@Injectable()
export class FavouriteService {
  title = 'app !!!';
   constructor(private http: Http){ }
  
  addFavrouite(news: NewsData){
     const request = this.http.post('http://localhost:63946/api/values', news , {
        headers: new Headers({'Content-Type': 'application/json'})
     }).subscribe();
  }
  
  getFavourite(){
    return this.http.get('http://localhost:63946/api/values')
    .map(result => result.json());
  }

  deleteFavourite(a:number){
    const request = this.http.delete('http://localhost:63946/api/values/'+a).subscribe();
  }
  
  updateFavourite(comment:string,news:any){
      let id = news.articleId;
      news.comment = comment;
      const request = this.http.put('http://localhost:63946/api/values/'+id,news,{
        headers: new Headers({'Content-Type': 'application/json'} ) 
     }).subscribe();
  }

}