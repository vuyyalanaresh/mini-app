import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllEmployesService {

  constructor(private _httpclient:HttpClient){}
  getAllEmploye():Observable<any>{
    return this._httpclient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees");
  }
  getFilteredAllEmploye(term:string):Observable<any>{
    return this._httpclient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?filter="+term);
  }
  getSortedAllEmploye(column:string, order:string):Observable<any>{
    return this._httpclient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy="+column+"&order="+order);
  }
  getPagedAllEmploye(limit:number, page:number):Observable<any>{
    return this._httpclient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?limit="+limit+"&page="+page);
  }
  deleteAllEmploye(id:string):Observable<any>{
    return this._httpclient.delete("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id);
  }
  CreateEmploye(data:any):Observable<any>{
    return this._httpclient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees/",data)
  }


  
  
}
