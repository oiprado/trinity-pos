import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardDemoComponent} from './pages/dashboard/dashboarddemo.component';
import { PosComponent } from './pages/invoicing/pos/pos.component';


export const routes: Routes = [
    { path: '', component: DashboardDemoComponent},
    { path: 'invoicing/pos', component: PosComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
