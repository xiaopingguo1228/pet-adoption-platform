import { useState, useEffect } from 'react';
import PetSelection from './PetSelection';
import PetDisplay from './PetDisplay';
import PetControls from './PetControls';
import PetStats from './PetStats';

export default function PetApp() {
  // 应用状态
  const [appState, setAppState] = useState('selection'); // 'selection', 'main'
  const [pet, setPet] = useState(null);
  const [stats, setStats] = useState({
    health: 100,
    happiness: 100,
    hunger: 100,
    energy: 100,
  });
  const [lastFed, setLastFed] = useState(Date.now());
  const [lastPlayed, setLastPlayed] = useState(Date.now());
  const [lastCleaned, setLastCleaned] = useState(Date.now());

  // 从本地存储加载宠物数据
  useEffect(() => {
    const savedPet = localStorage.getItem('virtualPet');
    const savedStats = localStorage.getItem('petStats');
    const savedLastFed = localStorage.getItem('lastFed');
    const savedLastPlayed = localStorage.getItem('lastPlayed');
    const savedLastCleaned = localStorage.getItem('lastCleaned');
    
    if (savedPet) {
      setPet(JSON.parse(savedPet));
      setAppState('main');
    }
    
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
    
    if (savedLastFed) setLastFed(parseInt(savedLastFed));
    if (savedLastPlayed) setLastPlayed(parseInt(savedLastPlayed));
    if (savedLastCleaned) setLastCleaned(parseInt(savedLastCleaned));
  }, []);

  // 保存宠物数据到本地存储
  useEffect(() => {
    if (pet) {
      localStorage.setItem('virtualPet', JSON.stringify(pet));
      localStorage.setItem('petStats', JSON.stringify(stats));
      localStorage.setItem('lastFed', lastFed.toString());
      localStorage.setItem('lastPlayed', lastPlayed.toString());
      localStorage.setItem('lastCleaned', lastCleaned.toString());
    }
  }, [pet, stats, lastFed, lastPlayed, lastCleaned]);

  // 宠物状态随时间变化
  useEffect(() => {
    if (appState !== 'main') return;
    
    const interval = setInterval(() => {
      const now = Date.now();
      const hoursSinceLastFed = (now - lastFed) / (1000 * 60 * 60);
      const hoursSinceLastPlayed = (now - lastPlayed) / (1000 * 60 * 60);
      const hoursSinceLastCleaned = (now - lastCleaned) / (1000 * 60 * 60);
      
      setStats(prevStats => ({
        ...prevStats,
        hunger: Math.max(0, prevStats.hunger - hoursSinceLastFed * 5),
        happiness: Math.max(0, prevStats.happiness - hoursSinceLastPlayed * 3),
        health: Math.max(0, prevStats.health - hoursSinceLastCleaned * 2),
        energy: Math.max(0, prevStats.energy - 1), // 能量随时间自然下降
      }));
    }, 60000); // 每分钟更新一次
    
    return () => clearInterval(interval);
  }, [appState, lastFed, lastPlayed, lastCleaned]);

  // 选择宠物
  const handleSelectPet = (selectedPet) => {
    setPet(selectedPet);
    setAppState('main');
    // 重置所有状态
    setStats({
      health: 100,
      happiness: 100,
      hunger: 100,
      energy: 100,
    });
    const now = Date.now();
    setLastFed(now);
    setLastPlayed(now);
    setLastCleaned(now);
  };

  // 喂食宠物
  const handleFeed = () => {
    setStats(prev => ({
      ...prev,
      hunger: Math.min(100, prev.hunger + 30),
      energy: Math.min(100, prev.energy + 10),
    }));
    setLastFed(Date.now());
  };

  // 与宠物玩耍
  const handlePlay = () => {
    setStats(prev => ({
      ...prev,
      happiness: Math.min(100, prev.happiness + 30),
      energy: Math.max(0, prev.energy - 20),
      hunger: Math.max(0, prev.hunger - 10),
    }));
    setLastPlayed(Date.now());
  };

  // 清洁宠物
  const handleClean = () => {
    setStats(prev => ({
      ...prev,
      health: Math.min(100, prev.health + 30),
      energy: Math.max(0, prev.energy - 10),
    }));
    setLastCleaned(Date.now());
  };

  // 让宠物休息
  const handleSleep = () => {
    setStats(prev => ({
      ...prev,
      energy: 100,
      happiness: Math.max(0, prev.happiness - 10),
    }));
  };

  // 重置宠物（删除当前宠物）
  const handleReset = () => {
    localStorage.removeItem('virtualPet');
    localStorage.removeItem('petStats');
    localStorage.removeItem('lastFed');
    localStorage.removeItem('lastPlayed');
    localStorage.removeItem('lastCleaned');
    setPet(null);
    setAppState('selection');
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
      {appState === 'selection' ? (
        <PetSelection onSelectPet={handleSelectPet} />
      ) : (
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <PetDisplay 
                pet={pet} 
                stats={stats} 
              />
            </div>
            <div className="flex-1">
              <PetStats stats={stats} />
              <PetControls 
                onFeed={handleFeed} 
                onPlay={handlePlay} 
                onClean={handleClean} 
                onSleep={handleSleep}
                onReset={handleReset}
                stats={stats}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 