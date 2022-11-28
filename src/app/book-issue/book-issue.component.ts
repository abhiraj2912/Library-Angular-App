import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {

  name=""
  bookname=""
  issuedate=""
  memberID=""

  readValues=()=>{
    let data={"name":this.name,"bookname":this.bookname,"issuedate":this.issuedate,"memberID":this.memberID }
    console.log(data)
  }

}
