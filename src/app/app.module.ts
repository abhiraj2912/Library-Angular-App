import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryLoginComponent } from './library-login/library-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryLoginComponent,
    BookEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
