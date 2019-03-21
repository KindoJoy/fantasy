import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/login/login.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';

import { UserComponent } from './components/user/user.component';
import { InfoComponent } from './components/user/info/info.component';
import { SettingsComponent } from './components/user/settings/settings.component';

import { NewsComponent } from './components/news/news.component';
import { ListComponent } from './components/news/list/list.component';
import { ContentComponent } from './components/news/content/content.component';


import { RequestService } from './services/request.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    InfoComponent,
    SettingsComponent,
    WelcomeComponent,
    LoginComponent,
    ListComponent,
    ContentComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
