import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AnalisisService {

  constructor(private http:HttpClient, private route:Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  Compare(Data1:string, Data2:string){
    const url = "http://localhost:3000/compare";
    return this.http.post(url,{
      Archivo1:Data1,
      Archivo2:Data2
    },{headers:this.headers}).pipe(map(data=> data));
  }

}
