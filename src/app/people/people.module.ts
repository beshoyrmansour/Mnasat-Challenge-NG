import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleListComponent } from "./people-list/people-list.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [PeopleListComponent, PersonDetailsComponent],
  imports: [CommonModule, PeopleRoutingModule, MatCardModule, MatButtonModule]
})
export class PeopleModule {}
