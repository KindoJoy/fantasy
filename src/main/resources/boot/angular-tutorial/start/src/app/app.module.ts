import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SessionStorageService } from './services/session-storage.service';

import { AppComponent } from './app.component';

// import { HomeComponent } from './components/home/home.component';
// import { FormComponent } from './components/form/form.component';
import { TodolistComponent } from './components/todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // FormComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SessionStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
