import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../Inerfaces/user.interface';
import { auth, firestore } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import * as firebase from 'firebase/app';




@Injectable({
  providedIn: 'root'
})
export class LogService {

 public user:Observable<User>


  constructor(public db: AngularFirestore,
              private auth: AngularFireAuth,
              private ruta: Router
          ) { this.user = this.auth.authState.pipe(
            switchMap(user => {
              if (user) {
                return this.db.doc<User>(`users/${user.uid}`).valueChanges();
              } else {
                return of(null);
              }
            }));}

            private oAuthLogin(provider) {
              return this.auth.auth.signInWithPopup(provider)
                .then((credential) => {
                this.updateUser(credential.user)
                })
            }
          
            private updateUser(user){
              const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${user.uid}`);
              const data: User = {
                key$: user.uid,
                nombre: user.nombre,
                usuario: user.usuario,
                clave: user.clave,
                tipUsu: user.tipUsu
              }
              return userRef.set(data, { merge: true })
            } 

            signOut() {
              this.auth.auth.signOut().then(() => {
                  this.ruta.navigate(['/usuario']);
              });
            }

           Login() {
              const provider =  new auth.EmailAuthProvider();
              return this.oAuthLogin(provider) 
              
                  }
                }