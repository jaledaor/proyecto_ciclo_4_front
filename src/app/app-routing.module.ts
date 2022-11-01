import { CrudVehiculosComponent } from './crud-vehiculos/crud-vehiculos.component';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudMecanicosComponent } from './crud-mecanicos/crud-mecanicos.component';
import { CrudJefeOperacionesComponent } from './crud-jefe-operaciones/crud-jefe-operaciones.component';
import { CrudRepuestosComponent } from './crud-repuestos/crud-repuestos.component';
import { CrudRevisionesComponent } from './crud-revisiones/crud-revisiones.component';

const routes: Routes = [
  {path:'', component: CrudUsuariosComponent},
  {path:'usuarios', component: CrudUsuariosComponent},
  {path:'vehiculos', component: CrudVehiculosComponent},
  {path:'mecanicos', component: CrudMecanicosComponent},
  {path:'jefe-operaciones', component: CrudJefeOperacionesComponent},
  {path:'revisiones', component: CrudRevisionesComponent},
  {path:'repuestos', component: CrudRepuestosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
