import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarDestinoTurisPageRoutingModule } from './listar-destino-turis-routing.module';

import { ListarDestinoTurisPage } from './listar-destino-turis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarDestinoTurisPageRoutingModule
  ],
  declarations: [ListarDestinoTurisPage]
})
export class ListarDestinoTurisPageModule {}
