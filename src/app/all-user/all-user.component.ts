import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {

  constructor(private userService:UserService){

  }
  users:{name:string,gender:string,age:number,image:string}[]=[]

  ngOnInit(){
    this.users=this.userService.users;
  }
  


  onSubmit(user:{name:string,gender:string,age:number,image:string}){
    this.userService.ShowUserDetails(user);

  }

}
