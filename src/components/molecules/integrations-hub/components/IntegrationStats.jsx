import React from 'react';
import Icon from '../../../AppIcon';

const IntegrationStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat?.bgColor}`}>
              <Icon name={stat?.icon} size={24} color={stat?.iconColor} />
            </div>
            {stat?.trend && (
              <div className={`flex items-center gap-1 text-xs font-medium ${stat?.trendColor}`}>
                <Icon name={stat?.trendIcon} size={14} />
                <span>{stat?.trend}</span>
              </div>
            )}
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">{stat?.value}</div>
          <div className="text-sm text-muted-foreground">{stat?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default IntegrationStats;