import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list-placeholder",
  templateUrl: "./list-placeholder.component.html",
  styleUrls: ["./list-placeholder.component.scss"]
})
export class ListPlaceholderComponent implements OnInit {
  @Input() length: number = 1;
  placeholderList = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < this.length; i++) {
      this.placeholderList.push(i);
    }
  }
}
