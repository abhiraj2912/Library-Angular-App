import { Component } from '@angular/core';

@Component({
  selector: 'app-library-login',
  templateUrl: './library-login.component.html',
  styleUrls: ['./library-login.component.css']
})
export class LibraryLoginComponent {
  username=""
  password=""

  readValues=()=>{
    let data = {"username":this.username,"password":this.password}
    console.log(data)

    if (this.username=="admin"&&this.password=="12345") {
      alert("valid Login")
      
    } else {
      alert("invalid credentials")
      
    }
  }

}
