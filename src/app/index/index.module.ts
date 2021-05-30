import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PersonalTableComponent } from './personal-table/personal-table.component';
import { InformesTableComponent } from './informes-table/informes-table.component';
import { EvaluacionTableComponent } from './evaluacion-table/evaluacion-table.component';
import { NominaTableComponent } from './nomina-table/nomina-table.component';
import { ConfigTableComponent } from './config-table/config-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    PersonalTableComponent,
    InformesTableComponent,
    EvaluacionTableComponent,
    NominaTableComponent,
    ConfigTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class IndexModule { }
