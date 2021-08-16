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
import { RegisterComponent } from './forms/register/register.component';
import { MainComponent } from './index/main/main.component'
import { ShopComponent } from './forms/shop/shop.component';

import { PersonalTableComponent } from './index/personal-table/personal-table.component';
import { NominaTableComponent } from './index/nomina-table/nomina-table.component'
import { ConfigTableComponent } from './index/config-table/config-table.component';
import { InformesTableComponent } from './index/informes-table/informes-table.component';
import { EvaluacionTableComponent } from './index/evaluacion-table/evaluacion-table.component'
import { RouterTestingModule } from '@angular/router/testing';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'inscripciones', component: InscripcionesComponent },
  { path: 'consulta', component: ConsultavigenciaComponent },
  { path: 'conocenos', component: SomosComponent },
  { path: "register", component: RegisterComponent },
  { path: "shop", component: ShopComponent },
  {
    path: "main", component: MainComponent, children: [
      { path: "personal", component: PersonalTableComponent },
      { path: "nomina", component: NominaTableComponent },
      { path: "config", component: ConfigTableComponent },
      { path: "informes", component: InformesTableComponent },
      { path: "evaluaciones", component: EvaluacionTableComponent }
    ]
  },
];

@NgModule({
  imports: [RouterTestingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, MatSelectModule, BrowserAnimationsModule]
})
export class AppRoutingModule { }
