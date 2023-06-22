import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Prime NG
import { PanelMenuModule } from 'primeng/panelmenu';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';

// Angular Gems
import { MenuXModule } from '@lud0do1202/angular-gems';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuXComponent } from './pages/components/menu/menu-x/menu-x.component';
import { MenuYIconsComponent } from './pages/components/menu/menu-y-icons/menu-y-icons.component';
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
import { InstallationComponent } from './pages/get-started/installation/installation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuXComponent,
    MenuYIconsComponent,
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
    InstallationComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
