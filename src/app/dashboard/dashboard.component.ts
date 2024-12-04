import { Component } from '@angular/core';
import { ChartWizardModule , ChartWizardDataRow , ExportOptions } from "@progress/kendo-angular-chart-wizard";
import { ChartsModule, SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';
import { IntlService } from "@progress/kendo-angular-intl";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartWizardModule , ChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public seriesData: number[] = [20, 40, 45, 30, 50];
  public categories: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  public pieData = [
    { category: "0-14", value: 0.2545 },
    { category: "15-24", value: 0.1552 },
    { category: "25-54", value: 0.4059 },
    { category: "55-64", value: 0.0911 },
    { category: "65+", value: 0.0933 },
  ];

  constructor(private intl: IntlService) {
    this.labelContent = this.labelContent.bind(this);
  }
  public labelContent(args: SeriesLabelsContentArgs): string {
    return `${args.dataItem.category} years old: ${this.intl.formatNumber(
      args.dataItem.value,
      "p2"
    )}`;
  }
}


