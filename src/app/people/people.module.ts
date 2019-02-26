import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleListComponent } from "./people-list/people-list.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PeopleListComponent, PersonDetailsComponent],
  imports: [CommonModule, PeopleRoutingModule, MatCardModule, MatButtonModule, SharedModule]
})
export class PeopleModule { }
