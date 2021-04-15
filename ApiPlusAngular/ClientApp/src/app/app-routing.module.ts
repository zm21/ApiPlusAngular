import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './Auth/Login/Login.component';
import { RegisterComponent } from './Auth/Register/Register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch:'full'},
    {path:'home', component: HomeComponent, pathMatch:'full'},
    { path:'login', component:LoginComponent, pathMatch:'full'},
    { path:'register', component:RegisterComponent, pathMatch:'full'},
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }