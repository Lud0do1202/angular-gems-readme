import { Component } from '@angular/core';
import { EventRow } from 'src/app/components/events-table/event-row';
import { PropRow } from 'src/app/components/props-table/prop-row';

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

  /* ------------------------------- Properties ------------------------------- */
  props: PropRow[] = [
    {
      name: '[links]',
      type: 'string[]',
      default: '[]',
      description: 'Labels of the links',
    },
    {
      name: '[default]',
      type: 'number[]',
      default: '0',
      description: 'The index of the default active link',
    },
    {
      name: '[styleId]',
      type: 'string',
      default: "' '",
      description: 'An id a custom style',
      comment: 'Can be used for several <gems-menu-y-icons>',
    },
  ];

  /* --------------------------------- Events --------------------------------- */
  events: EventRow[] = [
    {
      name: '(onLinkClicked)',
      type: 'number',
      description: 'Link has been clicked',
      comment: 'We must update the loaded property (loaded = $event)',
    },
  ];

  /* --------------------------------- Code --------------------------------- */
  codeLoaded: number = 0;
  codeHtml: string = `<!-- Nav -->
<nav [id]="styleId" class="gems-menu-y-icons">
  <ul class="gems-list">
    <!-- Electron link -->
    <li
      [ngClass]="'gems-item gems-electron-item gems-item-' + activeLink"
      [ngStyle]="{ height: heightLink, transform: translateElectronLink }"
    >
      <a class="gems-link"> </a>
    </li>

    <!-- Links -->
    <li
      *ngFor="let link of links; let i = index"
      [ngClass]="'gems-item gems-item-' + i"
      [class.active]="activeLink === i"
      [ngStyle]="{ height: heightLink }"
    >
      <a (click)="click(i)" class="gems-link">
        <i [class]="'gems-icon ' + link"></i>
      </a>
    </li>
  </ul>
</nav>`;
  codeTypescript: string = `import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gems-menu-y-icons',
  templateUrl: './menu-y-icons.component.html',
  styleUrls: ['./menu-y-icons.component.scss'],
})
export class MenuYIconsComponent implements OnInit {
  // Event link clicked
  @Output() onLinkClicked = new EventEmitter<number>();

  // Links (icons)
  @Input() links: string[] = [];

  // Active link
  @Input() default: number = 0;
  activeLink!: number;

  // Style id
  @Input() styleId: string = '';

  // Dynamic style
  translateElectronLink!: string;
  heightLink!: string;

  /******************************************************************************/
  ngOnInit(): void {
    // Default active link
    this.activeLink = this.default;

    // Height link
    this.heightLink = \`calc(100%/\${this.links.length})\`;

    // Translate electron link
    this.translateElectronLink = \`translateY(\${this.activeLink! * 100}%)\`;
  }

  /******************************************************************************/
  click(index: number): void {
    // Emit
    this.onLinkClicked.emit(index);

    // Active link
    this.activeLink = index;

    // Translate electron link
    this.translateElectronLink = \`translateY(\${this.activeLink! * 100}%)\`;
  }
}`;
  codeScss: string = `// <nav> : menu-y-icons
.gems-menu-y-icons {
  height: 100%;
  width: fit-content;
  font-size: 1.75rem;
  background-color: var(--gems-color-4);
  border: 1px solid var(--gems-color-3);
  border-radius: var(--gems-border-radius-m);

  // <ul> : list of the links
  .gems-list {
    position: relative;
    margin: 0;
    padding: 0;
    height: 100%;

    // <li> : one item of the list
    .gems-item {
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;

      // <li class="gems-electron-item"> : the item which move
      &.gems-electron-item {
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.5s;
        width: 100%;

        .gems-link {
          z-index: 1;
          background-color: var(--gems-color-3);
        }
      }

      // <li class="active"> : The item which is related to the active link
      &.active {
        .gems-link {
          color: var(--gems-color-1);
        }
      }

      // <a> : The link of an item
      .gems-link {
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        margin: 0.5rem;
        color: var(--gems-color-2);
        border: 1px solid transparent;
        border-radius: var(--gems-border-radius-m);
        transition: 0.3s;

        &:hover {
          cursor: pointer;
          border: 1px solid var(--gems-color-2);
        }
      }
    }
  }
}`;
}
