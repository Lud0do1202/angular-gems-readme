import { Component } from '@angular/core';

@Component({
  selector: 'app-installation-page',
  templateUrl: './installation-page.component.html',
  styleUrls: ['./installation-page.component.scss'],
})
export class InstallationPageComponent {
  // Title
  title: string = 'Installation';
  description: string = 'Angular Gems contains nice components for you to be use';

  // Download
  download: string = 'npm i @lud0do1202/angular-gems';

  // App module
  appModule: string = `import { MenuXModule } from '@lud0do1202/angular-gems';

@NgModule({
  imports: [
    ...
    MenuXModule,
  ],
})
export class AppModule {}`;

  // Style
  angularJson: string = `{
  "styles" : [
    ...
    "node_modules/@lud0do1202/angular-gems/styles/gems-light.css"
  ]
}`;
}
