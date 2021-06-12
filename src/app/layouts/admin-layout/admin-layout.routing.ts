import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AgencesComponent } from '../../pages/agences/agences.component';
import { AgentsComponent } from '../../pages/agents/agents.component';
import { ClientsComponent } from '../../pages/clients/clients.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'agents',         component: AgentsComponent },
    { path: 'agence',          component: AgencesComponent },
    { path: 'clients',           component: ClientsComponent }
];
