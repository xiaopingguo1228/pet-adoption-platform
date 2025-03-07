import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PetControls({ onFeed, onPlay, onClean, onSleep, onReset, stats }) {
  const [activeTab, setActiveTab] = useState('actions');
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  
  // 按钮是否禁用的逻辑
  const isPlayDisabled = stats.energy < 20;
  const isCleanDisabled = stats.energy < 10;
  const isSleepDisabled = stats.energy > 90;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 ${activeTab === 'actions' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500'}`}
          onClick={() => setActiveTab('actions')}
        >
          互动
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'settings' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500'}`}
          onClick={() => setActiveTab('settings')}
        >
          设置
        </button>
      </div>

      {activeTab === 'actions' ? (
        <div className="grid grid-cols-2 gap-3">
          <ActionButton 
            icon="🍽️" 
            label="喂食" 
            onClick={onFeed} 
            disabled={false}
            description="给宠物喂食，增加饱食度和少量精力"
          />
          <ActionButton 
            icon="🎮" 
            label="玩耍" 
            onClick={onPlay} 
            disabled={isPlayDisabled}
            description={isPlayDisabled ? "宠物太累了，无法玩耍" : "和宠物一起玩耍，增加心情值，消耗精力和饱食度"}
          />
          <ActionButton 
            icon="🚿" 
            label="清洁" 
            onClick={onClean} 
            disabled={isCleanDisabled}
            description={isCleanDisabled ? "宠物太累了，无法清洁" : "给宠物洗澡，增加健康值，消耗少量精力"}
          />
          <ActionButton 
            icon="😴" 
            label="休息" 
            onClick={onSleep} 
            disabled={isSleepDisabled}
            description={isSleepDisabled ? "宠物精力充沛，不需要休息" : "让宠物休息，恢复精力，降低少量心情值"}
          />
        </div>
      ) : (
        <div className="space-y-4">
          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="w-full py-2 px-4 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
            >
              重置宠物
            </button>
          ) : (
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-700 mb-3">确定要重置宠物吗？这将删除当前宠物并返回选择界面。</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={() => {
                    onReset();
                    setShowResetConfirm(false);
                  }}
                  className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  确认重置
                </button>
              </div>
            </div>
          )}
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-medium text-purple-800 mb-2">关于</h4>
            <p className="text-sm text-gray-600">
              跨次元电子宠物伙伴 v1.0<br />
              一款虚拟宠物养成应用，让你在现实世界中养育和互动虚拟宠物。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// 互动按钮组件
function ActionButton({ icon, label, onClick, disabled, description }) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="relative">
      <motion.button
        className={`w-full py-3 px-4 rounded-lg flex flex-col items-center justify-center ${
          disabled 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
        } transition-colors`}
        onClick={disabled ? undefined : onClick}
        whileHover={disabled ? {} : { scale: 1.05 }}
        whileTap={disabled ? {} : { scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="text-2xl mb-1">{icon}</span>
        <span className="text-sm">{label}</span>
      </motion.button>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-800 text-white text-xs rounded py-1 px-2 z-10">
          {description}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );
} 