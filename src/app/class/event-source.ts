export class EventSource {
  id: number = 0;
  selected: boolean = false;
  businessKey: string = '';
  application: string = '';
  comments: string = '';
  transactionCurrency: string = '';
  transactionAmount: number = 0;
  amountInMur: number = 0;
  debitAccountNumber: string = '';
  accountShortName: string = '';
  debitAccountCcy: string = '';
  paymentDetails1: string = '';
  paymentDetails2: string = '';
  paymentDetails3: string = '';
  paymentDetails4: string = '';
  verified: string = '';
  discrepancyReason: string = '';
  createdBy: string = '';
  createdOn: Date = new Date();
  updatedBy: string = '';
  updatedOn: Date = new Date();
  priority: '1 - Normal' | '2 - Fast Track' = '1 - Normal';
  sourceBu: string = '';
  documentCaptureReference: string = '';
  status: 'unassigned' | 'Proceed' | 'Reject' = 'unassigned';
  assignTo: string = '';
}
