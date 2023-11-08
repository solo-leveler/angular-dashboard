import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, ApexFill, ApexLegend, ApexDataLabels, ApexTitleSubtitle } from "ng-apexcharts";

export type donutChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    fill: ApexFill;
    legend: ApexLegend;
    dataLabels: ApexDataLabels;
    title: ApexTitleSubtitle;
  };