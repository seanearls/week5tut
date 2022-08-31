import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //initialise variables
  errorMsgState = "hideMessage";

  users=[{'email':'123@abc.com', 'upwd':'123'},{'email':'456@abc.com', 'upwd':'123'},{'email':'789@abc.com', 'upwd':'123'}];

  paramsub;
  email:string="";
  upwd:string="";
  constructor( private route:ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    
  }

  onLogin(email = this.email, upwd = this.upwd) {
    //If entered user details match a user in the users array, navigate to account component, else change error message class
    for (let i=0; i<this.users.length; i++){
      if (this.email == this.users[i].email && this.upwd == this.users[i].upwd){
        this.router.navigate(['account']);
      } else {
        this.errorMsgState="showMessage";
      }
    }
  }



}
