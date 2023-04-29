import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent, NosotrosComponent, ContactoComponent } from './pages';

import { SharedModule } from '../shared';

@NgModule({
  imports: [BrowserModule, HomeRoutingModule, SharedModule],
  providers: [],
  declarations: [HomeComponent, NosotrosComponent, ContactoComponent],
})
export class HomeModule {}
