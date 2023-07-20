import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: RestapiService, private router: Router){}
  ngOnInit(){
    if((this.service.isLoggedIn()) )  
    {  
        this.router.navigate(["/navsidebar"]);  
    }  
    else  
    {  
        console.log("login unsuccesssful");
        this.router.navigate(["/login"]);  
    }

  }
  // name = new FormControl(''); 
  form = new FormGroup({  
    username : new FormControl('' , Validators.required),  
    password : new FormControl('' , Validators.required)  
  }); 

  public Login(){
    const body = { username: this.username?.value, password: this.password?.value };
    // const body = 
    var response = this.service.login(body);
    response.subscribe(data=>{
      
      console.log(data);
      console.log(Object.values(data)[1])
    
      localStorage.setItem("jwt_token" , Object.values(data)[1]);
      localStorage.setItem("userId" , Object.values(data)[0]);
      
      this.router.navigate(["/navsidebar"])
    })
  }

  get username(){  
    return this.form.get('username');  
  }  

  get password(){  
    return this.form.get('password');
  }

}
