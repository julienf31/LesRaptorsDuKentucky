import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('stats').valueChanges();
  }
  ngOnInit() {
  }

}
