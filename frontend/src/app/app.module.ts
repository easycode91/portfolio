import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectComponent } from './component/project/project.component';
import { CreateProjectComponent } from './component/create-project/create-project.component';
import { ContactComponent } from './component/contact/contact.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { Error404Component } from './component/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectComponent,
    CreateProjectComponent,
    ContactComponent,
    NavigationComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
