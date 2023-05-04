import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { AboutUsComponent, ContactUsComponent, HomeComponent } from './pages';

import { SharedModule } from '../shared';

@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent, HomeComponent],
  imports: [HomeRoutingModule, SharedModule],
  providers: [],
})
export class HomeModule {}
