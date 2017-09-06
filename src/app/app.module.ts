import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CatListComponent } from './cat-list/cat-list.component';

import { CatFactsService } from './services/cat-facts.service';
import { CatImagesService } from './services/cat-images.service';
import { CatInfoService } from './services/cat-info.service';

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CatFactsService, CatImagesService, CatInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
