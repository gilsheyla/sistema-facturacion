import { Component, OnInit } from '@angular/core';
import { Suplidor } from '../../Inerfaces/supli.interface';
import { SupService } from '../../services/sup.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-sup',
  templateUrl: './new-sup.component.html',
  styleUrls: []
})
export class NewSupComponent implements OnInit {

 supli:Suplidor = {
  nombre:'',
  rep:'',
  telef:'',
  dir: '',
  estado:1
  }

id: string
titulo: string = "Registrar"
  constructor(private _service: SupService,
              private ruta: ActivatedRoute) { 
              }

  ngOnInit() {
    this.ruta.params.subscribe(res=>{
      console.log(res)
      this.id=res.id
      if(res.id != 'nuevo'){
        this.titulo = "Modificar"
        this._service.getSup(res.id).valueChanges().subscribe((res:Suplidor)=>{
          console.log(res);
          this.supli=res
        })

      }
  
    })
    
  }

  guardar(){
  
    if(this.id == 'nuevo'){
       this._service.nuevoSup(this.supli).then(()=>{
            this.supli={
              nombre:'',
              dir:'',
              rep:'',
              telef:'',
              estado:1
            }
            console.log('Se agrego correctamente')
        }) } else {
          
          this._service.updateSup(this.id, this.supli).then(()=>{
            console.log('Se actualizo bien')
          })
            
          
                }
            
              
}
}
      





