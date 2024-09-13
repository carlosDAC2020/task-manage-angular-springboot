import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// vistas
import {BasicViewComponent} from './basic-view/basic-view.component'

export const routes: Routes = [
    { path: 'basic', component: BasicViewComponent },
    { path: '', redirectTo: '/basic', pathMatch: 'full' } 
];

