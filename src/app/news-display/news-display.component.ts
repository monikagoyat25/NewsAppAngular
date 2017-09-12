import { Component, OnInit ,Input} from '@angular/core';
import { NewsData} from '../news';
import { FavouriteService} from '../favourite-details/favourite.service';


@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.css']
})
export class NewsDisplayComponent implements OnInit {

  @Input() news1: any;
  constructor(private favservice: FavouriteService) { }

  addFavourite(news: NewsData){
    this.favservice.addFavrouite(news);
  }
  ngOnInit() {
  }

}
