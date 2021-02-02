import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'crear-destino-turis',
    loadChildren: () => import('./crear-destino-turis/crear-destino-turis.module').then( m => m.CrearDestinoTurisPageModule)
  },
  {
    path: 'listar-destino-turis',
    loadChildren: () => import('./listar-destino-turis/listar-destino-turis.module').then( m => m.ListarDestinoTurisPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
