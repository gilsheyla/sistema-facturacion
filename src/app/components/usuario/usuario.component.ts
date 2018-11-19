import { Component, OnInit } from '@angular/core';
import { User } from '../../Inerfaces/user.interface';
import { LogService } from '../../services/log.service';
import * as firebase from 'firebase/app';


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

  constructor(public _service: LogService) { }

  ngOnInit() {
  }

  
}