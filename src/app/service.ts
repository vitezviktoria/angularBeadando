import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataIn } from "./datamodel";

@Injectable({
  providedIn: 'root'
})

export class Service {
  public adatom: DataIn[]=[];

  constructor(private http: HttpClient) { }

  public fetch(): Observable<any>{
    return this.http.get('https://www.cheapshark.com/api/1.0/deals');
  }

  public index: number;

  getadat(adat: any): void{
    this.index = this.adatom.indexOf(adat);
    console.log("index = " + this.index)
  }
}
