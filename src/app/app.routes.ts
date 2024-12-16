import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlockComponent } from './block/block.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToyComponent } from './toy/toy.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'block',component:BlockComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'services',component:ServicesComponent},
    {path:'login' ,component:LoginComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'toy/:name', component:ToyComponent},
    {path:'**',component:NotFoundComponent}
];
