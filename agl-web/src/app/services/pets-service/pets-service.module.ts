import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { PetsService } from './pets-service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [ PetsService ]
})
export class PetsServiceModule { }
