import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/mycontact';

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {

  baseUrl:string ='http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }

//function create for get all  get all api contacts
getAllContact():Observable<MyContact>{
return this.http.get(this.baseUrl)

}
//funtion for view a particular api contact

viewContact(contactId:string){
 return this.http.get(`${this.baseUrl}/${contactId}`)
}

//function for getting a particular groupname
getGroupName(groupId:string){
  return this.http.get('http://localhost:3000/groups/'+groupId)
}
//function for fectch all grp from http://localhost:3000/groups
getAllGroups(){
  return this.http.get('http://localhost:3000/groups')
}
//function for adding new contact to server
addContact(contactBody:any){
 return this.http.post(this.baseUrl,contactBody)
}

}
