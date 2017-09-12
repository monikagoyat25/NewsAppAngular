import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { NewsService} from '../news.service';
import { NewsData} from '../news';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 temp: any = '';
 id: string = '';
  data: any={};
  newsdata2: any ={};

  @Output() news = new EventEmitter <any> ();

  constructor(private newsservice: NewsService) { }

  displayChannels(){
    console.log(" all news channel get method"); 
    this.newsservice.getChannel().subscribe(data=>{
      console.log("data coming");
        console.log(data);
        this.data=data;
        console.log("final data " , this.data);
    })
  }

  getnews(a:string){
    console.log(" particular news channel get method"); 
    this.newsservice.getData(a).subscribe(data =>{  
       console.log(data);
       this.newsdata2 = data;
       this.sendJson();
     })
  }

  ngOnInit() {
    this.displayChannels();
    
  }

  setChannel(event:Event){
    console.log((<HTMLLIElement>event.target).id);
    this.temp = (<HTMLLIElement>event.target).id;
    console.log(this.temp);
    this.getnews(this.temp);
  }

  sendJson(){
     console.log("emitting");
     this.news.emit(this.newsdata2["articles"]);
  }
}
