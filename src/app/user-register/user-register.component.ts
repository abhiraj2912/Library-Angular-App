import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private api:ApiService){}

  name=""
  aadharno=""
  address=""
  pincode=""
  dob=""
  email=""
  phone=""
  username=""
  password=""
  cpassword=""

  registerValues=()=>{
    if (this.password==this.cpassword) {
      let data={"name":this.name,"aadharno":this.aadharno,"address":this.address,"pincode":this.pincode,"dob":this.dob,"email":this.email,"phone":this.phone,"username":this.username,"password":this.password}
      console.log(data)
      this.api.addUser(data).subscribe(
        (response:any)=>{
          console.log(response)
          if (response.status=="success") {
            alert("User Registered Successfully")
            this.name=""
            this.aadharno=""
            this.address=""
            this.pincode=""
            this.dob=""
            this.email=""
            this.phone=""
            this.username=""
            this.password=""
            this.cpassword=""
          } else {
            alert("Something went wrong")
          }
        }
      )
    } else {
      alert("Password Not Matching")
    }



    
  }

}
