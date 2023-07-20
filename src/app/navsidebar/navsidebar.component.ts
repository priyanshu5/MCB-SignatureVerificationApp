import { Component } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navsidebar',
  templateUrl: './navsidebar.component.html',
  styleUrls: ['./navsidebar.component.css']
})
export class NavsidebarComponent {
    constructor(private service:RestapiService, private router:Router){}

    logout(){
      this.service.logout();
      console.log("logout")
      this.router.navigate(["/login"])
    }

}
