import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuXPageComponent } from './pages/components/menu/menu-x/menu-x-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageFoundComponent } from './pages/page-found/page-found.component';
import { InstallationPageComponent } from './pages/get-started/installation/installation-page.component';
import { DonationPageComponent } from './pages/more/donation/donation-page.component';
import { RepositoryPageComponent } from './pages/more/repository/repository-page.component';
import { MenuYIconsPageComponent } from './pages/components/menu/menu-y-icons/menu-y-icons-page.component';
import { SearchBarPageComponent } from './pages/components/search/search-bar/search-bar-page.component';

const routes: Routes = [
  // Default
  { path: '', redirectTo: '/get-started/installation', pathMatch: 'full' },

  // Page found
  {
    path: '',
    component: PageFoundComponent,
    children: [
      // Get Started
      {
        path: 'get-started/installation',
        component: InstallationPageComponent,
      },

      // Component
      { path: 'components/menu/menu-x', component: MenuXPageComponent },
      {
        path: 'components/menu/menu-y-icons',
        component: MenuYIconsPageComponent,
      },
      {
        path: 'components/search/search-bar',
        component: SearchBarPageComponent,
      },

      // More
      { path: 'more/donation', component: DonationPageComponent },
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
