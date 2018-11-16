import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { SuplidoresComponent } from './components/suplidores/suplidores.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { APP_ROUTES } from './app.routes';
import { NewClientComponent } from './components/clientes/new-client.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FactService } from './services/fact.service';
import { HttpClientModule } from "@angular/common/http";
import { NewSupComponent } from './components/suplidores/new-sup.component';
import { LoginComponent } from './components/usuario/login.component';
import { LogService } from './services/log.service';
import { SupService } from './services/sup.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ClientesComponent,
    SuplidoresComponent,
    ProductosComponent,
    VentasComponent,
    ReportesComponent,
    NavbarComponent,
    NewClientComponent,
    NewSupComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    FactService,
    SupService,
    LogService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
