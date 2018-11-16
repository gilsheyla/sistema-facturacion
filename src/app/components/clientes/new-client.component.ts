import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../Inerfaces/cliente.interface';
import { FactService } from '../../services/fact.service';
import { ActivatedRoute, Router } from "@angular/router";


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
  telef:'',
  estado:1
}

titulo:string = "Registrar"
id: string;

  constructor(private _service: FactService,
              private ruta: ActivatedRoute,
              private route: Router
              ) {
              }

              
  ngOnInit() {
    this.ruta.params.subscribe(data =>{
      console.log(data);
      this.id = data.id
      if(this.id != "nuevo"){
        this.titulo = "Modificar"
        this._service.getCliente(data.id).valueChanges().subscribe((data: Cliente) =>{
        console.log(data)
      this.clientes = data
    })}    
    })
  }

guardar(){
  if (this.id == "nuevo"){
  this._service.nuevoCliente(this.clientes).then(()=>{
    this.clientes ={
      nombre:'',
      apellido:'',
      telef:'',
      direccion:'',
      estado:1
    }
    console.log("El cliente fue agregado correctamente")
  })}else {
    this._service.actualizarCliente(this.id, this.clientes).then(()=>{
      console.log("El cliente fue editado correctamente")
     
    })
   }
  

  }
}
