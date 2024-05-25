import { Routes } from '@angular/router';
import { WeddingComponent } from './wedding/wedding.component';

export const routes: Routes = [
  {path: '', redirectTo: () => {
    return '/wedding'
    }, pathMatch: 'full'},
  {path: 'wedding', component: WeddingComponent, title: 'Andi ❤ Viktor'},
];
