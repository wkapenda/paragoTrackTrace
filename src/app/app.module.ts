import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WaybillSearchComponent } from './components/waybill-search/waybill-search.component';
import { FooterComponent } from './components/footer/footer.component';

import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { AnimateModule } from 'primeng/animate';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TrackTraceInfoComponent } from './components/track-trace-info/track-trace-info.component';
import { DeliveryProcessInfoComponent } from './components/delivery-process-info/delivery-process-info.component';
import { PackageLocationHistoryComponent } from './components/package-location-history/package-location-history.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WaybillSearchComponent,
    FooterComponent,
    TrackTraceInfoComponent,
    DeliveryProcessInfoComponent,
    PackageLocationHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    AnimateModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
