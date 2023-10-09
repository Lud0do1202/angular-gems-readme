import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  items!: MenuItem[];

  constructor(private router: Router) {}

  expanded(urls: string[]): any {
    const expanded = urls.some((url) => this.router.url.includes(url));
    return { expanded };
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Get Started',
        icon: 'pi pi-fw pi-home',
        ...this.expanded(['/get-started/installation']),
        items: [{ label: 'Installation', routerLink: '/get-started/installation' }],
      },
      {
        label: 'Components',
        icon: 'pi pi-fw pi-compass',
        ...this.expanded(['/components/menu/menu-x', 'components/menu/menu-y-icons']),
        items: [
          {
            label: 'Menu',
            styleClass: 'subpanel',
            ...this.expanded(['/components/menu/menu-x', 'components/menu/menu-y-icons']),
            items: [
              {
                label: 'Menu X',
                routerLink: '/components/menu/menu-x',
              },
              {
                label: 'Menu Y Icons',
                routerLink: 'components/menu/menu-y-icons',
              },
            ],
          },
        ],
      },
      {
        label: 'More',
        icon: 'pi pi-fw pi-ellipsis-h',
        ...this.expanded(['/more/donation', '/more/repository']),
        items: [
          {
            label: 'Donation',
            icon: 'pi pi-fw pi-paypal',
            routerLink: '/more/donation',
          },
          {
            label: 'Repository',
            icon: 'pi pi-fw pi-book',
            routerLink: '/more/repository',
          },
        ],
      },
    ];
  }
}
