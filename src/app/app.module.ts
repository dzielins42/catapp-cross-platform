import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CatListComponent } from './cat-list/cat-list.component';

import { CatFactsApiService } from './cat-facts-api.service';

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CatFactsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
