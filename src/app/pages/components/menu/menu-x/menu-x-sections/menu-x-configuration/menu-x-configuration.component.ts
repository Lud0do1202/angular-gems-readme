import { Component } from '@angular/core';
import { PropRow } from 'src/app/components/props-table/prop-row';

@Component({
  selector: 'app-menu-x-configuration',
  templateUrl: './menu-x-configuration.component.html',
  styleUrls: ['./menu-x-configuration.component.scss'],
})
export class MenuXConfigurationComponent {
  /* --------------------------- Properties Config -------------------------- */
  props: PropRow[] = [
    {
      name: 'links',
      code: `/**
* The labels of the links
*/
links: string[] = [];`,
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
