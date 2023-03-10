import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { MenuItem } from '../../models';
import { MenuService } from "../../services/menu.service";

@Component({
  selector: 'gc-left-bar-menu',
  templateUrl: './left-bar-menu.component.html',
  styleUrls: ['./left-bar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftBarMenuComponent{

  @Input() activeMenuItem: MenuItem;
  @Input() activeUrl: string;
  @Input() menuItems: any;

  constructor(private clickDetection: MenuService) {}

  toggleMenu(event: any) {
    this.clickDetection.toggleMenu(event);
  }

}
