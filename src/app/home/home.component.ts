import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../services/restapi.service';
import { EventSource } from '../class/event-source';
import { DataServiceService } from '../services/data-service.service';
// import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:RestapiService, private router: Router, private dataService: DataServiceService){}
  eventSources : EventSource[]

  ngOnInit(){
    this.getEventSource();
  }
  navigateToRowDetails(selectedRow: EventSource) {
    this.dataService.setData(selectedRow)
    this.router.navigate(['/row', selectedRow.id]);
  
  }

  assignToUser() {
    const selectedRows = this.eventSources.filter(source => source.selected);
    // Perform the assignment logic using the selectedRows array
    console.log(selectedRows);
    var userId = localStorage.getItem("userId")
    selectedRows.forEach(row => {
      row.assignTo = userId!=null?userId:""
      // row.status = ""
    })
    this.service.updateEventSourceAssignee(selectedRows).subscribe(data=>{
      console.log(data)
    })
    

  }
  viewSelectedRows() {
    const selectedRows = this.eventSources.filter(source => source.selected);
    

    console.log(selectedRows)
    selectedRows.forEach(row => {
      const url = this.getDetailsUrl(row);
      console.log(row.accountShortName)
      // this.dataService.setSelectedRowData(row.id, row);
      this.dataService.setNewSelectRows(row);
      window.open(url); // Open the details page in a new tab
    });
  }
  private getDetailsUrl(row: EventSource): string {
    // Implement your own logic to generate the URL for the details page based on the row data
    // For example, you can use row IDs or other identifiers to construct the URL
    return `/signature-view/${row.id}`;
  }
  
  getEventSource() {
    this.service.getEventSources().subscribe((data: EventSource[]) => {
      this.eventSources = data;
      console.log(this.eventSources);
      // console.log(this.eventSources[0].businessKey)
    });
  }
  
  logout(){
    this.service.logout();
    console.log("logout")
    this.router.navigate(["/login"])
  }

}