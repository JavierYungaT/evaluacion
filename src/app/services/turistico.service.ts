import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { merge, Observable } from 'rxjs';
import { Turistico } from '../model/turistico';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TuristicoService {

  constructor(public afs: AngularFirestore) { }

  saveDestino(turismo: Turistico){
    const refContacto = this.afs.collection("turismo");
    if(turismo.uid==null){
      turismo.uid = this.afs.createId();
      
    }

    refContacto.doc(turismo.uid).set(Object.assign({}, turismo), { merge: true})
}

getDestinos(): Observable<any[]>{
  return this.afs.collection("turismo",
          ref => ref.where("deleted", "==", false)).valueChanges();
}


}