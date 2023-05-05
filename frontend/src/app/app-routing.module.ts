import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, NosotrosComponent } from './home';

const routes: Routes = [{ path: '**', redirectTo: '' }];


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  {
    path: 'github',
    component: RepoListComponent,
    children: [{ path: 'list', component: RepoListComponent }],
  },
  { path: 'pricing', component: PricingComponent },
  { path: '**', redirectTo: '' }, // this will redirect any undefined routes to HomeComponent
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
