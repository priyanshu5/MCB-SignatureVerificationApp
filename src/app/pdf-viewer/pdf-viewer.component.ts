import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { EventSource } from '../class/event-source';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent {
  selectedRow:EventSource
  pdfUrl: string = "";
  constructor(private dataService: DataServiceService){
    // this.selectedRow
  }
  ngOnInit() {
    this.selectedRow = this.dataService.getData();
    this.pdfUrl = this.selectedRow.documentCaptureReference;
  }

}
