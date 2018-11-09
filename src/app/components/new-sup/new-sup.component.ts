import { Component, OnInit } from '@angular/core';
import { Suplidor } from '../../Inerfaces/supli.interface';
import { SupService } from '../../services/sup.service';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private _service: SupService,
              private ruta: Router,
              private rout: ActivatedRoute
              ) { 
                this.rout.params.subscribe(
                  parametros=>
                  {
                    this.id = parametros ['id'];
                    if(this.id !== "nuevo") 
                    
                    {this._service.getSup(this.id)
                    .subscribe ((suplidor: any) => this.supli = suplidor);
                   }})
                              }

  ngOnInit() {
  }

  guardar(){
        this._service.nuevoSup(this.supli).then(()=>{
            this.supli={
              nombre:'',
              dir:"",
              rep:'',
              telef:'',
              estado:1
            }
            console.log('Se agrego correctamente')
        })
       
                  
    }


   

}



