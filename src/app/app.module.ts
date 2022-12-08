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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component'


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
  },
  {
    path:"adminview",
    component:AdminViewComponent
  },
  {
    path:"adminsearch",
    component:AdminSearchComponent
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
    NavbarComponent,
    AdminViewComponent,
    AdminSearchComponent,
    UserNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myrouter),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
