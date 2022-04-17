import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteDetailsComponent } from './qoute-details/qoute-details.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteDetailsComponent,
    QouteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
