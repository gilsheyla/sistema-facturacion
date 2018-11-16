import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../Inerfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LogService {



  constructor(public db: AngularFirestore) { }

addUser(user:User){
 return this.db.collection('Usuarios').add(user)
}
}
