import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }         from './app.component';

import { JumbotronComponent }   from './jumbotron/jumbotron.component';
import { AuthGuard}             from './authguard.guard';
import { LoginComponent }       from './login/login.component';
import { RegisterComponent }    from './login/register.component';
import { SearchComponent }      from './search/search.component';
import { NewstourComponent}  from './newstour/newstour.component';
import { FavouriteDetailsComponent} from './favourite-details/favourite-details.component';

const routes: Routes = [
    { path:'' , redirectTo:'/home', pathMatch: 'full'},
    { path:'home', component:JumbotronComponent},
    { path :'fav' ,canActivate:[AuthGuard], component:FavouriteDetailsComponent},
    { path :'login', component:LoginComponent},
    { path : 'register', component: RegisterComponent},
    { path : 'search' , component:SearchComponent },
    { path : 'news', component:NewstourComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}