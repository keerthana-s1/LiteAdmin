import { Component } from '@angular/core';
import { ApiService } from './api.service'
import {AuthService} from './auth.service'
import {MatSnackBar} from '@angular/material/snack-bar'

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
  
}
