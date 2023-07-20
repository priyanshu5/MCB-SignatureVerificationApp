import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { ActivatedRoute } from '@angular/router';
import { EventSource } from '../class/event-source';
import { RestapiService } from '../services/restapi.service';
import { FormControl, FormGroup,  FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-view-signature-only',
  templateUrl: './view-signature-only.component.html',
  styleUrls: ['./view-signature-only.component.css']
})



export class ViewSignatureOnlyComponent {
  selectedRow: EventSource;
  id:number
  formGroup: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private service: RestapiService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getEeventSourceById(this.id).subscribe(data=>{
      this.selectedRow = data;
      console.log(data);
      console.log(this.selectedRow.businessKey)
      this.initFormGroup();
    })
    
  }
  initFormGroup(){
    console.log(this.selectedRow.comments);
    this.formGroup = this.formBuilder.group({
      // id: [this.selectedRow.id],
      // selected: [this.selectedRow.selected],
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
      verified: [this.selectedRow.verified],
      discrepancyReason: [this.selectedRow.discrepancyReason],
      // updatedBy: [localStorage.getItem("userId")],
      // updatedOn: [new Date()],
      priority: [this.selectedRow.priority],
      sourceBu: [this.selectedRow.sourceBu],
      documentCaptureReference: [this.selectedRow.documentCaptureReference],
      status: [this.selectedRow.status],
      assignTo: [this.selectedRow.assignTo]
    });
    this.disableFormControls();
  }

  isNoSelected(): boolean {
    return this.formGroup.get('verified')?.value === this.selectedRow.verified;
  }
  disableFormControls() {
    Object.keys(this.formGroup.controls).forEach(controlName => {
      this.formGroup.get(controlName)!.disable();
    });
  }


}
