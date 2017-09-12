import { Component, OnInit , Input } from '@angular/core';
import {ChannelDetails} from '../channel';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  @Input() news: Array<Object>;

  constructor() { }

  
  ngOnInit() {
  }

}
