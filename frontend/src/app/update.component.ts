import { Component } from '@angular/core';
import { ApiService } from './api.service'
import {MatSnackBar} from '@angular/material/snack-bar'
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'update',
  templateUrl: 'update.component.html' ,
  styleUrls:['form.component.css']
})
export class UpdateComponent {
   
    Field
  
  constructor (public apiService :ApiService,private _snackBar: MatSnackBar,private route : ActivatedRoute) {}

  ngOnInit() {
    var id = this.route.snapshot.params.id
    this.apiService.getrecUpdate(id).subscribe(data => {
       this.Field= data
       console.log(this.Field)
    })
    
  }




  post() {
    this.apiService.getHomeUser().subscribe(profile =>{
     this.Field.OwnerID= profile[0]._id
     //console.log(this.RecData)
    })
    this._snackBar.open('Record edited','close ', {
      duration: 2000,
    });
   // console.log(this.BMData)
         this.apiService.Updaterec(this.Field)
}
  
}
