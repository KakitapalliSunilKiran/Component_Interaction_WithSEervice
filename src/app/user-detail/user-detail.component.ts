import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

     constructor(private userService:UserService){

     }
    user:{ name: string; gender: string; age: number; image: string; } | undefined ;

    ngOnInit(){
      this.userService.onUserClicked.subscribe((data:{ name: string; gender: string; age: number;
         image: string })=>{
        this.user=data;
      })
    }

   
   
}
