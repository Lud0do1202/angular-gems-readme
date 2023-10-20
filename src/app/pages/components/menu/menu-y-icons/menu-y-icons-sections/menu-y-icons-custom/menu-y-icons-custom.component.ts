import { Component } from '@angular/core';
import { MenuYIconsConfig } from '@lud0do1202/angular-gems';

@Component({
  selector: 'app-menu-y-icons-custom',
  templateUrl: './menu-y-icons-custom.component.html',
  styleUrls: ['./menu-y-icons-custom.component.scss'],
})
export class MenuYIconsCustomComponent {
  /* ------------------------------- Component ------------------------------ */
  // The ref to know which component is loaded (init -> default)
  loaded: number = 0;

  // The config
  config: MenuYIconsConfig = {
    // The icons of the links
    icons: ['pi pi-github', 'pi pi-npm', 'pi pi-paypal', 'pi pi-qrcode'],

    // Set the default link
    defaultActiveLink: this.loaded,

    // The style id (can be used several times)
    styleId: 'custom-menu-y-icons',
  };

  /* ---------------------------------- Doc --------------------------------- */
  // The select for showing the code
  codeAreaSelect: number = 0;

  // Html
  html: string = `<div style="display: flex; height: 500px">
  <!-- gems-menu-y-icons -->
  <gems-menu-y-icons
    [config]="config"
    (onLinkClicked)="loaded = $event"
  ></gems-menu-y-icons>

  <!-- links -->
  <div style="text-align: center; margin-left: 1rem">
    <div *ngIf="loaded === 0">Component 'Javascript' loaded</div>
    <div *ngIf="loaded === 1">Component 'Html/CSS' loaded</div>
    <div *ngIf="loaded === 2">Component 'Java' loaded</div>
    <div *ngIf="loaded === 3">Component 'Python' loaded</div>
  </div>
</div>`;

  // Typescript
  typescript: string = `import { MenuYIconsConfig } from '@lud0do1202/angular-gems';
  
export class DemoMenuyIconsComponent {
  // The ref to know which component is loaded (init -> default)
  loaded: number = 0;

  // The config
  config: MenuYIconsConfig = {
    // The icons of the links
    icons: ['pi pi-github', 'pi pi-npm', 'pi pi-paypal', 'pi pi-qrcode'],

    // Set the default link
    defaultActiveLink: this.loaded,

    // The style id (can be used several times)
    styleId: 'custom-menu-y-icons',
  };
}`;

  // Scss
  scss: string = `/* ========================================================================== */
/*                             CUSTOM MENU Y ICONS                            */
/* ========================================================================== */
:host ::ng-deep #custom-menu-y-icons {
  &.gems-menu-y-icons {
    background-color: #d4b254;

    /* -------------------------------- <ul> -------------------------------- */
    .gems-list {
      /* ------------------------------- <li> ------------------------------- */
      .gems-item {
        /* ----------------- <li class="gems-electron-item"> ---------------- */
        &.gems-electron-item {
          /* ------------------------------ <a> ----------------------------- */
          .gems-link {
            background-color: #d47522;
          }
        }

        /* ----------------------- <li class="active"> ---------------------- */
        &.active {
          /* ------------------------------ <a> ----------------------------- */
          .gems-link {
            color: #000;
          }
        }

        /* ------------------------------- <a> ------------------------------ */
        .gems-link {
          color: #8e0391;
          transition: 0.5s;

          // Hover
          &:hover {
            cursor: crosshair;
            border: 1px solid #5662e1;
            color: #8e039155;
          }
        }
      }
    }

    /* --------------------- <li class="gems-item-1"> --------------------- */
    .gems-item-1 {
      /* ----------------- <li class="gems-electron-item"> ---------------- */
      &.gems-electron-item {
        /* ------------------------------- <a> ------------------------------ */
        .gems-link {
          background-color: rgb(74, 230, 62);
        }
      }

      /* ----------------------- <li class="active"> ---------------------- */
      &.active {
        /* ------------------------------ <a> ----------------------------- */
        .gems-link {
          color: rgb(200, 240, 119);
          background-color: transparent;
        }
      }

      /* ------------------------------- <a> ------------------------------ */
      .gems-link {
        background-color: rgb(213, 22, 53);
        color: rgb(3, 103, 243);
      }
    }
  }
}`;
}
