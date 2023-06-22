import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

// Angular Gems
import { MenuXModule } from '@lud0do1202/angular-gems';

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
import { InstanceComponent } from './components/instance/instance.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { FormsModule } from '@angular/forms';
import { SelectHtmlTypescriptComponent } from './components/select-html-typescript/select-html-typescript.component';
import { InstallationPageComponent } from './pages/get-started/installation/installation-page.component';
import { DonnationPageComponent } from './pages/more/donnation/donnation-page.component';
import { PaypalComponent } from './components/paypal/paypal.component';

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
    InstanceComponent,
    SpacerComponent,
    SelectHtmlTypescriptComponent,
    InstallationPageComponent,
    DonnationPageComponent,
    PaypalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    PanelMenuModule,
    DividerModule,
    CardModule,
    TooltipModule,
    SelectButtonModule,
    MenuXModule,
    InputNumberModule,
    ClipboardModule,
    ToastModule,
    NgxPayPalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
