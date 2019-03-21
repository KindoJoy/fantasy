import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/login/login.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';


import { UserComponent } from './components/user/user.component';
import { InfoComponent } from './components/user/info/info.component';
import { SettingsComponent } from './components/user/settings/settings.component';

import { NewsComponent } from './components/news/news.component';
import { ListComponent } from './components/news/list/list.component';
// import { ContentComponent } from './components/news/content/content.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '**', redirectTo: 'login' }
    ]
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'info', component: InfoComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '**', redirectTo: 'info' }
    ]
  },
  {
    path: 'news', component: NewsComponent,
    children: [
      { path: 'list/:id', component: ListComponent },
      // { path: 'content', component: ContentComponent },
      { path: '**', redirectTo: 'list' }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
