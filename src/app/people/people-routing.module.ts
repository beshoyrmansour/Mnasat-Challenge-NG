import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PeopleListComponent } from "./people-list/people-list.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";

const routes: Routes = [
  { path: "", component: PeopleListComponent },
  { path: ":id", component: PersonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
