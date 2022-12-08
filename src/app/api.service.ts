import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchBooks=()=>{
    return this.http.get("http://localhost:8080/viewbooks")
  }

  addBooks=(booksToAdd:any)=>{
    return this.http.post("http://localhost:8080/bookadd",booksToAdd)
  }

  searchBooks=(searchData:any)=>{
    return this.http.post("http://localhost:8080/search",searchData)
  }

  addUser=(userData:any)=>{
    return this.http.post("http://localhost:8080/useradd",userData)
  }

  login=(loginData:any)=>{
    return this.http.post("http://localhost:8080/login",loginData)
  }

  deleteBooks=(deleteData:any)=>{
    return this.http.post("http://localhost:8080/delete",deleteData)
  }
}
