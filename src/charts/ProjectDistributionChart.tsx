import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

export default function ProjectDistributionChart() {
    const options: ApexOptions = {
        chart: {
          type: 'bar',
          toolbar: { show: false },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%',
            borderRadius: 0,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
            'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
          ],
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: (val: number) => `${val} projects`,
          },
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'left',
          markers: {
            size: 12,
          },
        },
        colors: ['#008000', '#BA55D3', '#F4A300'], // Green, Purple, Orange
      };

      const series: ApexAxisChartSeries = [
        {
          name: 'Approved Projects',
          data: [90, 60, 70, 94, 75, 80, 65, 95, 70, 55, 85, 60],
        },
        {
          name: 'Pending Projects',
          data: [45, 60, 35, 40, 50, 45, 40, 65, 35, 30, 55, 35],
        },
        {
          name: 'Rejected Projects',
          data: [30, 40, 20, 25, 35, 30, 25, 40, 25, 30, 35, 20],
        },
      ];
  return (
    <div className="w-full  ">
      <Chart options={options} series={series} type="bar" height={350} width="100%" />
    </div>
  )
}