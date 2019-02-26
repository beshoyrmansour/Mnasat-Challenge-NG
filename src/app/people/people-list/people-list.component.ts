import { Component, OnInit, HostListener } from '@angular/core';
import { PeopleService } from "../../_services/people.service";
import { Person } from "../../_models/person.model";
import { API_ROUTES } from "../../_helpers/api.routes";
import { Router } from '@angular/router';
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  constructor(private peopleService: PeopleService, private router: Router) { }
  peoplePageNumber = 1;
  imgPath = "";
  peopleList: Array<Person>;
  finished: Boolean;
  ngOnInit() {
    this.peopleList = new Array<Person>();
    this.getpeople();
  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // Load Your Data Here
      this.getpeople(this.peoplePageNumber + 1)
      // alert('onScroll Fired')
    }
  }

  getPersonProfilePhoto(profilePath) {
    return API_ROUTES.COMMON.IMAGE_PATH + profilePath;
  }
  goToPersonProfile(personId) {
    this.router.navigate(['/people/',personId]);
  }

  getpeople(PageNumber?) {
    if (PageNumber) this.peoplePageNumber = PageNumber;
    this.finished = false;
    this.peopleService
      .getPopularPeople(this.peoplePageNumber)
      .subscribe(peopleList => {
        peopleList.forEach((person: Person) => {
          this.peopleList.push(person);
        });
        this.finished = true
      });
  }
}
