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
      type: 'string[]',
      default: '[]',
      description: 'The name of the links',
    },
    {
      name: 'defaultActiveLink',
      type: 'number',
      default: '0',
      description: 'The default link which is active',
    },
    {
      name: 'styleId',
      type: 'string | undefined',
      default: "' '",
      description: 'The id css for the component',
      comment: 'It can be used several times',
    },
  ];
}
