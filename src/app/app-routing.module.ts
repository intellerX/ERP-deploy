import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './forms/home/home.component';
import { LoginComponent } from './forms/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './forms/admin/admin.component';
import { InscripcionesComponent } from './forms/inscripciones/inscripciones.component';
import { ConsultavigenciaComponent } from './forms/consultavigencia/consultavigencia.component';
import { MatSelectModule } from '@angular/material/select';
import { SomosComponent } from './forms/somos/somos.component';
const routes: Routes = [
  { path: '',component: HomeComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'inscripciones', component: InscripcionesComponent},
  { path: 'consulta', component:ConsultavigenciaComponent},
  { path: 'conocenos', component:SomosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,MatSelectModule,BrowserAnimationsModule]
})
export class AppRoutingModule { }
