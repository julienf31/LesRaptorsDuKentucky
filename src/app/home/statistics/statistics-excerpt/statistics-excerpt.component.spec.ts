import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsExcerptComponent } from './statistics-excerpt.component';

describe('StatisticsExcerptComponent', () => {
  let component: StatisticsExcerptComponent;
  let fixture: ComponentFixture<StatisticsExcerptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsExcerptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsExcerptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
