import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  
  constructor(private api:ApiService){}

  bookName=""
  image=""
  author=""
  language=""
  distributor=""
  releasedYear=""
  description=""

  readValues=()=>{

    let data= {"bookName":this.bookName,"image":this.image,"author":this.author,"language":this.language,"distributor":this.distributor,"releasedYear":this.releasedYear,"description":this.description}
    console.log(data)
    this.api.addBooks(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Book Added Successfully")
          this.bookName=""
          this.image=""
          this.author=""
          this.language=""
          this.distributor=""
          this.releasedYear=""
          this.description=""
        } else {
          alert("Something went wrong")
        }
      }
    )

  }

}
