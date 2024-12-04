import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { DrawerItemExpandedFn, LayoutModule } from '@progress/kendo-angular-layout';
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { Component, ViewEncapsulation } from "@angular/core";
import { IconsModule } from "@progress/kendo-angular-icons";
import { accessibilityIcon, bellIcon,  editAnnotationsIcon, gridIcon, homeIcon, listUnorderedSquareIcon, menuIcon, SVGIcon, ungroupIcon } from "@progress/kendo-svg-icons";
import {  DrawerSelectEvent } from "@progress/kendo-angular-layout";
import { ActivatedRoute, Router, RouterLink, RouterOutlet, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegistrationComponent } from '../registration/registration.component';
import { DatasetComponent } from '../dataset/dataset.component';
import { ProductComponent } from '../product/product.component';
import { EditorComponent } from '../editor/editor.component';
import { CustomerComponent } from '../customer/customer.component';
import { GridComponent } from '@progress/kendo-angular-grid';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';


interface Item {
  id:number,
  parentId?: number,
  text: string;
  svgIcon: SVGIcon;
  path: string;
  selected?: boolean;
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LayoutModule, NavigationModule , IconsModule, IndicatorsModule , RouterLink ,RouterOutlet,ToolBarModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   public designerAvatar= "https://images.pexels.com/photos/5691359/pexels-photo-5691359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  public selected = "Inbox";
  public menuIcon: SVGIcon = menuIcon;
  public bellIcon: SVGIcon = bellIcon;
  public items: Array<Item> = drawerRoutes;
  public expanded = true;
  public expandedIndices = [2];



  constructor(private router: Router, private route: ActivatedRoute) {
    this.items[0].selected = true;
  }

  public onSelect(ev: DrawerSelectEvent): void {
    const current = ev.item.id;
    this.router.navigate([`./${ev.item.path}`], { relativeTo: this.route });
    this.selected = ev.item.text;

    if (this.expandedIndices.indexOf(current) >= 0) {
      this.expandedIndices = this.expandedIndices.filter(
        (id) => id !== current
      );
    } else {
      this.expandedIndices.push(current);
    }
  }

  public isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
    return this.expandedIndices.indexOf(item.id) >= 0;
  };

}
export const drawerRoutes = [
  {
    id:0,
    path: "",
    component: DashboardComponent,
    text: "DashBoard",
    svgIcon: homeIcon,
    selected: true,
  },
  {
    id:1,
    path: "register",
    component: RegistrationComponent,
    text: "Registration",
    svgIcon: accessibilityIcon,
  },
  {
    id:2,
    path: "dataList",
    component: DatasetComponent,
    text: "List",
    svgIcon: listUnorderedSquareIcon,
  },
  {
    id:3,
    path: "product",
    component: ProductComponent,
    text: "product",
    svgIcon: ungroupIcon,
  },
  {
    id:4,
    path: "editor",
    component: EditorComponent,
    text: "editor",
    svgIcon: editAnnotationsIcon
  },
  {
    id:5,
    path:'products',
    component: CustomerComponent,
    text: "Products",
    svgIcon: ungroupIcon,
  },{
    id:9,
    parentId:5,
    path:'products/Grid',
    Component: GridComponent,
    text:"Grid",
    svgIcon:gridIcon,
  }
  // ,{
  //   id:8,
  //   parentId:5,
  //   path:'Grid',
  //   Component: DatasetComponent,
  //   text:"Grid",
  //   svgIcon:questionCircleIcon,
  // }
];
