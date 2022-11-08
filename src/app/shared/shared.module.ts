import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { LayoutComponent } from '../componentes/layout/layout.component';
import { MenuLateralComponent } from '../componentes/menu-lateral/menu-lateral.component';
import { CrudUsuariosComponent } from '../componentes/crud-usuarios/crud-usuarios.component';
import { CrudVehiculosComponent } from '../componentes/crud-vehiculos/crud-vehiculos.component';
import { CrudMecanicosComponent } from '../componentes/crud-mecanicos/crud-mecanicos.component';
import { CrudJefeOperacionesComponent } from '../componentes/crud-jefe-operaciones/crud-jefe-operaciones.component';
import { CrudRepuestosComponent } from '../componentes/crud-repuestos/crud-repuestos.component';
import { CrudRevisionesComponent } from '../componentes/crud-revisiones/crud-revisiones.component';
import { InicioComponent } from '../vistas/inicio/inicio.component';
import { ClienteComponent } from '../vistas/cliente/cliente.component';
import { BarraNavegacionComponent } from '../componentes/barra-navegacion/barra-navegacion.component';
import { RegistroClientesComponent } from '../componentes/registro-clientes/registro-clientes.component';

// Modulos
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';


// Servicios
import { ClienteService } from '../servicios/cliente/cliente.service';


const MODULOS = [
  HttpClientModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatCardModule,
  MatNativeDateModule,
  MatTableModule,
  MatDialogModule
]

const COMPONENTES = [
  LayoutComponent,
  MenuLateralComponent,
  CrudUsuariosComponent,
  CrudVehiculosComponent,
  CrudMecanicosComponent,
  CrudJefeOperacionesComponent,
  CrudRepuestosComponent,
  CrudRevisionesComponent,
  InicioComponent,
  ClienteComponent,
  BarraNavegacionComponent,
  RegistroClientesComponent
]

@NgModule({
  declarations: [
    COMPONENTES
  ],
  imports: [
    CommonModule,
    MODULOS
  ],
  exports: [
    MODULOS,
    COMPONENTES
  ],
  providers: [ClienteService]
})
export class SharedModule { }
