import { CrudVehiculosComponent } from './componentes/crud-vehiculos/crud-vehiculos.component';
import { CrudUsuariosComponent } from './componentes/crud-usuarios/crud-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudMecanicosComponent } from './componentes/crud-mecanicos/crud-mecanicos.component';
import { CrudJefeOperacionesComponent } from './componentes/crud-jefe-operaciones/crud-jefe-operaciones.component';
import { CrudRepuestosComponent } from './componentes/crud-repuestos/crud-repuestos.component';
import { CrudRevisionesComponent } from './componentes/crud-revisiones/crud-revisiones.component';
import { InicioComponent } from './vistas/inicio/inicio.component';

const routes: Routes = [
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
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
