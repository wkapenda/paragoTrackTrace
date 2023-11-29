import { Component, Input } from '@angular/core';
import { PackageHistoryResponse } from 'src/app/interfaces/track-trace';

@Component({
  selector: 'app-package-location-history',
  templateUrl: './package-location-history.component.html',
  styleUrls: ['./package-location-history.component.scss'],
})
export class PackageLocationHistoryComponent {
  @Input() packageHistory: PackageHistoryResponse[] = [];
}
