import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistics-excerpt',
  templateUrl: './statistics-excerpt.component.html',
  styleUrls: ['./statistics-excerpt.component.scss']
})
export class StatisticsExcerptComponent implements OnInit {

  @Input() name: string;
  @Input() value: string;
  @Input() image: string;
  

  constructor() { }

  ngOnInit() {
  }

}
