import { Component } from '@angular/core';
import { MenuXConfig } from '@lud0do1202/angular-gems/lib/components/menu/menu-x/menu-x-config';

@Component({
  selector: 'app-menu-x',
  templateUrl: './menu-x.component.html',
  styleUrls: ['./menu-x.component.scss'],
})
export class MenuXComponent {
  // Title
  title: string = 'Menu X';
  description: string = 'A horizontal menu with some animation';

  // Import
  import: string = "import { MenuXModule } from '@lud0do1202/angular-gems';";

  // No config
  noConfigLoaded: number = 0;
  noConfigValue: string = 'html';
  noConfigHtml: string = `
    <gems-menu-x (linkClicked)="loaded = $event"></gems-menu-x>

    <div style="text-align: center">
      <p *ngIf="loaded === 0">Component 0 loaded</p>
      <p *ngIf="loaded === 1">Component 1 loaded</p>
      <p *ngIf="loaded === 2">Component 2 loaded</p>
    </div>
  `;
  noConfigTypescript: string = `
    export class MenuXComponent {
      loaded: number = 0;
    }
  `;

  // Links
  linksLoaded: number = 0;
  linksConfig: MenuXConfig = {
    links: [{ label: 'Members' }, { label: 'Clients' }, { label: 'Stats' }, { label: 'Settings' }],
  };
  linksValue: string = 'html';
  linksHtml: string = `
    <gems-menu-x [config]="configLinks" (linkClicked)="loaded = $event"></gems-menu-x>

    <div style="text-align: center">
      <p *ngIf="loaded === 0">Component Members loaded</p>
      <p *ngIf="loaded === 1">Component Clients loaded</p>
      <p *ngIf="loaded === 2">Component Stats loaded</p>
      <p *ngIf="loaded === 3">Component Settings loaded</p>
    </div>
  `;
  linksTypescript: string = `
    import { MenuXConfig } from '@lud0do1202/angular-gems/lib/components/menu/menu-x/menu-x-config';

    export class MenuXComponent {
        loaded: number = 0;
        
        configLinks: MenuXConfig = {
          links: [{ label: 'Members' }, { label: 'Clients' }, { label: 'Stats' }, { label: 'Settings' }],
        };
      }
  `;

  // Default active
  defaultActiveLoaded: number = 3;
  defaultActiveConfig: MenuXConfig = {
    links: [{ label: 'Members' }, { label: 'Clients' }, { label: 'Stats' }, { label: 'Settings' }],
    activeLink: 3,
  };
  defaultActiveValue: string = 'html';
  defaultActiveHtml: string = `
    <gems-menu-x [config]="config" (linkClicked)="loaded = $event"></gems-menu-x>

    <div style="text-align: center">
      <p *ngIf="loaded === 0">Component Members loaded</p>
      <p *ngIf="loaded === 1">Component Clients loaded</p>
      <p *ngIf="loaded === 2">Component Stats loaded</p>
      <p *ngIf="loaded === 3">Component Settings loaded</p>
    </div>
  `;
  defaultActiveTypescript: string = `
    import { MenuXConfig } from '@lud0do1202/angular-gems/lib/components/menu/menu-x/menu-x-config';

    export class MenuXComponent {
        loaded: number = 3;
        
        config: MenuXConfig = {
          links: [{ label: 'Members' }, { label: 'Clients' }, { label: 'Stats' }, { label: 'Settings' }],
          activeLink: 3, // MUST BE THE SAME AS this.loaded
        };
      }
  `;

  // Style
  styleLoaded: number = 0;
  styleConfig: MenuXConfig = {
    links: [{ label: 'Members' }, { label: 'Clients' }, { label: 'Stats' }, { label: 'Settings' }],
    style: {
      fontSize: '1rem',
      bgColor: 'lightblue',
      fontColor: 'red',
      activeBgColor: 'black',
      activeFontColor: 'yellow',
      border: '2px dashed green',
      borderRadius: '10px',
      paddingY: '3px',
      transition: '2s',
    },
  };
  styleValue: string = 'html';
  styleHtml: string = `
    <gems-menu-x [config]="config" (linkClicked)="loaded = $event"></gems-menu-x>

    <div style="text-align: center">
      <p *ngIf="loaded === 0">Component Members loaded</p>
      <p *ngIf="loaded === 1">Component Clients loaded</p>
      <p *ngIf="loaded === 2">Component Stats loaded</p>
      <p *ngIf="loaded === 3">Component Settings loaded</p>
    </div>
  `;
  styleTypescript: string = `
    import { MenuXConfig } from '@lud0do1202/angular-gems/lib/components/menu/menu-x/menu-x-config';

    export class MenuXComponent {
      loaded: number = 0;

      config: MenuXConfig = {
        links: [{ label: 'Members' }, { label: 'Clients' }, { label: 'Stats' }, { label: 'Settings' }],
        style: {
          fontSize: '1rem', // Font size
          bgColor: 'lightblue', // Background color
          fontColor: 'red', // Font color of the not actif links
          activeBgColor: 'black', // Background color of the electron link
          activeFontColor: 'yellow', // Font color of the active link
          border: '2px dashed green', // Border
          borderRadius: '10px', // Borber radius
          paddingY: '3px', // Verticale blank space of the links
          transition: '2s', // Transition when clicking on a new link
        },
      };
  `;

  // Style Links
  styleLinksLoaded: number = 0;
  styleLinksConfig: MenuXConfig = {
    links: [
      { label: 'Members', style: { activeBgColor: 'lightgreen' } },
      { label: 'Clients' },
      { label: 'Stats' },
      { label: 'Settings', style: { activeBgColor: 'orange', activeFontColor: 'yellow' } },
    ],
    style: {
      fontSize: '1.5rem',
      paddingY: '10px',
    },
  };
  styleLinksValue: string = 'html';
  styleLinksHtml: string = `
    <gems-menu-x [config]="config" (linkClicked)="loaded = $event"></gems-menu-x>

    <div style="text-align: center">
      <p *ngIf="loaded === 0">Component Members loaded</p>
      <p *ngIf="loaded === 1">Component Clients loaded</p>
      <p *ngIf="loaded === 2">Component Stats loaded</p>
      <p *ngIf="loaded === 3">Component Settings loaded</p>
    </div>
  `;
  styleLinksTypescript: string = `
    import { MenuXConfig } from '@lud0do1202/angular-gems/lib/components/menu/menu-x/menu-x-config';

    export class MenuXComponent {
      loaded: number = 0;

      config: MenuXConfig = {
        links: [
          { label: 'Members', style: { activeBgColor: 'lightgreen' } }, // Default active font color
          { label: 'Clients' }, // Default style
          { label: 'Stats' }, // Default style
          { label: 'Settings', style: { activeBgColor: 'orange', activeFontColor: 'yellow' } }, 
        ],
        style: {
          fontSize: '1.5rem',
          paddingY: '10px',
        },
      };
  `;
}
