import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Highlights
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

// Paypal
import { NgxPayPalModule } from 'ngx-paypal';

// Clipboard
import { ClipboardModule } from 'ngx-clipboard';

// Prime NG
import { PanelMenuModule } from 'primeng/panelmenu';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';

// Angular Gems
import { MenuXModule } from '@lud0do1202/angular-gems';
import { MenuYIconsModule } from '@lud0do1202/angular-gems';
import { SearchBarModule } from '@lud0do1202/angular-gems';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuXPageComponent } from './pages/components/menu/menu-x/menu-x-page.component';
import { PageFoundComponent } from './pages/page-found/page-found.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TitleComponent } from './components/title/title.component';
import { SectionComponent } from './components/section/section.component';
import { ClipboardBtnComponent } from './components/clipboard-btn/clipboard-btn.component';
import { CodeAreaComponent } from './components/code-area/code-area.component';
import { DescriptionComponent } from './components/description/description.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { FormsModule } from '@angular/forms';
import { InstallationPageComponent } from './pages/get-started/installation/installation-page.component';
import { DonationPageComponent } from './pages/more/donation/donation-page.component';
import { PaypalComponent } from './components/paypal/paypal.component';
import { RepositoryPageComponent } from './pages/more/repository/repository-page.component';
import { SelectComponent } from './components/select/select.component';
import { ExampleComponent } from './components/example/example.component';
import { PropsTableComponent } from './components/props-table/props-table.component';
import { EventsTableComponent } from './components/events-table/events-table.component';
import { MenuYIconsPageComponent } from './pages/components/menu/menu-y-icons/menu-y-icons-page.component';
import { MenuXBasicComponent } from './pages/components/menu/menu-x/menu-x-sections/menu-x-basic/menu-x-basic.component';
import { SectionImportComponent } from './components/section-import/section-import.component';
import { MenuXCustomComponent } from './pages/components/menu/menu-x/menu-x-sections/menu-x-custom/menu-x-custom.component';
import { MenuXConfigurationComponent } from './pages/components/menu/menu-x/menu-x-sections/menu-x-configuration/menu-x-configuration.component';
import { MenuXEventsComponent } from './pages/components/menu/menu-x/menu-x-sections/menu-x-events/menu-x-events.component';
import { MenuYIconsBasicComponent } from './pages/components/menu/menu-y-icons/menu-y-icons-sections/menu-y-icons-basic/menu-y-icons-basic.component';
import { MenuYIconsCustomComponent } from './pages/components/menu/menu-y-icons/menu-y-icons-sections/menu-y-icons-custom/menu-y-icons-custom.component';
import { MenuYIconsConfigurationComponent } from './pages/components/menu/menu-y-icons/menu-y-icons-sections/menu-y-icons-configuration/menu-y-icons-configuration.component';
import { MenuYIconsEventsComponent } from './pages/components/menu/menu-y-icons/menu-y-icons-sections/menu-y-icons-events/menu-y-icons-events.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuXPageComponent,
    PageFoundComponent,
    PageNotFoundComponent,
    TitleComponent,
    SectionComponent,
    ClipboardBtnComponent,
    CodeAreaComponent,
    DescriptionComponent,
    SpacerComponent,
    InstallationPageComponent,
    DonationPageComponent,
    PaypalComponent,
    RepositoryPageComponent,
    SelectComponent,
    ExampleComponent,
    PropsTableComponent,
    EventsTableComponent,
    MenuYIconsPageComponent,
    MenuXBasicComponent,
    SectionImportComponent,
    MenuXCustomComponent,
    MenuXConfigurationComponent,
    MenuXEventsComponent,
    MenuYIconsBasicComponent,
    MenuYIconsCustomComponent,
    MenuYIconsConfigurationComponent,
    MenuYIconsEventsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    PanelMenuModule,
    DividerModule,
    TableModule,
    CardModule,
    TooltipModule,
    SelectButtonModule,
    MenuXModule,
    InputNumberModule,
    ClipboardModule,
    ToastModule,
    NgxPayPalModule,
    MenuYIconsModule,
    HighlightModule,
    SearchBarModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
          html: () => import('highlight.js/lib/languages/xml'),
          bash: () => import('highlight.js/lib/languages/bash'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
