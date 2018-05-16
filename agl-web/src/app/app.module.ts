import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

import { appRoutes } from './routerConfig';

import { AppComponent } from './app.component';
import { AglPetsComponent } from './components/agl-pets/agl-pets.component';
import { PetsServiceModule } from './services/pets-service/pets-service.module';

@NgModule({
  declarations: [
    AppComponent,
    AglPetsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PetsServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
