import { Component } from '@angular/core';
import { PropRow } from 'src/app/components/props-table/prop-row';

@Component({
  selector: 'app-menu-y-icons-configuration',
  templateUrl: './menu-y-icons-configuration.component.html',
  styleUrls: ['./menu-y-icons-configuration.component.scss'],
})
export class MenuYIconsConfigurationComponent {
  /* --------------------------- Properties Config -------------------------- */
  props: PropRow[] = [
    {
      name: 'links',
      code: `/**
* The icons of the links
*/
icons: string[] = [];`,
    },
    {
      name: 'defaultActiveLink',
      code: `/**
* The default link which is active
*/
defaultActiveLink: number = 0;`,
    },
    {
      name: 'styleId',
      code: `/**
* The id css for the component
* @info It can be used several times
*/
styleId?: string = undefined;`,
    },
  ];
}
