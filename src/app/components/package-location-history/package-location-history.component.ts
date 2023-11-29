import { Component } from '@angular/core';

interface Product {
  status: string;
  dateTime: string;
  location: string;
}

@Component({
  selector: 'app-package-location-history',
  templateUrl: './package-location-history.component.html',
  styleUrls: ['./package-location-history.component.scss'],
})
export class PackageLocationHistoryComponent {
  products: Product[] = [
    {
      status: 'Collected',
      dateTime: '2023-11-10T09:00:00Z',
      location: "Sender's Address",
    },
    {
      status: 'In Transit',
      dateTime: '2023-11-10T12:30:00Z',
      location: 'Local Sorting Facility',
    },
    {
      status: 'Arrived at Hub',
      dateTime: '2023-11-11T08:45:00Z',
      location: 'Regional Hub',
    },
    {
      status: 'Departed from Hub',
      dateTime: '2023-11-11T11:20:00Z',
      location: 'Regional Hub',
    },
  ];
}
