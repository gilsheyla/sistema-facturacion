import { Component, OnInit } from '@angular/core';
import { SupService } from '../../services/sup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suplidores',
  templateUrl: './suplidores.component.html',
  styles: []
})
export class SuplidoresComponent implements OnInit {

  
    supli:any[] = [];

  constructor(public _service:SupService,
              private ruta: Router) { 
   }



   ngOnInit() {
     this._service.getListS()
   }
  
Del(key$: string){
  this._service.deleteSup(key$)
  .subscribe(data =>{
    if (data){
      console.error(data)
    }else{
      delete this.supli[key$]
    }
  })
}


  


  
}
