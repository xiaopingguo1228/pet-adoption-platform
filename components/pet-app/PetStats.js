import { motion } from 'framer-motion';

// 状态图标映射
const statIcons = {
  health: '❤️',
  happiness: '😊',
  hunger: '🍖',
  energy: '⚡'
};

// 状态颜色映射
const statColors = {
  health: {
    bg: 'bg-red-100',
    fill: 'bg-red-500',
    text: 'text-red-700'
  },
  happiness: {
    bg: 'bg-yellow-100',
    fill: 'bg-yellow-500',
    text: 'text-yellow-700'
  },
  hunger: {
    bg: 'bg-green-100',
    fill: 'bg-green-500',
    text: 'text-green-700'
  },
  energy: {
    bg: 'bg-blue-100',
    fill: 'bg-blue-500',
    text: 'text-blue-700'
  }
};

// 状态描述映射
const statDescriptions = {
  health: {
    low: '生病了，需要照顾',
    medium: '健康状况一般',
    high: '非常健康'
  },
  happiness: {
    low: '很不开心，需要陪伴',
    medium: '心情一般',
    high: '非常开心'
  },
  hunger: {
    low: '饥饿，需要食物',
    medium: '有点饿了',
    high: '饱食状态'
  },
  energy: {
    low: '疲惫，需要休息',
    medium: '有点累了',
    high: '精力充沛'
  }
};

export default function PetStats({ stats }) {
  if (!stats) return null;

  // 获取状态描述
  const getStatDescription = (stat, value) => {
    if (value < 30) return statDescriptions[stat].low;
    if (value < 70) return statDescriptions[stat].medium;
    return statDescriptions[stat].high;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold text-purple-800 mb-3">宠物状态</h3>
      
      <div className="space-y-3">
        {Object.entries(stats).map(([stat, value]) => (
          <div key={stat} className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-2">{statIcons[stat]}</span>
                <span className="capitalize">{
                  stat === 'health' ? '健康' :
                  stat === 'happiness' ? '心情' :
                  stat === 'hunger' ? '饱食度' : '精力'
                }</span>
              </div>
              <span className={`text-sm ${statColors[stat].text}`}>
                {value}%
              </span>
            </div>
            
            <div className={`w-full h-2 ${statColors[stat].bg} rounded-full overflow-hidden`}>
              <motion.div 
                className={`h-full ${statColors[stat].fill}`}
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <p className="text-xs text-gray-500">
              {getStatDescription(stat, value)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 