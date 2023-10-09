import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-y-icons-page',
  templateUrl: './menu-y-icons-page.component.html',
  styleUrls: ['./menu-y-icons-page.component.scss'],
})
export class MenuYIconsPageComponent {
  // Title
  title: string = 'Menu Y Icons';
  description: string = 'A vertical menu with a electron <li> to create the animation';

  // Import
  import: string = "import { MenuYIconsModule } from '@lud0do1202/angular-gems';";

  // Links
  links: string[] = ['pi pi-clock', 'pi pi-user', 'pi pi-calendar', 'pi pi-chart-line'];

  /* --------------------------------- Basic -------------------------------- */
  basicLoaded: number = 0;
  basicSelect: number = 0;
  basicHtml: string = `<gems-menu-x [links]="links" (onLinkClicked)="loaded = $event"></gems-menu-x>

<div style="text-align: center; margin-top: 1rem">
  <div *ngIf="loaded === 0">Component 'History' loaded</div>
  <div *ngIf="loaded === 1">Component 'User' loaded</div>
  <div *ngIf="loaded === 2">Component 'Calendar' loaded</div>
  <div *ngIf="loaded === 3">Component 'Chart' loaded</div>
</div>`;
  basicTypescript: string = `import { MenuYIconsModule } from '@lud0do1202/angular-gems';

export class DemoMenuXComponent {
  // Labels of the links
  links: string[] = ['History', 'User', 'Calendar', 'Chart'];

  // The component to load (must be 0 if a default active link is not set)
  loaded: number = 0;
}`;

  /* -------------------------------- Default ------------------------------- */
  defaultLoaded: number = 3;
  defaultSelect: number = 0;
  defaultHtml: string = `<gems-menu-y-icons [links]="links" (onLinkClicked)="loaded = $event"></gems-menu-y-icons>

<div style="text-align: center; margin-left: 1rem">
  <div *ngIf="loaded === 0">Component 'History' loaded</div>
  <div *ngIf="loaded === 1">Component 'User' loaded</div>
  <div *ngIf="loaded === 2">Component 'Calendar' loaded</div>
  <div *ngIf="loaded === 3">Component 'Chart' loaded</div>
</div>`;
  defaultTypescript: string = `import { MenuYIconsModule } from '@lud0do1202/angular-gems';
  
export class DemoMenuXComponent {
  // Labels of the links
  links: string[] = ['History', 'User', 'Calendar', 'Chart'];

  // Default component to load
  loaded: number = 3;
}`;

  /* --------------------------------- Custom --------------------------------- */
  customLoaded: number = 0;
  customId: string = 'custom-menu-y-icons';
  customSelect: number = 0;
  customHtml: string = `<gems-menu-y-icons [styleId]="'custom-menu-y-icons'" [links]="links" (onLinkClicked)="loaded = $event"></gems-menu-y-icons>

<div style="text-align: center; margin-left: 1rem">
  <div *ngIf="loaded === 0">Component 'History' loaded</div>
  <div *ngIf="loaded === 1">Component 'User' loaded</div>
  <div *ngIf="loaded === 2">Component 'Calendar' loaded</div>
  <div *ngIf="loaded === 3">Component 'Chart' loaded</div>
</div>
</div>`;
  customTypescript: string = `import { MenuYIconsModule } from '@lud0do1202/angular-gems';

export class DemoMenuXComponent {
  // Labels of the links
  links: string[] = ['History', 'User', 'Calendar', 'Chart'];

  // The component to load (must be 0 if a default active link is not set)
  loaded: number = 0;
}`;
  customScss: string = `// <nav> : menu-y-icons
:host ::ng-deep #custom-menu-y-icons {
  &.gems-menu-y-icons {
    background-color: #d4b254;

    // <ul> : list of the links
    .gems-list {
      // <li> : one item of the list
      .gems-item {
        // <li class="gems-electron-item"> : the item which move
        &.gems-electron-item {
          .gems-link {
            background-color: #d47522;
          }
        }

        // <li class="active"> : The item which is related to the active link
        &.active {
          .gems-link {
            color: #000;
          }
        }

        // <a> : The link of an item
        .gems-link {
          color: #8e0391;
          transition: 0.5s;

          &:hover {
            cursor: crosshair;
            border: 1px solid #5662e1;
            color: #8e039155;
          }
        }
      }

      // Second item of the menu
      .gems-item-1 {
        &.gems-electron-item {
          .gems-link {
            background-color: rgb(74, 230, 62);
          }
        }

        &.active {
          .gems-link {
            color: rgb(200, 240, 119);
            background-color: transparent;
          }
        }

        .gems-link {
          background-color: rgb(213, 22, 53);
          color: rgb(3, 103, 243);
        }
      }
    }
  }
}`;
}
