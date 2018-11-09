import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../Inerfaces/cliente.interface';
import { FactService } from '../../services/fact.service';
import { Router,ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styles: []
})
export class NewClientComponent implements OnInit {

 clientes:Cliente = {

  nombre:'',
  apellido:'',
  direccion:'',
  telef:''
}

new: boolean;
id: string;

  constructor(private _service: FactService,
              private ruta: Router,
              private rout: ActivatedRoute
              ) {

                this.rout.params.subscribe(parametros=>
                  {
                    this.id = parametros ['id'];
                    if(this.id !== "nuevo") 
                    
                    {this._service.getCliente(this.id)
                    .subscribe ((clientes: any) => this.clientes = clientes);
                   }})
              }

              
  ngOnInit() {
  }

guardar(){
//   if (this.id == "nuevo" )
//                     {
//  this._service.nuevoCliente(this.clientes)
//  .subscribe(data => {
//   this.ruta.navigate(['/newClient', data.name])
//     }
//    )
//     console.log(this.clientes);
//  }else{
//   this._service.actualizarCliente(this.clientes, this.id)
//   .subscribe(data => {
    
//      }
//     )
//      console.log(this.clientes);
//  }
  }

  addN( forma: NgForm ){
forma.reset();
this.ruta.navigate(['/newClient', 'nuevo']);


  }

}
