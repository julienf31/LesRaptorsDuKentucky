import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activities-excerpt',
  templateUrl: './activities-excerpt.component.html',
  styleUrls: ['./activities-excerpt.component.scss'],
})

export class ActivitiesExcerptComponent implements OnInit {

  @Input() name: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
