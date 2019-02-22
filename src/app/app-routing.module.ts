import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: "./home/home.module#HomeModule"
  },
  { path: "people", loadChildren: "./people/people.module#PeopleModule" },
  { path: "about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
