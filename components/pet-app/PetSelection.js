import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getPetSvgUrl } from './utils/svgUtils';

// 宠物类型数据
const petTypes = [
  { 
    id: 'cat', 
    name: '猫咪', 
    description: '优雅、独立的猫咪伙伴，喜欢安静的环境和偶尔的抚摸。',
    emoji: '🐱',
    colors: ['橙色', '黑色', '白色', '灰色', '棕色']
  },
  { 
    id: 'dog', 
    name: '小狗', 
    description: '忠诚、活泼的狗狗伙伴，喜欢玩耍和陪伴你的每一刻。',
    emoji: '🐶',
    colors: ['金色', '棕色', '黑色', '白色', '斑点']
  },
  { 
    id: 'rabbit', 
    name: '兔子', 
    description: '可爱、温顺的兔子伙伴，喜欢胡萝卜和安静的环境。',
    emoji: '🐰',
    colors: ['白色', '棕色', '灰色', '黑色', '斑点']
  },
  { 
    id: 'dragon', 
    name: '小龙', 
    description: '神秘、强大的龙伙伴，喜欢收集宝物和飞翔。',
    emoji: '🐉',
    colors: ['红色', '蓝色', '绿色', '金色', '黑色']
  },
  { 
    id: 'alien', 
    name: '外星生物', 
    description: '来自遥远星球的神秘伙伴，拥有特殊能力和独特习性。',
    emoji: '👽',
    colors: ['绿色', '蓝色', '紫色', '银色', '金色']
  }
];

export default function PetSelection({ onSelectPet }) {
  const [selectedType, setSelectedType] = useState(null);
  const [petName, setPetName] = useState('');
  const [petColor, setPetColor] = useState('');
  const [step, setStep] = useState(1); // 1: 选择类型, 2: 自定义
  const [petSvgPreviews, setPetSvgPreviews] = useState({});

  // 预加载SVG图像
  useEffect(() => {
    const loadPetPreviews = async () => {
      const previews = {};
      for (const type of petTypes) {
        try {
          const response = await fetch(getPetSvgUrl(type.id));
          if (response.ok) {
            previews[type.id] = getPetSvgUrl(type.id);
          }
        } catch (error) {
          console.error(`Failed to load preview for ${type.id}:`, error);
        }
      }
      setPetSvgPreviews(previews);
    };
    
    loadPetPreviews();
  }, []);

  const handleSelectType = (type) => {
    setSelectedType(type);
    setPetColor(type.colors[0]); // 默认选择第一个颜色
    setStep(2);
  };

  const handleCreatePet = () => {
    if (!petName.trim()) {
      alert('请给你的宠物起个名字！');
      return;
    }

    const newPet = {
      type: selectedType.id,
      name: petName,
      color: petColor,
      emoji: selectedType.emoji, // 保留emoji作为后备
      level: 1,
      experience: 0,
      createdAt: Date.now()
    };

    onSelectPet(newPet);
  };

  const handleBack = () => {
    setStep(1);
    setSelectedType(null);
    setPetName('');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
        {step === 1 ? '选择你的跨次元伙伴' : '自定义你的伙伴'}
      </h2>

      {step === 1 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {petTypes.map((type) => (
            <motion.div
              key={type.id}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelectType(type)}
            >
              <div className="flex justify-center mb-2 h-24">
                {petSvgPreviews[type.id] ? (
                  <img 
                    src={petSvgPreviews[type.id]} 
                    alt={type.name} 
                    className="h-full object-contain"
                  />
                ) : (
                  <div className="text-6xl">{type.emoji}</div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-center text-purple-700">{type.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{type.description}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6 h-32">
            {petSvgPreviews[selectedType.id] ? (
              <img 
                src={petSvgPreviews[selectedType.id]} 
                alt={selectedType.name} 
                className="h-full object-contain"
              />
            ) : (
              <div className="text-8xl">{selectedType.emoji}</div>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">宠物名称</label>
            <input
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="给你的伙伴起个名字"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              maxLength={12}
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">宠物颜色</label>
            <div className="flex flex-wrap gap-2">
              {selectedType.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setPetColor(color)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    petColor === color 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={handleBack}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              返回
            </button>
            <button
              onClick={handleCreatePet}
              className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              创建宠物
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 