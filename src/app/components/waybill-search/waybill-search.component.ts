import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TrackTraceService } from 'src/app/services/track-trace.service';
import { PackageHistoryResponse } from 'src/app/interfaces/track-trace';

interface FormData {
  waybill: string;
}

@Component({
  selector: 'app-waybill-search',
  templateUrl: './waybill-search.component.html',
  styleUrls: ['./waybill-search.component.scss'],
})
export class WaybillSearchComponent {
  packageHistory: PackageHistoryResponse[] = [];
  value: string | undefined;
  loading: boolean = false;
  label: string = 'Track';
  model: FormData = { waybill: '' };
  waybillValid: boolean = true;
  waybillTouched: boolean = false;

  constructor(
    private trackTraceService: TrackTraceService,
    private messageService: MessageService
  ) {}

  isButtonDisabled(): boolean {
    return !this.model.waybill || this.model.waybill.length !== 10;
  }

  validateWaybill(): void {
    this.waybillValid =
      this.model.waybill.length === 10 || this.model.waybill.length === 0;
  }

  async onSubmit(): Promise<void> {
    this.loading = true;

    if (this.isWaybillValid()) {
      // Simulate a 3-second waiting period
      await this.load();
      this.trackTraceService.getPackageHistory(this.model.waybill).subscribe({
        next: (response) => {
          this.packageHistory = response;

          if (this.packageHistory.length === 0) {
            this.messageService.add({
              severity: 'info',
              summary: 'Info',
              detail: 'No package history found.',
            });
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching package history:', error);

          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to fetch package history. Please try again.',
          });
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }

  submitForm(): void {
    this.packageHistory = [];
    this.validateWaybill();
    this.waybillTouched = true;
    this.onSubmit();
  }

  isWaybillValid(): boolean {
    return this.waybillValid;
  }

  async load(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }
}
