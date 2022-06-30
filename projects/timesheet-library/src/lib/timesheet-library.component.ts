import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'timesheetLibrary[titleSideColumn][rows][columns][headObject]',
  templateUrl:'./timesheet-library.html',
  styleUrls:['./timesheet-library.less'],
})

export class TimesheetLibraryComponent implements OnInit {
  @Input() rows: string[][] = [['']];
  @Input() columns = [''];
  @Input() headObject= [{ key:0 , value: '' }];
  @Output() datatEmitter = new EventEmitter();
  @Input() titleSideColumn:string='';

  displayedColumns: string[] = [];
  sideColumn: string[] = [];
  dataSource:string[][] = [];
  dataSourceLength:number = 0;
  numberOfElements:number = 0;
  constructor() {}

  ngOnInit(): void {
    this.displayedColumns.push(this.titleSideColumn);
    this.headObject.forEach(object => this.displayedColumns.push(object.key.toString()+" "+object.value.toLocaleUpperCase()));
    this.displayedColumns.push(" ");
    for(let i=0;i<this.rows.length;i++){
      this.dataSource.push([this.columns[i]]);
      for(let j=0;j<this.rows[i].length;j++){
        this.dataSource[i].push(this.rows[i][j]);
      }
      this.dataSource[i].push('0');
      this.totalPerRow(i)
      this.dataSourceLength=this.dataSource[i].length;
    }
    let tab:string[] = [""];
    for(let i=0;i<this.dataSourceLength-2;i++){
          tab.push("0");
    }
    this.dataSource.push(tab);
    this.numberOfElements=this.dataSource.length;
    this.initializeTotalPerColumn()

  }

  getData(): string[][] {
    this.datatEmitter.emit(this.dataSource);
    return this.dataSource
  }

 
  totalPerRow(j: number) {
    let somme = 0;
    for(let i = 1; i < this.dataSource[j].length-1; i++) {
      somme+=this.getQuota(this.dataSource[j][i]);
    }
    this.dataSource[j][this.dataSource[j].length-1]=somme.toString();
  }

  getQuota(quota: string) {
    if(quota === 'D'){
      return 1;
    }if(quota==='AM'||quota==='PM'){
      return 0.5;
    }
    return 0
  }
 
  initializeTotalPerColumn() {
    for (let j = 1; j < this.dataSource[0].length-1; j++) {
      let sumPerColumn: number = 0;
      for(let i=0;i<this.dataSource.length-1;i++){
        sumPerColumn+= this.getQuota(this.dataSource[i][j])
      }
      this.dataSource[this.dataSource.length-1][j]=sumPerColumn.toString();
    }
    this.getData();
  }

  getStatusButton(status:string,quota:string):boolean {
    if(quota=='D'){
      return true
     }
     return status==quota;
  }
  
  getColoredButton(button: any) {
    if(button === true){
      return 'red'
    }
    return ''
  }
  getColoredText(text: any) {
    if(text === true){
      return 'white'
    }
    return 'black'
  }

  setColorButton(status:string,quota: string) {
    if(status==='PM'){
    return this.getColoredButton(this.getStatusButton("PM",quota));
    }else
    return this.getColoredButton(this.getStatusButton("AM",quota));
  }
  
  setTextColor(status:string,quota: string) {
    if(status==='AM'){
    return this.getColoredText(this.getStatusButton("AM",quota));
    }else
    return this.getColoredText(this.getStatusButton("PM",quota));
  }

  clickTo(quota:string,i: number, j: number) {
    this.dataSource[i][j] = quota;
    this.totalPerRow(i);
    this.initializeTotalPerColumn()
  }
}
