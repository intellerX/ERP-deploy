import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './forms/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './forms/login/login.component';
import { AdminComponent } from './forms/admin/admin.component';
import { InscripcionesComponent } from './forms/inscripciones/inscripciones.component';
import { ConsultavigenciaComponent } from './forms/consultavigencia/consultavigencia.component';
import { SomosComponent } from './forms/somos/somos.component';
import { AnimationComponent } from './components/animation/animation.component';
import { RegisterComponent } from './forms/register/register.component';
import { TablePersonalComponent } from './components/table-personal/table-personal.component';
import { IndexModule } from './index/index.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    InscripcionesComponent,
    ConsultavigenciaComponent,
    SomosComponent,
    AnimationComponent,
    RegisterComponent,
    TablePersonalComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
