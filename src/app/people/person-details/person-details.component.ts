import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/_services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  constructor(private peopleService: PeopleService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('activeRoute',this.activeRoute.snapshot.params.id);
    
    this.peopleService.getPersonDetails(this.activeRoute.snapshot.params.id).subscribe(res=>{
      console.log('getPersonDetails', res);
    })
  }

}
