import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { MatButtonModule, MatCardModule } from "@angular/material";
import { SharedModule } from '../shared/shared.module';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    ScrollDispatchModule,
    SharedModule
  ]
})
export class HomeModule {}
