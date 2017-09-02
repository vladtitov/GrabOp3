import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAllianceComponent } from './landing-alliance.component';

describe('LandingAllianceComponent', () => {
  let component: LandingAllianceComponent;
  let fixture: ComponentFixture<LandingAllianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingAllianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAllianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
