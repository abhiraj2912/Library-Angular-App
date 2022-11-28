import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  name=""
  aadhar=""
  address=""
  pincode=""
  dob=""
  email=""
  phone=""
  username=""
  password=""
  cpassword=""




  registerValues=()=>{
    let data={"name":this.name,"aadhar":this.aadhar,"address":this.address,"pincode":this.pincode,"dob":this.dob,"email":this.email,"phone":this.phone,"username":this.username,"password":this.password}
    console.log(data)
  }

}
