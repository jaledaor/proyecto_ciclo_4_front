import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudUsuariosComponent } from "src/app/componentes/crud-usuarios/crud-usuarios.component";
import { JefeOperacionesComponent } from "./jefe-operaciones.component";


const routes: Routes = [
    { path: ':jefeOperacionesId', component: JefeOperacionesComponent,
        children: [
            { path: '', redirectTo: 'clientes', pathMatch: 'full' },
            { path: 'clientes', component: CrudUsuariosComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JefeOperacionesRoutingModule { }