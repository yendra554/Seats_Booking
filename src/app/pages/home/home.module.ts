import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ]
})
export class HomeModule { }
