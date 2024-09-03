import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServesComponent } from './serves/serves.component';
import { Component } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'services',
    component: ServesComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
