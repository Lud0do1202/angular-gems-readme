import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Get Started',
        icon: 'pi pi-fw pi-home',
        items: [{ label: 'Installation', routerLink: '/get-started/installation' }],
      },
      {
        label: 'Components',
        icon: 'pi pi-fw pi-compass',
        items: [
          {
            label: 'Menu',
            styleClass: 'subpanel',
            items: [
              {
                label: 'Menu X',
                routerLink: '/components/menu/menu-x',
              },
              {
                label: 'Menu y icons',
                routerLink: '/components/menu/menu-y-icons',
              },
            ],
          },
        ],
      },
      {
        label: 'More',
        icon: 'pi pi-fw pi-ellipsis-h',
        items: [
          {
            label: 'Donnation',
            icon: 'pi pi-fw pi-paypal',
          },
          {
            label: 'Github',
            icon: 'pi pi-fw pi-github',
          },
        ],
      },
    ];
  }
}
