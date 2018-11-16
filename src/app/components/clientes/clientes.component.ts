import { Component, OnInit } from '@angular/core';
import { FactService } from '../../services/fact.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {
 
cliente: any[] = [];

  constructor(public _service:FactService,
              private ruta: Router) { 
    
    
   }


  ngOnInit() {
    this._service.getListc()
  }

Delete(key$: string){
  this._service.deleteCl(key$)

  }

}
