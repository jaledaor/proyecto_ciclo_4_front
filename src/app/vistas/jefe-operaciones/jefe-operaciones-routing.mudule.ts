import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudMecanicosComponent } from "src/app/componentes/crud-mecanicos/crud-mecanicos.component";
import { CrudRepuestosComponent } from "src/app/componentes/crud-repuestos/crud-repuestos.component";
import { CrudRevisionesComponent } from "src/app/componentes/crud-revisiones/crud-revisiones.component";
import { CrudUsuariosComponent } from "src/app/componentes/crud-usuarios/crud-usuarios.component";
import { CrudVehiculosComponent } from "src/app/componentes/crud-vehiculos/crud-vehiculos.component";
import { JefeOperacionesComponent } from "./jefe-operaciones.component";


const routes: Routes = [
    { path: ':jefeOperacionesId', component: JefeOperacionesComponent,
        children: [
            { path: '', redirectTo: 'clientes', pathMatch: 'full' },
            { path: 'clientes', component: CrudUsuariosComponent },
            { path: 'vehiculos', component: CrudVehiculosComponent },
            { path: 'mecanicos', component: CrudMecanicosComponent },
            { path: 'repuestos', component: CrudRepuestosComponent },
            { path: 'revisiones', component: CrudRevisionesComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JefeOperacionesRoutingModule { }