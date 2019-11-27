import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  //styleUrls: ['./user-list.component.css']
  styles:[
    `
  .text-success{
      color: green;
  }
  .text-italic{
      font-style: italic;
  }
  .newId{
      color:orange;
  }
    `
  ]
})
export class UserListComponent implements OnInit {
  
  isnewId="newId";
  newusercolor = "orange";
  pwdText = "black";
  acceptance="";
  password:String;
  users:User;
  public isNewUser=true;
  public isitalicUser=true;
  site=window.location.href;
  public showtext="";
  @Input() public titleData="";
  @Output() public childEvent=new EventEmitter(); 
  pwdCommand="Not Entered";
  list=["User1","User2","User3","User4"];
  public listClass={
    "text-success":this.isNewUser,
    "text-italic":this.isitalicUser

  }
  
  strongRegularExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  constructor() { }
  onClick(userName){
    this.acceptance = userName + ", You are registered";
  }
  login(user){
    console.log(1);
    console.log(user);
      this.childEvent.emit(user);
  }
  checkpwd(){
    console.log(1);
    debugger;
    // if (this.strongRegularExp.test(this.users.password)) {
    //   console.log(1);
    //   this.pwdText="green";
    //   this.pwdCommand="Strong";
    // } else{
    //   this.pwdText="orange";
    //   this.pwdCommand="Weak";
    // }

    if(this.users.password.length == 0){
      this.pwdText="black";
      this.pwdCommand="Not Entered";
    }
  }
  OnChange(event){
    console.log(event);    
  }
  ngOnInit() {
  }

}
