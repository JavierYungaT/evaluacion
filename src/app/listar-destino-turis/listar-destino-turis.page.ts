import { Component, OnInit } from '@angular/core';

import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-listar-destino-turis',
  templateUrl: './listar-destino-turis.page.html',
  styleUrls: ['./listar-destino-turis.page.scss'],
})
export class ListarDestinoTurisPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }


  listarDestino(uid: string){
    const url = '/turismo/' + uid;
    console.log(url);
    this.router.navigate([url]); 

  }
}
