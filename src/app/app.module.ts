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
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';


const myrouter:Routes=[
  {
    path:"",
    component:LibraryLoginComponent
  },
  {
    path:"entry",
    component:BookEntryComponent
  },
  {
    path:"view",
    component:ViewBooksComponent
  },
  {
    path:"search",
    component:SearchBookComponent
  },
  {
    path:"edit",
    component:EditBookComponent
  },
  {
    path:"delete",
    component:DeleteBookComponent
  },
  {
    path:"register",
    component:UserRegisterComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LibraryLoginComponent,
    BookEntryComponent,
    ViewBooksComponent,
    SearchBookComponent,
    DeleteBookComponent,
    EditBookComponent,
    BookIssueComponent,
    UserRegisterComponent,
    UserLoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myrouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
