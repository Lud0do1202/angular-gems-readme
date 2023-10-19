import { Component } from '@angular/core';
import { PropRow } from 'src/app/components/props-table/prop-row';

@Component({
  selector: 'app-search-bar-configuration',
  templateUrl: './search-bar-configuration.component.html',
  styleUrls: ['./search-bar-configuration.component.scss'],
})
export class SearchBarConfigurationComponent {
  /* --------------------------- Properties Config -------------------------- */
  props: PropRow[] = [
    {
      name: 'items',
      code: `/**
* The items that will be filtered
*/
items: any[] = [];`,
    },
    {
      name: 'filter',
      code: `/**
* The function that filters
* @param search Will be the value of the input of the search bar
* @param items Will be the items to filter
* @returns The items filtered
*/
filter: (search: string, items: any[]) => any[] = (search: string, items: any[]) =>
  items.filter((item) => item.includes(search));`,
    },
    {
      name: 'icon',
      code: `/**
* The icon that will be place in <i class="...."></i>
* @undefined No icon is shown
*/
icon?: string = undefined;`,
    },
    {
      name: 'iconPosition',
      code: `/**
* The icon is placed on the left or on the right
*/
iconPosition?: 'left' | 'right' = 'left'`,
    },
    {
      name: 'placeholder',
      code: `/**
* The placeholder of the input
*/
placeholder?: string = 'Search';`,
    },
    {
      name: 'dynamicFilter',
      code: `/**
* If the filter function emit every time the value change (onModelChange) or when the value has been changed (onChange)
*/
dynamicFilter?: boolean = true;`,
    },
    {
      name: 'styleId',
      code: `/**
* The id css for the component
* @info It can be used several times
*/
styleId?: string = '';`,
    },
  ];
}
