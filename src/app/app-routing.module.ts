import { CrudVehiculosComponent } from './componentes/crud-vehiculos/crud-vehiculos.component';
import { CrudUsuariosComponent } from './componentes/crud-usuarios/crud-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudMecanicosComponent } from './componentes/crud-mecanicos/crud-mecanicos.component';
import { CrudRepuestosComponent } from './componentes/crud-repuestos/crud-repuestos.component';
import { CrudRevisionesComponent } from './componentes/crud-revisiones/crud-revisiones.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { ClienteComponent } from './vistas/cliente/cliente.component';
import { RegistroClientesComponent } from './componentes/registro-clientes/registro-clientes.component';
import { MecanicoComponent } from './vistas/mecanico/mecanico.component';


const routes: Routes = [
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {
    path: 'jefe-operaciones',
    loadChildren: () =>
        import('./vistas/jefe-operaciones/jefe-operaciones.module').then(
            (m) => m.JefeOperacionesModule
        ),
  },
  // { path: 'jefe-operaciones', component: JefeOperacionesModule },
  {path:'inicio', component: InicioComponent},
  {path:'usuarios', component: CrudUsuariosComponent},
  {path:'vehiculos', component: CrudVehiculosComponent},
  {path:'mecanicos', component: CrudMecanicosComponent},
  {path:'revisiones', component: CrudRevisionesComponent},
  {path:'repuestos', component: CrudRepuestosComponent},
  {path: 'cliente/:clienteId', component: ClienteComponent},
  {path: 'mecanico/:mecanicoId', component: MecanicoComponent},
  {path: 'registro-cliente', component: RegistroClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
