import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: {
    value: string;
    increase: boolean;
    period: string;
  };
  icon: React.ReactNode;
  bgColor: string;
  iconBgColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, bgColor, iconBgColor = 'bg-red-600' }) => {
  return (
    <div className={`p-4 rounded-lg ${bgColor}`}>
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs text-gray-600">{title}</div>
          <div className="text-2xl font-bold mt-1">{value}</div>
          <div className="flex items-center text-xs mt-2">
            <span className={`${change.increase ? 'text-green-600' : 'text-red-600'}`}>
              {change.increase ? '↑' : '↓'} {change.value}
            </span>
            <span className="text-gray-500 ml-1">
              {change.period}
            </span>
          </div>
        </div>
        <div  className={`${iconBgColor} text-white w-13 h-13 p-2 flex items-center justify-center rounded-full`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;