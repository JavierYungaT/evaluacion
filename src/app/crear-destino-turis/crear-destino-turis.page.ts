import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Turistico } from '../model/turistico';
import { TuristicoService } from '../services/turistico.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-crear-destino-turis',
  templateUrl: './crear-destino-turis.page.html',
  styleUrls: ['./crear-destino-turis.page.scss'],
})
export class CrearDestinoTurisPage implements OnInit {

  turistico: Turistico = new Turistico();
  estado: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,public turismotService: TuristicoService
    ) { 

      this.route.queryParams.subscribe(params => {
        console.log(params);
        if(this.router.getCurrentNavigation().extras.queryParams){
          this.turistico = this.router.getCurrentNavigation().extras.queryParams.turistico;
          console.log(this.turistico);
        }
      });

    }

  ngOnInit() {
  }
  
  guardar(){
    console.log(this.turistico, this.estado);

    this.turismotService.saveDestino(this.turistico);
 
    let navigationExtras: NavigationExtras = {
      queryParams: {
        turismo: this.turistico,
        estado: this.estado,
      }
    };

    
  }


  

}
