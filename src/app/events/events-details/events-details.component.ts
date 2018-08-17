import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { EventsService } from '../../providers/events.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

  public event: Event;
  faStar = faStar;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.eventsService.EventsById(params._id).subscribe((res: Event) => {
        this.event = res;
      });
    });
  }

}
