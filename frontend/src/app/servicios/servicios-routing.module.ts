import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent, MusicaComponent, NavComponent } from './pages';

const routes: Routes = [
  {
    path: 'servicios',
    component: ServiciosComponent,
    children: [
      { path: 'musica', component: MusicaComponent },
      { path: 'visuales', component: NavComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosRoutingModule {}
