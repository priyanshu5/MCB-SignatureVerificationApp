import { Component } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { EventSource } from '../class/event-source';
import { DataServiceService } from '../services/data-service.service';
import { FormControl, FormGroup,  FormBuilder} from '@angular/forms';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-row-details',
  templateUrl: './row-details.component.html',
  styleUrls: ['./row-details.component.css']
})
export class RowDetailsComponent {
  selectedRow: EventSource;
  formGroup: FormGroup;
  radioValue: string = 'option1';
  eventSource:EventSource;

  constructor(private dataService: DataServiceService, private formBuilder: FormBuilder, private service:RestapiService,
    private router: Router) { 
    
  }
  
  ngOnInit() {
    this.selectedRow = this.dataService.getData();
    // this.formGroup = this.formBuilder.group({
    //   gridRadios: ['option1'],
    //   comments:[this.selectedRow.comments], // Set default value for radio buttons
    //   discrepancyReasonControl: [''] // Initialize discrepancyReasonControl with an empty value
    // });
    this.formGroup = this.formBuilder.group({
      id: [this.selectedRow.id],
      selected: [this.selectedRow.selected],
      businessKey: [this.selectedRow.businessKey],
      application: [this.selectedRow.application],
      comments: [this.selectedRow.comments],
      transactionCurrency: [this.selectedRow.transactionCurrency],
      transactionAmount: [this.selectedRow.transactionAmount],
      amountInMur: [this.selectedRow.amountInMur],
      debitAccountNumber: [this.selectedRow.debitAccountNumber],
      accountShortName: [this.selectedRow.accountShortName],
      debitAccountCcy: [this.selectedRow.debitAccountCcy],
      paymentDetails1: [this.selectedRow.paymentDetails1],
      paymentDetails2: [this.selectedRow.paymentDetails2],
      paymentDetails3: [this.selectedRow.paymentDetails3],
      paymentDetails4: [this.selectedRow.paymentDetails4],
      verified: ['Yes'],
      discrepancyReason: [this.selectedRow.discrepancyReason],
      updatedBy: [localStorage.getItem("userId")],
      updatedOn: [new Date()],
      priority: [this.selectedRow.priority],
      sourceBu: [this.selectedRow.sourceBu],
      documentCaptureReference: [this.selectedRow.documentCaptureReference],
      status: [this.selectedRow.status],
      assignTo: [this.selectedRow.assignTo]
    });
    // console.log(localStorage.getItem(""))
  }
  

  isNoSelected(): boolean {
    return this.formGroup.get('verified')?.value === 'No';
  }
  updateEventSource(status:string){
    
    if (this.formGroup.valid) {
      // Map the form group values to the EventSource object
  
      this.eventSource = new EventSource();
      this.eventSource.id = this.formGroup.get('id')!.value;
      this.eventSource.businessKey = this.formGroup.get('businessKey')!.value;
      this.eventSource.application = this.formGroup.get('application')!.value;
      this.eventSource.comments = this.formGroup.get('comments')!.value;
      this.eventSource.transactionCurrency = this.formGroup.get('transactionCurrency')!.value;
      this.eventSource.transactionAmount = this.formGroup.get('transactionAmount')!.value;
      this.eventSource.amountInMur = this.formGroup.get('amountInMur')!.value;
      this.eventSource.debitAccountNumber = this.formGroup.get('debitAccountNumber')!.value;
      this.eventSource.accountShortName = this.formGroup.get('accountShortName')!.value;
      this.eventSource.debitAccountCcy = this.formGroup.get('debitAccountCcy')!.value;
      this.eventSource.paymentDetails1 = this.formGroup.get('paymentDetails1')!.value;
      this.eventSource.paymentDetails2 = this.formGroup.get('paymentDetails2')!.value;
      this.eventSource.paymentDetails3 = this.formGroup.get('paymentDetails3')!.value;
      this.eventSource.paymentDetails4 = this.formGroup.get('paymentDetails4')!.value;
      this.eventSource.verified = this.formGroup.get('verified')!.value;
      this.eventSource.discrepancyReason = this.formGroup.get('discrepancyReason')!.value;
      this.eventSource.priority = this.formGroup.get('priority')!.value;
      this.eventSource.sourceBu = this.formGroup.get('sourceBu')!.value;
      this.eventSource.documentCaptureReference = this.formGroup.get('documentCaptureReference')!.value;
      // this.eventSource.status = status
      this.eventSource.assignTo = this.formGroup.get('assignTo')!.value;
      this.eventSource.updatedBy= localStorage.getItem("userId")!;
      this.eventSource.updatedOn= new Date()
      if (status === "proceed") {
        this.eventSource.status = "Proceed";
      } else if (status === "reject") {
        this.eventSource.status = "Reject";
      }
  
      console.log("proceeded")
      
    this.service.updateEventSource(this.eventSource).subscribe(data=>{
      console.log(data);
      console.log(this.eventSource.discrepancyReason)
      this.router.navigate(['/navsidebar/home']);

    })
      // Now you have the EventSource object with form group values mapped
      // You can use this.eventSource to
    }else{
      console.log('Form is not valid. Please fill all required fields.');
    }
    
  }
  
  
}
