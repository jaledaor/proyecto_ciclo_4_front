import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudUsuariosComponent } from './componentes/crud-usuarios/crud-usuarios.component';
import { CrudVehiculosComponent } from './componentes/crud-vehiculos/crud-vehiculos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { CrudMecanicosComponent } from './componentes/crud-mecanicos/crud-mecanicos.component';
import { CrudJefeOperacionesComponent } from './componentes/crud-jefe-operaciones/crud-jefe-operaciones.component';
import { CrudRepuestosComponent } from './componentes/crud-repuestos/crud-repuestos.component';
import { CrudRevisionesComponent } from './componentes/crud-revisiones/crud-revisiones.component';
import { UsuariosService } from './servicios/usuarios.service';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { LayoutComponent } from './componentes/layout/layout.component';
import { SideMenuComponent } from './componentes/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudUsuariosComponent,
    CrudVehiculosComponent,
    CrudMecanicosComponent,
    CrudJefeOperacionesComponent,
    CrudRepuestosComponent,
    CrudRevisionesComponent,
    InicioComponent,
    LayoutComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }