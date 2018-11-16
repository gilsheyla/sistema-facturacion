import { Injectable } from '@angular/core';
import { Suplidor } from '../Inerfaces/supli.interface';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class SupService {

SupUrl:string = "/suplidores";
objSuplidor:any[]=[]

  constructor(public DB:AngularFirestore) { }

  nuevoSup(supli: Suplidor) {
     return this.DB.collection('suplidores').add(supli)
   }

   updateSup( key$: string, data) {
   return this.DB.doc(`${this.SupUrl}/${key$}`)
   .update(data)
   }

getListS (){
    this.DB.collection('suplidores',ref=>ref.where('estado', '==', 1 )).snapshotChanges()
          .subscribe(res=>{
            this.objSuplidor=[]
            res.map(a=>{
              const data:any = a.payload.doc.data()
              data.id= a.payload.doc.id
              this.objSuplidor.push(data)
            })
          })
}

getSup( key$:string ){
   return this.DB.doc(`${this.SupUrl}/${key$}`)
}

deleteSup(key$: string){
  let estado ={
    estado: 2
  }
  this.DB.doc(`${this.SupUrl}/${key$}`)
  .update(estado).then(()=>{
    console.log("Eliminado");
    
  })
}

}