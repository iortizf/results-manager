import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from '../../core/header/header.component';
import { ResultsComponent } from './components/results/results.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  declarations:[LayoutComponent, ProfileComponent, ResultsComponent]
})
export class DashboardRoutingModule { }
