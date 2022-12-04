import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-login',
  templateUrl: './library-login.component.html',
  styleUrls: ['./library-login.component.css']
})
export class LibraryLoginComponent {
  username=""
  password=""


  constructor(private route:Router){}

  readValues=()=>{
    let data = {"username":this.username,"password":this.password}
    console.log(data)

    if (this.username=="admin"&&this.password=="12345") {
      this.route.navigate(['/entry'])
      
    } else {
      alert("invalid credentials")
      
    }
  }

}
