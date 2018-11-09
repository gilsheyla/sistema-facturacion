import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cliente } from '../Inerfaces/cliente.interface';



@Injectable({
  providedIn: 'root'
})
export class FactService {

  ClienteUrl: string = 'https://cosa1-49b77.firebaseio.com/Cliente.json' ;
  clienteUrl: string = 'https://cosa1-49b77.firebaseio.com/Cliente';


  constructor(private http: HttpClient) { }
 
 
 nuevoCliente(cliente: Cliente) {
 const body = JSON.stringify(cliente);
 
 return this.http.post(this.ClienteUrl, body ).pipe(
  map( res => {
    console.log (res);
    return res;
  })
 );
}

actualizarCliente(cliente: Cliente, key$: string) {
  const body = JSON.stringify(cliente);
  let Url = `${ this.clienteUrl }/${ key$ }.json`
  return this.http.put(Url, body ).pipe(
   map( res => {
     return res;
   })
  );
 }

getCliente( key$:string ){
  let Url = `${ this.clienteUrl }/${ key$ }.json`;
  return this.http.get(Url ).pipe(
    map( res => {
     console.log(res);
      return res;}
    ))}

getListc (){
  return this.http.get(this.ClienteUrl).pipe(
    map( res => {
     console.log(res);
      return res;}
    ))
}

deleteCl(key$: string){
  let Url = `${ this.clienteUrl }/${ key$ }.json`
  return this.http.delete( Url ).pipe(
   map( res => {
     console.log (res);
     return res;
   })
  );
}

}