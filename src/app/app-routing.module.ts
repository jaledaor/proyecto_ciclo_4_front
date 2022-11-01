import { CrudVehiculosComponent } from './crud-vehiculos/crud-vehiculos.component';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: CrudUsuariosComponent},
  {path:'usuarios', component: CrudUsuariosComponent},
  {path:'vehiculos', component: CrudVehiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
