import { Component } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { SignatureVerificationData } from '../class/signature-verification-data';

@Component({
  selector: 'app-signature-verification-data',
  templateUrl: './signature-verification-data.component.html',
  styleUrls: ['./signature-verification-data.component.css']
})
export class SignatureVerificationDataComponent {
  signatureData: SignatureVerificationData
  constructor(private service: RestapiService) { 
    this.signatureData = new SignatureVerificationData
  }
  ngOnInit() {
    this.signatureVerificationData();
  }

  signatureVerificationData() {
    console.log("inside sig data")
    this.service.signatureVerificationDate().subscribe(data => {
      this.signatureData = data;
      console.log(data);
    })
  }

}



