import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListPlaceholderComponent } from "./list-placeholder/list-placeholder.component";

@NgModule({
  declarations: [ListPlaceholderComponent],
  imports: [CommonModule],
  exports: [ListPlaceholderComponent]
})
export class SharedModule {}
