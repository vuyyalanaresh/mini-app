import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { AllEmployeComponent } from './all-employe/all-employe.component';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dash-board', canActivate:[AuthenticationGuard], component:DashBoardComponent, children:
    [{path:'Home',component:HomeComponent},
    {path:'all-employe',component:AllEmployeComponent},
    {path:'create-employe',component:CreateEmployeComponent},
    {path:'logout',component:LogoutComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
