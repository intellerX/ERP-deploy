import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PersonalTableComponent } from './personal-table/personal-table.component';



@NgModule({
  declarations: [
    MainComponent,
    PersonalTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
