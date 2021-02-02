import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarDestinoTurisPage } from './listar-destino-turis.page';

const routes: Routes = [
  {
    path: '',
    component: ListarDestinoTurisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarDestinoTurisPageRoutingModule {}
