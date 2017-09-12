import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newstour',
  templateUrl: './newstour.component.html',
  styleUrls: ['./newstour.component.css']
})
export class NewstourComponent implements OnInit {

  constructor() { }
  news:any;
  
  onSendJson(data){

    this.news = data;
    console.log("app component json" , this.news);
  }
  ngOnInit() {
  }

}
