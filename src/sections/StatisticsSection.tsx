import React from 'react';
import StatCard from '../components/StatCard';
import { AlertTriangle, UsersIcon, Tag, UserPlus, SquareKanban } from 'lucide-react';

const StatisticsSection: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div>
        <h2 className="text-xl font-semibold">Statistics</h2>
        <span className="text-xs text-gray-500 mr-2">Dashboard Summary</span>
        </div>
        <div className="flex items-center">
          
          <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
            THIS WEEK
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard 
          title="Total Registered Projects"
          value="40,689"
          change={{
            value: "8.5% Up",
            increase: true,
            period: "from yesterday"
          }}
          icon={<SquareKanban className="text-white" />}
          bgColor="bg-red-50"
          iconBgColor="icon-stat-danger"
        />
        
        <StatCard 
          title="Total Approved Projects"
          value="10,793"
          change={{
            value: "3.2% Up",
            increase: true,
            period: "from past week"
          }}
          icon={<UsersIcon />}
          bgColor="bg-orange-50"
          iconBgColor="icon-stat-warning"
        />
        
        <StatCard 
          title="Total Registered Admins"
          value="200"
          change={{
            value: "4.3% Up",
            increase: true,
            period: "from yesterday"
          }}
          icon={<Tag/>}
          bgColor="bg-green-50"
          iconBgColor="icon-stat-success"
        />
        
        <StatCard 
          title="Total Number of Committee"
          value="12"
          change={{
            value: "1.8% Up",
            increase: true,
            period: "from yesterday"
          }}
          icon={<UserPlus  />}
          bgColor="bg-purple-50"
          iconBgColor="icon-stat-purple"

        />
        
        <StatCard 
          title="Total Penalties & Compliance Issues"
          value="10"
          change={{
            value: "1.8% Up",
            increase: true,
            period: "from yesterday"
          }}
          icon={<AlertTriangle  />}
          bgColor="bg-green-50"
          iconBgColor="icon-stat-success"
        />
      </div>
    </div>
  );
};

export default StatisticsSection;