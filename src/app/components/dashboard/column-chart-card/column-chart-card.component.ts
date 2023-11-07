import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { columnChartOptions } from './column-chart-card-model';


@Component({
  selector: 'app-column-chart-card',
  templateUrl: './column-chart-card.component.html',
  styleUrls: ['./column-chart-card.component.scss']
})
export class ColumnChartCardComponent {
  @ViewChild("chart") chart ?: ChartComponent;
  public chartOptions: Partial<columnChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Income",
          data: [44, 55, 41, 67]
        },
        {
          name: "Borrow",
          data: [13, 23, 20, 8]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "01/2011",
          "02/2011",
          "03/2011",
          "04/2011",
        ]
      },
      title: {
        text: "Balance Overview",
        align: "left"
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
  }
}
