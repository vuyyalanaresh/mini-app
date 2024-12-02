import { Component } from '@angular/core';
import { AllEmployesService } from '../all-employes.service';

@Component({
  selector: 'app-all-employe',
  templateUrl: './all-employe.component.html',
  styleUrls: ['./all-employe.component.css']
})
export class AllEmployeComponent {
  allemployes :any = [];
  term:string = "";
  constructor(private _allemployeService:AllEmployesService){
    _allemployeService.getAllEmploye().subscribe(
      (data:any)=>{
        this.allemployes = data;
      },
      (err:any)=>{
        alert("internal servererror");
      }
    )
  }
  filter(){
    this._allemployeService.getFilteredAllEmploye(this.term).subscribe(
      (data:any)=>{
        this.allemployes = data;
      },
      (error:any)=>{
        alert("internal server error");
      }
    )
  }

  column:string = "";
  order:string = "";
  sort(){
    this._allemployeService.getSortedAllEmploye(this.column, this.order).subscribe(
      (data:any)=>{
        this.allemployes = data;
      },
      (error:any)=>{
        alert("internal server error");
      }
    )
  }
  limit:number = 0;
  page:number = 0;
  pagination(){
    this.allemployes.getPagedAllEmploye(this.limit, this.page).subscribe(
      (data:any)=>{
        this.allemployes = data;
      },
      (error:any)=>{
        alert("server down");
      }
    )
  }
  delete(id:string){
    this._allemployeService.deleteAllEmploye(id).subscribe(
     (data:any)=>{
      alert("deleted sucssesfully!!");
      location.reload();
     } ,
     (err:any)=>{
      alert("inetrnal error");
     }
    )
  }
}
