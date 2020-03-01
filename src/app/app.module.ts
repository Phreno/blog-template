import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './article/article.component';
import { Routes, RouterModule } from '@angular/router';
import { PageInconnueComponent } from './page-inconnue/page-inconnue.component';

const appRoutes: Routes = [
  { path: 'action', component: ArticleComponent },
  { path: 'page-inconnue', component: PageInconnueComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    PageInconnueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
