import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageLocationHistoryComponent } from './package-location-history.component';

describe('PackageLocationHistoryComponent', () => {
  let component: PackageLocationHistoryComponent;
  let fixture: ComponentFixture<PackageLocationHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageLocationHistoryComponent]
    });
    fixture = TestBed.createComponent(PackageLocationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
