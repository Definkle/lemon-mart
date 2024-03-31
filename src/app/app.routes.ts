import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/components/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'manager',
    loadComponent: () =>
      import('./core/components/manager/manager.component').then(
        (m) => m.ManagerComponent
      ),
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./core/components/user/user.component').then(
        (m) => m.UserComponent
      ),
  },
  {
    path: 'pos',
    loadComponent: () =>
      import('./core/components/pos/pos.component').then((m) => m.PosComponent),
  },
];
