import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryProcessInfoComponent } from './delivery-process-info.component';

describe('DeliveryProcessInfoComponent', () => {
  let component: DeliveryProcessInfoComponent;
  let fixture: ComponentFixture<DeliveryProcessInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryProcessInfoComponent]
    });
    fixture = TestBed.createComponent(DeliveryProcessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
