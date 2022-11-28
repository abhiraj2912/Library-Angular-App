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
  }

}
