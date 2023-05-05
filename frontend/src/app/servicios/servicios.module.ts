import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { MusicaComponent, NavComponent } from './pages';
import { ServiciosComponent } from './pages';

@NgModule({
  declarations: [NavComponent, MusicaComponent, ServiciosComponent],
  imports: [CommonModule, ServiciosRoutingModule],
})
export class ServiciosModule {}
