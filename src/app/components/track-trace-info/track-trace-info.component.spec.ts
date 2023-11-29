import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTraceInfoComponent } from './track-trace-info.component';

describe('TrackTraceInfoComponent', () => {
  let component: TrackTraceInfoComponent;
  let fixture: ComponentFixture<TrackTraceInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackTraceInfoComponent]
    });
    fixture = TestBed.createComponent(TrackTraceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
