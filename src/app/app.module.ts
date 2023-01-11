import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import {HttpClientModule} from '@angular/common/http'

const appRoutes:Routes=[
  {
    path:"",component:ViewstudentComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
