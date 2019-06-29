import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice-service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  users: any;
  repos: any;
  username: string;
  constructor(private service:MyserviceService) {
    this.users=false;
   }
   
   searchUser()
   {
     this.service.updateUser(this.username);

     this.service.getUser().subscribe(user=>{
      this.users=user;
      console.log("user", user)
    });
     this.service.getRepository().subscribe(repos=>{
      // console.log(repos);
      this.repos=repos;
    });
   }
  ngOnInit() {
  }

}
