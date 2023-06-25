import { Component } from '@angular/core';
import { EventRow } from 'src/app/components/events-table/event-row';
import { PropRow } from 'src/app/components/props-table/prop-row';

@Component({
  selector: 'app-menu-x-page',
  templateUrl: './menu-x-page.component.html',
  styleUrls: ['./menu-x-page.component.scss'],
})
export class MenuXPageComponent {
  // Title
  title: string = 'Menu X';
  description: string = 'A horizontal menu with some animation';

  // Import
  import: string = "import { MenuXModule } from '@lud0do1202/angular-gems';";

  // Links
  links: string[] = ['Sellers', 'Supervisors', 'Admins', 'Customers'];

  // Basic
  basicLoaded: number = 0;
  basicSelect: number = 0;
  basicHtml: string = `<gems-menu-x [links]="links" (onLinkClicked)="loaded = $event"></gems-menu-x>

<div style="text-align: center; margin-top: 1rem">
  <div *ngIf="loaded === 0">Component 'Sellers' loaded</div>
  <div *ngIf="loaded === 1">Component 'Supervisor' loaded</div>
  <div *ngIf="loaded === 2">Component 'Admins' loaded</div>
  <div *ngIf="loaded === 3">Component 'Customers' loaded</div>
</div>`;
  basicTypescript: string = `import { MenuXModule } from '@lud0do1202/angular-gems';
  
export class DemoMenuXComponent {
  // Labels of the links
  links: string[] = ['Sellers', 'Supervisors', 'Admins', 'Customers'];

  // The component to load (must be 0 if a default active link is not set)
  loaded: number = 0;
}`;

  // Default
  defaultLoaded: number = 3;
  defaultSelect: number = 0;
  defaultHtml: string = `<gems-menu-x [links]="links" [default]="loaded" (onLinkClicked)="loaded = $event"></gems-menu-x>

<div style="text-align: center; margin-top: 1rem">
  <div *ngIf="loaded === 0">Component 'Sellers' loaded</div>
  <div *ngIf="loaded === 1">Component 'Supervisor' loaded</div>
  <div *ngIf="loaded === 2">Component 'Admins' loaded</div>
  <div *ngIf="loaded === 3">Component 'Customers' loaded</div>
</div>`;
  defaultTypescript: string = `import { MenuXModule } from '@lud0do1202/angular-gems';
  
export class DemoMenuXComponent {
  // Links
  links: string[] = ['Sellers', 'Supervisors', 'Admins', 'Customers'];

  // Default component to load
  loaded: number = 3;
}`;

  // Custom
  customLoaded: number = 0;
  customId: string = 'custom-menu-x';
  customSelect: number = 0;
  customHtml: string = `<gems-menu-x [styleId]="'custom-menu-x'" [links]="links" (onLinkClicked)="loaded = $event"></gems-menu-x>
  
<div style="text-align: center; margin-top: 1rem">
  <div *ngIf="loaded === 0">Component 'Sellers' loaded</div>
  <div *ngIf="loaded === 1">Component 'Supervisor' loaded</div>
  <div *ngIf="loaded === 2">Component 'Admins' loaded</div>
  <div *ngIf="loaded === 3">Component 'Customers' loaded</div>
</div>`;
  customTypescript: string = `import { MenuXModule } from '@lud0do1202/angular-gems';
  
export class DemoMenuXComponent {
  // Labels of the links
  links: string[] = ['Sellers', 'Supervisors', 'Admins', 'Customers'];

  // The component to load (must be 0 if a default active link is not set)
  loaded: number = 0;
}`;
  customScss: string = `// Use :host ::ng-deep or use a global style
// The style id (You can use this id for several <gems-menu-x>)
:host ::ng-deep #custom-menu-x {
  // nav
  &.gems-menu-x {
    background-color: lightseagreen;
    border: 3px solid grey;

    // nav ul
    .gems-links {
      // nav ul li (All links)
      .gems-link {
        // The electron link
        &.gems-electron-link {
          background-color: lightgreen;
        }

        // The <li></li> active
        &.active {
          // The <a></a> of the link active
          .gems-link-text {
            font-size: 1.5rem;
            color: darkgreen;
          }
        }

        // The <a></a> of a link
        .gems-link-text {
          padding: 0.5rem 0;
          transition: none;
          font-size: 1rem;
          color: black;

          &:hover {
            opacity: 1;
            font-weight: bold;
          }
        }
      }

      // Style for the second link
      .gems-link-1 {
        // The electron link when the second link is active
        &.gems-electron-link {
          background-color: lightsalmon;
        }

        // The <li></li> of the second link when it's active
        &.active {
          // The <a></a> of the second link when it's active
          .gems-link-text {
            color: orangered;
          }
        }

        // The <a></a> of the second link
        .gems-link-text {
          color: gold;
        }
      }

      // Style for the third link
      .gems-link-2 {
        &.active {
          .gems-link-text {
            text-decoration: line-through;
            color: lightcoral;
          }
        }
        .gems-link-text {
          &:hover {
            text-shadow: gold 0 0 5px;
          }
        }
      }
    }
  }
}`;

  // Properties
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
      comment: 'Can be used for several <gems-menu-x>',
    },
  ];

  // Events
  events: EventRow[] = [
    {
      name: '(onLinkClicked)',
      type: 'number',
      description: 'Link has been clicked',
      comment: 'We must update the loaded property (loaded = $event)',
    },
  ];

  // Code
  codeLoaded: number = 0;
  codeHtml: string = `<!-- Nav -->
<nav [id]="styleId" class="gems-menu-x">
  <ul class="gems-links">
    <!-- Electron link -->
    <li
      [ngClass]="'gems-electron-link gems-link gems-link-' + activeLink"
      [ngStyle]="{ width: widthLink, transform: translateElectronLink }"
    >
      <a class="gems-link-text"></a>
    </li>

    <!-- Links -->
    <li
      *ngFor="let link of links; let i = index"
      [ngClass]="'gems-link gems-link-' + i"
      [class.active]="activeLink === i"
      [ngStyle]="{ width: widthLink }"
    >
      <a (click)="click(i)" class="gems-link-text">
        {{ link }}
      </a>
    </li>
  </ul>
</nav>`;
  codeTypescript: string = `import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gems-menu-x',
  templateUrl: './menu-x.component.html',
  styleUrls: ['./menu-x.component.scss'],
})
export class MenuXComponent implements OnInit {
  // Event link clicked
  @Output() onLinkClicked = new EventEmitter<number>();

  // Links
  @Input() links: string[] = [];

  // Active link
  @Input() default: number = 0;
  activeLink!: number;

  // Style id
  @Input() styleId: string = '';

  // Dynamic style
  translateElectronLink!: string;
  widthLink!: string;

  /******************************************************************************/
  ngOnInit(): void {
    // Default active link
    this.activeLink = this.default;

    // Width
    this.widthLink = \`calc(100% / \${this.links.length})\`;

    // TranslateY electron link
    this.translateElectronLink = \`translateX(\${this.activeLink! * 100}%)\`;
  }

  /******************************************************************************/
  click(index: number): void {
    // Emit
    this.onLinkClicked.emit(index);

    // Active link
    this.activeLink = index;

    // Translate electron link
    this.translateElectronLink = \`translateX(\${this.activeLink! * 100}%)\`;
  }
}`;
  codeScss: string = `// nav
.gems-menu-x {
  width: 100%;
  background-color: var(--gems-color-4);
  border: 1px solid var(--gems-color-3);
  border-radius: var(--gems-border-radius-xl);
  font-size: 1.75rem;

  // nav ul
  .gems-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;

    // nav ul li
    .gems-link {
      z-index: 2;
      text-align: center;
      list-style-type: none;

      // nav ul li.electron
      &.gems-electron-link {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: var(--gems-color-1);
        border-radius: var(--gems-border-radius-xl);
        transition: 0.5s;
      }

      // nav ul li a
      .gems-link-text {
        display: block;
        text-decoration: none;
        padding: 0.5rem 0;
        color: var(--gems-color-1);
        transition: 0.25s;
        &:hover {
          cursor: pointer;
          opacity: 50%;
        }
      }

      // nav ul li.active
      &.active {
        .gems-link-text {
          color: var(--gems-color-5);
        }
      }
    }
  }
}`;
}
