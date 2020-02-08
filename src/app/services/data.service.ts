import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //sampleList = ["User1","Sergio","Leo","Sandie","Mat","Josh"];
  userList = [];

  constructor() { }

  /* public test(){
    return "this is a test";
  }

  public getSampleList(){
    return this.sampleList;
  } */

  public saveUser(user: User){
    this.userList.push(user);
  }

  public getUsers(){
    return this.userList;
  }
}



