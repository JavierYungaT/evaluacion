import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearDestinoTurisPageRoutingModule } from './crear-destino-turis-routing.module';

import { CrearDestinoTurisPage } from './crear-destino-turis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearDestinoTurisPageRoutingModule
  ],
  declarations: [CrearDestinoTurisPage]
})
export class CrearDestinoTurisPageModule {}
