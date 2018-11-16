import { Component, OnInit } from '@angular/core';
import { User } from '../../Inerfaces/user.interface';
import { LogService } from '../../services/log.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

user:User = {
  
  nombre:'',
  usuario:'',
  clave:'',
  tipUsu:''
}

  constructor(private _service: LogService) { }

  ngOnInit() {
  }


}
