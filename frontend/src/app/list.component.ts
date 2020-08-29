import { Component } from '@angular/core';
import { ApiService } from './api.service'
import {AuthService} from './auth.service'
import {MatSnackBar} from '@angular/material/snack-bar'
import * as jsPDF from 'jspdf'

@Component({
  selector: 'list',
  templateUrl: 'list.component.html' ,
  styleUrls:['form.component.css']
})
export class ListComponent {
    records
  constructor (public apiService :ApiService,private _snackBar: MatSnackBar,public authService :AuthService) {}

  ngOnInit() {
    this.apiService.getdata().subscribe(res => {
        
        this.records= res
       
    })
   
  }
  delete(data)
  {
    this.apiService.delrec(data)
    this._snackBar.open('Bookmark Deleted','close ', {
      duration: 2000,
    });
  }
  download() {
    var a = document.createElement("a");
    var json_pre = JSON.stringify( this.records)
    a.href = 'data:attachment/csv;charset=utf-8,' + encodeURI(json_pre);
      a.target = '_blank';
      a.download = 'sample.json';
      document.body.appendChild(a);
      a.click();
    
  }
  
  
}
