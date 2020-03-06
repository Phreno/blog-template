import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './article/article.component';
import { Routes, RouterModule } from '@angular/router';
import { PageInconnueComponent } from './page-inconnue/page-inconnue.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { ListeDesArticlesComponent } from './liste-des-articles/liste-des-articles.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const appRoutes: Routes = [
  { path: '', component: BonjourComponent, pathMatch: 'full' },
  { path: 'article', component: ArticleComponent },
  { path: 'liste-des-articles', component: ListeDesArticlesComponent },
  { path: '**', component: PageInconnueComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    PageInconnueComponent,
    BonjourComponent,
    ListeDesArticlesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
