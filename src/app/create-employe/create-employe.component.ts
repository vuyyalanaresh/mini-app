import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AllEmployesService } from '../all-employes.service';

@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.css']
})
export class CreateEmployeComponent {

public userForm:FormGroup = new FormGroup({
  name :new FormControl(),
  company :new FormControl(),
  role :new FormControl(),
  package :new FormControl(),
  email :new FormControl(),
  dob :new FormControl(),
  // nested 
  address :new FormGroup({
  addresline :new FormControl(),
  city:new FormControl(), 
  state :new FormControl(),
  pincode:new FormControl(), 
  }),
hikes:new FormArray([]),
workMode:new FormControl(),
})
get hikesFormArray(){
  return this.userForm.get('hikes')as FormArray;
}
addhikes(){
  this.hikesFormArray.push(
    new FormGroup({
      percentage:new FormControl(),
      year:new FormControl(),
    })
  )
}
constructor(private _allemployeService:AllEmployesService){
  this.userForm.get("workMode")?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='workfromoffice'){
        this.userForm.addControl('travelfee', new FormControl());
        this.userForm.removeControl('wifibill');
      }
      else{
        this.userForm.addControl('wifibill', new FormControl());
        this.userForm.removeControl('travelfee');

      }
    }
  )
}
submit(){
  console.log(this.userForm)
  this._allemployeService.CreateEmploye(this.userForm.value).subscribe(
    (data:any)=>{
      alert("submited successfully!!");
    },
    (error:any)=>{
      alert("invalid submit details");
    }
  )
}
}
