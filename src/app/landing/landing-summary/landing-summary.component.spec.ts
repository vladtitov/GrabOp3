import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSummaryComponent } from './landing-summary.component';

describe('LandingSummaryComponent', () => {
  let component: LandingSummaryComponent;
  let fixture: ComponentFixture<LandingSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
