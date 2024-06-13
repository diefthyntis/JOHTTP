import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityComponent } from './activity/activity.component';

export const routes: Routes = [
    { path: '',component:DashboardComponent},
    { path: 'rlChronology/:id',component:ActivityComponent}

];
