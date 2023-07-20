import { Injectable } from '@angular/core';
import { EventSource } from '../class/event-source';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private sharedData: EventSource;
  private newSlectedRows: EventSource

  setNewSelectRows(row:EventSource){
    this.newSlectedRows = row;
    console.log(this.newSlectedRows)
  }
  getNewSelectRows(){
    console.log(this.newSlectedRows)
    return this.newSlectedRows;
  }
  // private selectedRowData:EventSource[];
  // private selectedRowData: Record<number, EventSource> = {};
  private selectedRowData: { [key: number]: EventSource } = {};
  // private selectedRowData: EventSource[];


  setSelectedRowData(key: number, eventSource: EventSource): void {
    // this.selectedRowData = [...this.selectedRowData, data]
    // console.log(data)
    this.selectedRowData[key] = eventSource;
    // console.log(this.selectedRowData)
    // console.log("calling "+this.getSelectedRowData())
  }
  // public getSelectedRowData(): EventSource[] {
  //   console.log("inside getSelected"+this.selectedRowData)
  //   return this.selectedRowData;
  // }
  getSelectedRowData(): { [key: number]: EventSource } {
    return this.selectedRowData;
  }

  setData(data: EventSource) {
    this.sharedData = data;
  }

  getData(): EventSource {
    return this.sharedData;
  }
}
