import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { tokenGetter } from './../app.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Serializable, jsonIgnore } from 'ts-serializable';
import { EventSource } from '../class/event-source';
import { SignatureVerificationData } from '../class/signature-verification-data';


@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http : HttpClient, private jwtHelper: JwtHelperService) { }
  private baseUrl = "http://localhost:8080/verify-signature/auth/";
  login (body:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let url = this.baseUrl+"login";
    return this.http.post(url, JSON.stringify(body), { headers: headers })
  }
  getEeventSourceById(id:number):Observable<EventSource>{
    const headers = new HttpHeaders({ Authorization: 'Bearer '+tokenGetter()});
    return this.http.get<EventSource>(this.baseUrl+"event-source/"+id,{headers});
  }
 
  getEventSources(): Observable<EventSource[]> {
    const headers = new HttpHeaders({ Authorization: 'Bearer '+tokenGetter()});
    return this.http.get<EventSource[]>(this.baseUrl+"events",{headers});
  }
  updateEventSourceAssignee(eventSource:EventSource[]){
    const headers = new HttpHeaders({ Authorization: 'Bearer '+tokenGetter(), 'Content-Type': 'application/json'});
    const url = this.baseUrl+"update-assignee"
    return this.http.post(url,JSON.stringify(eventSource),{headers})
  }
  updateEventSource(eventSource:EventSource){
    const url = this.baseUrl+"update-eventsource";
    const headers = new HttpHeaders({ Authorization: 'Bearer '+tokenGetter(), 'Content-Type': 'application/json'});
    return this.http.post(url,JSON.stringify(eventSource),{headers})
  }
  signatureVerificationDate(): Observable<SignatureVerificationData> {
    const url = this.baseUrl+"signature-verification-data"
    const headers = new HttpHeaders({ Authorization: 'Bearer '+tokenGetter()});
    return this.http.get<SignatureVerificationData>(url,{headers});
  }

  
  logout()   
  {   
    // Remove the token from the localStorage.  
    localStorage.removeItem('jwt_token'); 
    localStorage.removeItem('userId')
  
  }
  isLoggedIn() {     
    // check whether if token have something or it is null.  
    if(tokenGetter())  
    {  
      let is = this.jwtHelper.isTokenExpired(tokenGetter())
      console.log("isLogedIn() called: "+is)
      return !this.jwtHelper.isTokenExpired(tokenGetter());
    }  
  
    return false;   
      
  }  
  getUsers (){
    
    const headers = new HttpHeaders({ Authorization: 'Bearer '+tokenGetter()});
    return this.http.get("http://localhost:8080/verify/signature/login", {headers})
  }
}
