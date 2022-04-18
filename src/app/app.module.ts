import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteDetailsComponent } from './qoute-details/qoute-details.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { HighlightDirective } from './highlight.directive';
import { DatepostedPipe } from './dateposted.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteDetailsComponent,
    QouteFormComponent,
    HighlightDirective,
    DatepostedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
