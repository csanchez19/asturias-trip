import { Routes } from '@angular/router';
import { ForestPageComponent } from './features/forest/forest-page/forest-page';

export const routes: Routes = [
  { path: '', component: ForestPageComponent },
  { path: 'dia/:dayNumber', component: ForestPageComponent },
];
