import { Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { AglPetsComponent } from './components/agl-pets/agl-pets.component'

export const appRoutes: Routes = [
    { 
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },  
    { 
      path: 'home', 
      component: AglPetsComponent 
    }
  ];