import { Component } from '@angular/core';
import { ApiService } from './api.service'
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'newfrom',
  templateUrl: 'newbm.component.html' ,
  styleUrls:['form.component.css']
})
export class NewDBComponent {
      Field = {
        name:"",
        age:"",
        dept:"",
        rno:"",
        year:""
        
    }
    selectedFile :File
    number
   DB=[]
    c=0
    arr=[]
  constructor (public apiService :ApiService,private _snackBar: MatSnackBar) {}

  ngOnInit() {
    
  }

  add(){
   this.DB[this.c] = this.Field
   this.c++; 
  }
  gen(){
    for(var i=0;i<this.number;i++)
    {
      this.arr[i]=i+1
      console.log(this.arr)
    }
  }
  post() {
    
    this._snackBar.open('New DB Added','close ', {
      duration: 2000,
    });
   this.apiService.addDB(this.Field)
}
onFileChanged(event) {
  this.selectedFile = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsText(this.selectedFile, "UTF-8");
  fileReader.onload = () => {
   //console.log(fileReader.result);
  }
  fileReader.onerror = (error) => {
    //console.log(error);
  }
}

onUpload() {
  const fileReader = new FileReader();
  fileReader.readAsText(this.selectedFile, "UTF-8");
  fileReader.onload = () => {
    console.log(fileReader.result);
    this.apiService.addmanyDB(this.selectedFile)
  }}
  
}
