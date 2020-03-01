import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './article/article.component';
import { Routes, RouterModule } from '@angular/router';
import { PageInconnueComponent } from './page-inconnue/page-inconnue.component';
import { BonjourComponent } from './bonjour/bonjour.component';

const appRoutes: Routes = [
  { path: '', component: BonjourComponent, pathMatch: 'full' },
  { path: 'article', component: ArticleComponent },
  { path: '**', component: PageInconnueComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    PageInconnueComponent,
    BonjourComponent
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
