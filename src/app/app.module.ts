import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MovieSelectComponentComponent} from './movie-select-component/movie-select-component.component';
import {MovieDetailsComponentComponent} from './movie-details-component/movie-details-component.component';
import {MovieCharactersComponentComponent} from './movie-characters-component/movie-characters-component.component';
import { GenderPipe } from './gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieSelectComponentComponent,
    MovieDetailsComponentComponent,
    MovieCharactersComponentComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
