import { Component, OnInit } from '@angular/core';
import { User } from '../../Inerfaces/user.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

user:User = {
  usuario:'',
  clave:''
}

  constructor() { }



  ngOnInit() {
  }

  guardar(){
    
  }
}
