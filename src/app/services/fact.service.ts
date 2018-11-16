import { Injectable } from '@angular/core';
import { Cliente } from '../Inerfaces/cliente.interface';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FactService {

  ClienteUrl: string = '/clientes' ;
  objCliente: any[] = [];

  constructor( public db:AngularFirestore) { }
 
 nuevoCliente(cliente: Cliente) {
 return this.db.collection('clientes').add(cliente)
}

actualizarCliente(key$:string, data) {
  return this.db.doc(`${this.ClienteUrl}/${key$}`)
  .update(data)
 }

getCliente( key$:string ){
  return this.db.doc(`${this.ClienteUrl}/${key$}`)
}

getListc (){
this.db.collection('clientes', (ref => ref.where('estado', '==', 1))).snapshotChanges()
.subscribe( res =>{
  this.objCliente=[]
  res.map(a =>{
    const datos: any = a.payload.doc.data()
    datos.id = a.payload.doc.id
    this.objCliente.push( datos)
    })
  })
}

deleteCl(key$: string){
  let estado ={
    estado: 2
  }
  this.db.doc(`${this.ClienteUrl}/${key$}`)
  .update(estado)
  console.log("Se elimino correctamente")
}

}