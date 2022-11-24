import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryLoginComponent } from './library-login/library-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookIssueComponent } from './book-issue/book-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryLoginComponent,
    BookEntryComponent,
    ViewBooksComponent,
    SearchBookComponent,
    DeleteBookComponent,
    EditBookComponent,
    BookIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
