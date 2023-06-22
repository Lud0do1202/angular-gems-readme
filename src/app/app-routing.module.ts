import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuXPageComponent } from './pages/components/menu/menu-x/menu-x-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageFoundComponent } from './pages/page-found/page-found.component';
import { InstallationPageComponent } from './pages/get-started/installation/installation-page.component';
import { DonnationPageComponent } from './pages/more/donnation/donnation-page.component';
import { RepositoryPageComponent } from './pages/more/repository/repository-page.component';

const routes: Routes = [
  // Default
  { path: '', redirectTo: '/get-started/installation', pathMatch: 'full' },

  // Page found
  {
    path: '',
    component: PageFoundComponent,
    children: [
      // Get Started
      { path: 'get-started/installation', component: InstallationPageComponent },

      // Component
      { path: 'components/menu/menu-x', component: MenuXPageComponent },

      // More
      { path: 'more/donnation', component: DonnationPageComponent },
      { path: 'more/repository', component: RepositoryPageComponent },
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
