import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {BoardAdminComponent} from './components/board-admin/board-admin.component';
import {BoardModeratorComponent} from './components/board-moderator/board-moderator.component';
import {BoardUserComponent} from './components/board-user/board-user.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {authInterceptorProviders} from "./helpers/auth.interceptor";
import {ArticlesListComponent} from './components/articles-list/articles-list.component';
import {ArticleDetailsComponent} from './components/article-details/article-details.component';
import {AddArticleComponent} from './components/add-article/add-article.component';
import { ArticlesHomeComponent } from './components/articles-home/articles-home.component';
import { ArticleTableComponent } from './components/article-table/article-table.component';
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ArticlesListComponent,
    ArticleDetailsComponent,
    AddArticleComponent,
    ArticlesHomeComponent,
    ArticleTableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TableModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
