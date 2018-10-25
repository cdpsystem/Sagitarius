import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BodyComponent} from './components/body/body.component';

const appRoutes: Routes = [
    {path: '', component: BodyComponent},
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
