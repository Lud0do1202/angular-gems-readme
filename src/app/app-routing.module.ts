import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuXComponent } from './pages/components/menu/menu-x/menu-x.component';
import { MenuYIconsComponent } from './pages/components/menu/menu-y-icons/menu-y-icons.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageFoundComponent } from './pages/page-found/page-found.component';
import { InstallationComponent } from './pages/get-started/installation/installation.component';

const routes: Routes = [
  // Default
  { path: '', redirectTo: '/get-started/installation', pathMatch: 'full' },

  // Page found
  {
    path: '',
    component: PageFoundComponent,
    children: [
      // Get Started
      { path: 'get-started/installation', component: InstallationComponent },

      // Component
      { path: 'components/menu/menu-x', component: MenuXComponent },
      { path: 'components/menu/menu-y-icons', component: MenuYIconsComponent },
    ],
  },

  // Not found
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
