import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearDestinoTurisPage } from './crear-destino-turis.page';

const routes: Routes = [
  {
    path: '',
    component: CrearDestinoTurisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearDestinoTurisPageRoutingModule {}
