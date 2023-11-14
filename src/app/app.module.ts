import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogamesComponent } from './videogames/videogames.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { EditComponent } from './videogames/edit/edit.component';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogamesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
