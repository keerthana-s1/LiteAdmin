import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export  class ApiService {
    messages 
    users
    records
    
    constructor(private http: HttpClient) {}
    getdata() {
      return  this.http.get('http://localhost:3000/all')
        
    }
    getrecUpdate(id) {
        return this.http.get('http://localhost:3000/update/'+ id )
    }
    Updaterec(data) {
        this.http.post<any>('http://localhost:3000/update',data).subscribe(res => {
             console.log(res)
             //localStorage.setItem(this.TOKEN_KEY,res.token)
         })
     }
    addDB(DB) {
        this.http.post<any>('http://localhost:3000/addDB',DB).subscribe(res => {
             console.log(res)
             //localStorage.setItem(this.TOKEN_KEY,res.token)
         })
     }
     addmanyDB(DB) {
        this.http.post<any>('http://localhost:3000/addmanyDB',DB).subscribe(res => {
             console.log(res)
             //localStorage.setItem(this.TOKEN_KEY,res.token)
         })
     }

     delrec(BMdata) {
        this.http.post<any>('http://localhost:3000/delete',BMdata).subscribe(res => {
             console.log(res)
             //localStorage.setItem(this.TOKEN_KEY,res.token)
         })
     }

  
    getBMnames() {
        return this.http.get('http://localhost:3000/bmnames')
     }
    


    getHomeUser() {
       return this.http.get('http://localhost:3000/home')
    }



    


    
}