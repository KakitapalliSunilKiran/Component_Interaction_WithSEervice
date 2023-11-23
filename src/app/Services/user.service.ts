import { EventEmitter } from "@angular/core"

export class UserService
{
    users=[
        {name:"sunil",gender:"Male",age:27,image:"assets/ukguy.PNG"},
        {name:"sunil",gender:"Male",age:27,image:"assets/ukguy.PNG"},
        {name:"sunil",gender:"Male",age:27,image:"assets/usguy.PNG"},
        {name:"sunil",gender:"Male",age:27,image:"assets/usguy.PNG"}

    ]

    onUserClicked=new EventEmitter<{name:string,gender:string,age:number,image:string}>();

    ShowUserDetails(user:{name:string,gender:string,age:number,image:string}){
        this.onUserClicked.emit(user)
    }
}