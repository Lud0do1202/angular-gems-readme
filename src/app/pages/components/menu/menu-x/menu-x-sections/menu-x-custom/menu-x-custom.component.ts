import { Component } from '@angular/core';
import { MenuXConfig } from '@lud0do1202/angular-gems';

@Component({
  selector: 'app-menu-x-custom',
  templateUrl: './menu-x-custom.component.html',
  styleUrls: ['./menu-x-custom.component.scss'],
})
export class MenuXCustomComponent {
  /* ------------------------------- Component ------------------------------ */
  // The ref to know which component is loaded (init -> default)
  loaded: number = 0;

  // The config
  config: MenuXConfig = {
    // The labels of the links
    links: ['Javascript', 'Html/CSS', 'Java', 'Python'],

    // Set the default link
    defaultActiveLink: this.loaded,

    // The style id (can be used several times)
    styleId: 'custom-menu-x',
  };

  /* ---------------------------------- Doc --------------------------------- */
  // The select for showing the code
  codeAreaSelect: number = 0;

  // Html
  html: string = `<!-- gems-menu-x -->
  <gems-menu-x
    [config]="config"
    (onLinkClicked)="loaded = $event"
  ></gems-menu-x>

  <!-- links -->
  <div style="text-align: center; margin-top: 1rem">
    <div *ngIf="loaded === 0">Component 'Javascript' loaded</div>
    <div *ngIf="loaded === 1">Component 'Html/CSS' loaded</div>
    <div *ngIf="loaded === 2">Component 'Java' loaded</div>
    <div *ngIf="loaded === 3">Component 'Python' loaded</div>
  </div>`;

  // Typescript
  typescript: string = `import { MenuXConfig } from '@lud0do1202/angular-gems';
  
export class DemoMenuXComponent {
  // The ref to know which component is loaded (init -> default)
  loaded: number = 0;

  // The config
  config: MenuXConfig = {
    // The labels of the links
    links: ['Javascript', 'Html/CSS', 'Java', 'Python'],

    // Set the default link
    defaultActiveLink: this.loaded,

    // The style id (can be used several times)
    styleId: 'custom-menu-x',
  };
}`;

  // Scss
  scss: string = `/* ========================================================================== */
/*                                CUSTOM MENU X                               */
/* ========================================================================== */
:host ::ng-deep #custom-menu-x {
  &.gems-menu-x {
    background-color: lightseagreen;
    border: 3px solid grey;

    /* --------------------------------- <ul> --------------------------------- */
    .gems-list {
      /* -------------------------------- <li> -------------------------------- */
      .gems-item {
        /* ------------------ <li class="gems-electron-item"> ----------------- */
        &.gems-electron-item {
          background-color: lightgreen;
        }

        /* ------------------------ <li class="active"> ----------------------- */
        &.active {
          /* ------------------------------- <a> ------------------------------ */
          .gems-link {
            font-size: 1.5rem;
            color: darkgreen;
          }
        }

        /* -------------------------------- <a> ------------------------------- */
        .gems-link {
          padding: 0.5rem 0;
          transition: none;
          font-size: 1rem;
          color: black;

          // Hover
          &:hover {
            opacity: 1;
            font-weight: bold;
          }
        }
      }

      /* --------------------- <li class=".gems-item-1"> -------------------- */
      .gems-item-1 {
        /* ------------------ <li class="gems-electron-item"> ----------------- */
        &.gems-electron-item {
          background-color: lightsalmon;
        }

        /* ------------------------ <li class="active"> ----------------------- */
        &.active {
          /* ------------------------------- <a> ------------------------------ */
          .gems-link {
            color: orangered;
          }
        }

        /* -------------------------------- <a> ------------------------------- */
        .gems-link {
          color: gold;
        }
      }

      /* --------------------- <li class=".gems-item-2"> -------------------- */
      .gems-item-2 {
        /* ------------------------ <li class="active"> ----------------------- */
        &.active {
          /* ------------------------------- <a> ------------------------------ */
          .gems-link {
            text-decoration: line-through;
            color: lightcoral;
          }
        }

        /* -------------------------------- <a> ------------------------------- */
        .gems-link {
          text-shadow: gold 0 0 5px;
        }
      }
    }
  }
}
`;
}
