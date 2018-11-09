
import { Routes, RouterModule } from "@angular/router";
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { SuplidoresComponent } from './components/suplidores/suplidores.component';
import { ProductosComponent } from "./components/productos/productos.component";
import { VentasComponent } from './components/ventas/ventas.component';
import { ReportesComponent } from "./components/reportes/reportes.component";
import { NewClientComponent } from "./components/new-client/new-client.component";
import { NewSupComponent } from './components/new-sup/new-sup.component';


const RUTAS: Routes = [

    {path: 'usuario', component:UsuarioComponent},
    {path: 'newClient/:id', component:NewClientComponent},
    {path: 'newSup/:id', component:NewSupComponent},
    {path: 'clientes', component:ClientesComponent},
    {path: 'suplidores', component:SuplidoresComponent},
    {path: 'productos', component:ProductosComponent},
    {path: 'ventas', component:VentasComponent},
    {path: 'reportes', component:ReportesComponent},
    {path: '**', pathMatch:'full', redirectTo: 'usuario'}

];

export const APP_ROUTES = RouterModule.forRoot(RUTAS);

