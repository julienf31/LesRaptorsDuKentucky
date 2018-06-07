import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesExcerptComponent } from './activities-excerpt.component';

describe('ActivitiesExcerptComponent', () => {
  let component: ActivitiesExcerptComponent;
  let fixture: ComponentFixture<ActivitiesExcerptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesExcerptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesExcerptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
