import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  bookname=""
  image=""
  author=""
  language=""
  distributor=""
  year=""
  description=""

  readValues=()=>{

    let data= {"name":this.bookname,"image":this.image,"author":this.author,"language":this.language,"distributor":this.distributor,"year":this.year,"description":this.description}
    console.log(data)
  }

}
