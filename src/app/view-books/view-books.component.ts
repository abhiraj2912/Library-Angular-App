import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent {

  data:any=[]
  bookName=""
  
  constructor(private api:ApiService){
    api.fetchBooks().subscribe(
      (response:any)=>{
        this.data=response
      }
    )
  }

  readValues=()=>{
    let data:any={"bookName":this.bookName}
    console.log(data)
    this.api.searchBooks(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("Book Not Found")
        } else {
          this.data=response
        }
      }
    )
  }





}
