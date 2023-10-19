import { Component } from '@angular/core';

@Component({
  selector: 'app-installation-page',
  templateUrl: './installation-page.component.html',
  styleUrls: ['./installation-page.component.scss'],
})
export class InstallationPageComponent {
  // Title
  title: string = 'Installation';
  description: string = 'Angular Gems has a range of useful components for you';

  // Download
  download: string = 'npm i @lud0do1202/angular-gems';

  // App module
  appModule: string = `// Import the module you want to use
import { MenuXModule } from '@lud0do1202/angular-gems';

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

  products = [
    {
      code: 'code 1',
      name: 'name 1',
      category: 'category 1',
      quantity: 'quantity 1',
    },
    {
      code: 'code 2',
      name: 'name 2',
      category: 'category 2',
      quantity: 'quantity 2',
    },
    {
      code: 'code 3',
      name: 'name 3',
      category: 'category 3',
      quantity: 'quantity 3',
    },
  ];
}
