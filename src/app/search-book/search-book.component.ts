import { Component } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  bookname=""

  readValues=()=>{

    let data={"bookname":this.bookname}
    console.log(data)
  }

}
