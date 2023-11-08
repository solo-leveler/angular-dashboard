import { Component, ViewChild } from '@angular/core';
import { donutChartOptions } from './donut-chart-card-model';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-donut-chart-card',
  templateUrl: './donut-chart-card.component.html',
  styleUrls: ['./donut-chart-card.component.scss']
})
export class DonutChartCardComponent {
  @ViewChild("chart") chart ?: ChartComponent;
  public chartOptions: Partial<donutChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        width: 380,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient",
        // colors :['#506DE2','#90a6fc','#6884ef','#506de3','#4e6de1']
      },
      legend: {
        formatter: function(val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Top Products",
        align: "left"
      },     
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
