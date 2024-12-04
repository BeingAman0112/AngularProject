import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { GridModule } from "@progress/kendo-angular-grid";
import{ SelectableMode } from '@progress/kendo-angular-grid';


import { CommonModule } from '@angular/common';
import { products } from './product';
import { LabelModule } from "@progress/kendo-angular-label";


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CommonModule , FormsModule , LabelModule , GridModule ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  public gridData: unknown[] = products;
  public checkboxOnly = false;
  public mode: SelectableMode = "multiple";
  public drag = false;
  public requireMetaKey: boolean = true;
  constructor(private formBuilder: FormBuilder) {
    this.setSelectableSettings();

  }

  public setSelectableSettings(): void {
    if (this.checkboxOnly || this.mode === "single") {
      this.drag = false;
    }
  }

  }

