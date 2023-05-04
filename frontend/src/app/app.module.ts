import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home';
import { PricingModule } from './pricing/pricing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AdminModule,
    AppRoutingModule,
    PricingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
