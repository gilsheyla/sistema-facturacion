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

  constructor(private _service:FactService,
              private ruta: Router) { 
    this._service.getListc().subscribe(data =>{

      for(let key$ in data){
      let c = data[key$];
      c.key$ = key$;
      this.cliente.push(data [key$])
    }})
    console.log(this.cliente) 
    
   }


  ngOnInit() {
  }

Delete(key$: string){

  this._service.deleteCl(key$)
      .subscribe(data =>{
if (data) {
  console.error(data)
}else{
  delete this.cliente[key$]
}
      } 
      
        );
  

}

}
