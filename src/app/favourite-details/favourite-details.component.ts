import { Component, OnInit } from '@angular/core';
import { NewsData} from '../news';
import { FavouriteService} from './favourite.service';

@Component({
  selector: 'app-favourite-details',
  templateUrl: './favourite-details.component.html',
  styleUrls: ['./favourite-details.component.css']
})
export class FavouriteDetailsComponent implements OnInit {
 
  newsarticle:any=[] ;

  constructor(private favservice: FavouriteService) { this.getFavourite(); }

  getFavourite(){
    this.favservice.getFavourite().subscribe(newsarticle => this.newsarticle = newsarticle);  
  }

  deleteFavourite(a:number){
    this.favservice.deleteFavourite(a);
    var ele= this.newsarticle.find(f=>f.articleId==a);
    const index= this.newsarticle.indexOf(ele);
    this.newsarticle.splice(index,1);
  }

  updateFavourite(comment:string,updatednews:any){
    this.favservice.updateFavourite(comment,updatednews);
  }

  ngOnInit() {
    this.getFavourite();
  }

}
