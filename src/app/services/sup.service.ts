import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Suplidor } from '../Inerfaces/supli.interface';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class SupService {

SupUrl:string = "https://cosa1-49b77.firebaseio.com/Sup.json";
supUrl:string = "https://cosa1-49b77.firebaseio.com/Sup"

objSuplidor:any[]=[]

  constructor(private http: HttpClient,public DB:AngularFirestore) { }


  nuevoSup(supli: Suplidor) {
     return this.DB.collection('suplidores').add(supli)
   }

   updateSup(supli: Suplidor, key$: string) {
    const body = JSON.stringify(supli);
    let url = `${ this.supUrl }/${key$}.json`
    return this.http.put(url, body).pipe(
     map( res => {
       console.log (res);
       return res;
     })
    );
   }

getListS (){
    this.DB.collection('suplidores').snapshotChanges()
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
  let Url = `${ this.supUrl }/${ key$ }.json`;
  return this.http.get(Url ).pipe(
    map( res => {
     console.log(res);
      return res;}
    ))}

    deleteSup(key$: string){
      let Url = `${ this.supUrl }/${ key$ }.json`
      return this.http.delete( Url ).pipe(
       map( res => {
         console.log (res);
         return res;
       })
      );
    }

}