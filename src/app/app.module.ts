import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { NgxPaginationModule} from 'ngx-pagination';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthGuard}     from './authguard.guard';
import { NewsService } from './news.service';
import { FavouriteService } from './favourite-details/favourite.service';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './login/register.component';
import { SearchComponent } from './search/search.component';
import { NewsDisplayComponent } from './news-display/news-display.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { FavouriteDetailsComponent } from './favourite-details/favourite-details.component';
import { NewstourComponent } from './newstour/newstour.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    JumbotronComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    NewsDisplayComponent,
    NewsDetailsComponent,
    FavouriteDetailsComponent,
    NewstourComponent
  ],
  providers: [NewsService , FavouriteService , AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
