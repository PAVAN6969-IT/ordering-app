import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-component/admin-panel.component';

const routes: Routes = [
  { path: '', component: AdminPanelComponent, children: [
    { path: '', redirectTo: 'table' },
    { path: 'table', loadChildren: () => import('./tables').then(m => m.TablesModule)},
    { path: 'devices', loadChildren: () => import('./devices').then(m => m.DevicesModule)},
    { path: 'monitor', loadChildren: () => import('./monitoring').then(m => m.MonitoringModule)},
    { path: 'about', loadChildren: () => import('./about').then(m => m.AboutModule)}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
