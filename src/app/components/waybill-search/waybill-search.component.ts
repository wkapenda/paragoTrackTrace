// waybill-search.component.ts
import { Component } from '@angular/core';

interface FormData {
  waybill: string;
}

@Component({
  selector: 'app-waybill-search',
  templateUrl: './waybill-search.component.html',
  styleUrls: ['./waybill-search.component.scss'],
})
export class WaybillSearchComponent {
  value: string | undefined;
  loading: boolean = false;
  label: string = 'Track';
  model: FormData = { waybill: '' };
  waybillValid: boolean = true;
  waybillTouched: boolean = false;

  isButtonDisabled(): boolean {
    return !this.model.waybill || this.model.waybill.length !== 10;
  }

  validateWaybill(): void {
    this.waybillValid =
      this.model.waybill.length === 10 || this.model.waybill.length === 0;
  }

  onSubmit(): void {
    if (this.isWaybillValid()) {
      console.log('Form submitted:', this.model);
    }
  }

  submitForm(): void {
    this.load();
    this.validateWaybill();
    this.waybillTouched = true;
    this.onSubmit();

    console.log('Form submitted:', this.model.waybill);
  }

  load(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  isWaybillValid(): boolean {
    return this.waybillValid;
  }
}
