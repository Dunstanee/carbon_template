import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';


export default function UserInsightChart() {
    const options: ApexOptions = {
        chart: {
          type: 'donut',
        },
        labels: ['Admins', 'Proponents'],
        colors: ['#5E2DD8', '#1AC9A3'], // Purple, Teal
        dataLabels: {
          enabled: true,
          formatter: function (val: number) {
            return `${Math.round(val)}%`;
          },
          dropShadow: {
            enabled: false,
          },
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            colors: ['#fff'],
          },
          background: {
            enabled: true,
            foreColor: '#000',
            padding: 8,
            borderRadius: 10,
            opacity: 1,
          },
        },
        legend: {
          position: 'bottom',
          markers: {
            size: 12,
          },
        },
        stroke: {
          show: true,
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              size: '70%',
            },
          },
        },
      };
    
      const series: number[] = [35, 65]; 
  return (
    <div className="max-w-xs mx-auto">
      <Chart options={options} series={series} type="donut" height={500} />
    </div>
  )
}
