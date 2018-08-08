import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from '../../core/header/header.component';
import { ResultsComponent } from './components/results/results.component';
import { SharedModule } from '../../shared/shared.module';
import {
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatProgressBarModule} from '@angular/material';
const routes: Routes = [
  { path: '', component: LayoutComponent }
];

@NgModule({
  imports: [MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  declarations:[LayoutComponent, ProfileComponent, ResultsComponent]
})
export class DashboardRoutingModule { }
