import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent {
  constructor(private api:ApiService){}
  bookName=""
  searchData:any=[]

  readValues=()=>{
    let data:any={"bookName":this.bookName}
    console.log(data)
    this.api.searchBooks(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("Book Not Found")
        } else {
          this.searchData=response
        }
      }
    )
  }

  deleteBooks=(id:any)=>{
    let data:any={"id":id}
    console.log(data)
    this.api.deleteBooks(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Deleted Successfully")
          window.location.reload()
        } else {
          alert("Something went wrong")
        }
      }
    )
  }


}
