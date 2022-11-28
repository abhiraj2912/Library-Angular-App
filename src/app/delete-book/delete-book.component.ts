import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

  bookname=""

  readValues=()=>{
    let data={"bookname":this.bookname}
    console.log(data)
  }

}
