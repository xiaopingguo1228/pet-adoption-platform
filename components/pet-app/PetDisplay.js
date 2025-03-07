import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { loadAndColorSvg, createSvgDataUrl, getMoodSvg } from './utils/svgUtils';

// 宠物表情和状态映射
const moodEmojis = {
  happy: ['😊', '😄', '🥰', '😁'],
  neutral: ['😐', '🙂', '😌'],
  sad: ['😢', '😞', '😔'],
  hungry: ['🤤', '😋', '🍽️'],
  tired: ['😴', '🥱', '💤'],
  sick: ['🤒', '😷', '🤢']
};

export default function PetDisplay({ pet, stats }) {
  const [mood, setMood] = useState('neutral');
  const [animation, setAnimation] = useState('idle');
  const [moodEmoji, setMoodEmoji] = useState('🙂');
  const [showSpeech, setShowSpeech] = useState(false);
  const [speechText, setSpeechText] = useState('');
  const [petSvg, setPetSvg] = useState('');
  const [moodSvg, setMoodSvg] = useState('');

  // 加载宠物SVG
  useEffect(() => {
    if (!pet) return;
    
    const loadSvg = async () => {
      const svgContent = await loadAndColorSvg(pet.type, pet.color);
      if (svgContent) {
        setPetSvg(createSvgDataUrl(svgContent));
      }
    };
    
    loadSvg();
  }, [pet]);

  // 根据状态确定宠物心情
  useEffect(() => {
    if (!stats) return;

    let newMood = 'neutral';
    
    if (stats.hunger < 30) {
      newMood = 'hungry';
    } else if (stats.energy < 30) {
      newMood = 'tired';
    } else if (stats.health < 30) {
      newMood = 'sick';
    } else if (stats.happiness > 70) {
      newMood = 'happy';
    } else if (stats.happiness < 30) {
      newMood = 'sad';
    }
    
    setMood(newMood);
    
    // 设置心情SVG
    setMoodSvg(getMoodSvg(newMood));
    
    // 随机选择对应心情的表情（用于后备显示）
    const emojis = moodEmojis[newMood];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setMoodEmoji(randomEmoji);
  }, [stats]);

  // 随机宠物动作
  useEffect(() => {
    const animations = ['idle', 'bounce', 'shake', 'spin'];
    const interval = setInterval(() => {
      // 80%的时间保持idle状态，20%的时间随机动作
      const randomAnim = Math.random() < 0.8 
        ? 'idle' 
        : animations[Math.floor(Math.random() * animations.length)];
      setAnimation(randomAnim);
      
      // 有10%的几率说话
      if (Math.random() < 0.1) {
        speak();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [mood]);

  // 宠物说话功能
  const speak = () => {
    const speeches = {
      happy: [
        `我好开心啊，${pet.name}很喜欢和你在一起！`,
        '今天天气真好，我们出去玩吧！',
        '你是最棒的主人！'
      ],
      neutral: [
        '今天过得怎么样？',
        `${pet.name}在想些什么呢...`,
        '有什么有趣的事情要做吗？'
      ],
      sad: [
        '我有点难过...',
        '你能陪我玩一会儿吗？',
        '我需要一些关注...'
      ],
      hungry: [
        '我肚子好饿...',
        '有吃的吗？我快饿扁了！',
        '食物！食物！我需要食物！'
      ],
      tired: [
        '好困啊，需要休息...',
        '我想睡觉了...',
        '让我打个盹吧...'
      ],
      sick: [
        '我感觉不太舒服...',
        '需要一些照顾...',
        '我好像生病了...'
      ]
    };
    
    const moodSpeeches = speeches[mood];
    const randomSpeech = moodSpeeches[Math.floor(Math.random() * moodSpeeches.length)];
    
    setSpeechText(randomSpeech);
    setShowSpeech(true);
    
    // 3秒后隐藏对话框
    setTimeout(() => {
      setShowSpeech(false);
    }, 3000);
  };

  // 动画变体
  const variants = {
    idle: { y: [0, -5, 0], transition: { repeat: Infinity, duration: 2 } },
    bounce: { y: [0, -20, 0], transition: { repeat: 2, duration: 0.5 } },
    shake: { x: [0, -10, 10, -10, 0], transition: { repeat: 2, duration: 0.5 } },
    spin: { rotate: [0, 360], transition: { duration: 0.8 } }
  };

  // 获取宠物等级描述
  const getLevelDescription = (level) => {
    if (level < 3) return '幼年期';
    if (level < 6) return '成长期';
    if (level < 10) return '成熟期';
    return '完全体';
  };

  if (!pet) return null;

  return (
    <div className="relative flex flex-col items-center justify-center p-4 h-full">
      <div className="mb-4 text-center">
        <h3 className="text-xl font-bold text-purple-800">{pet.name}</h3>
        <p className="text-sm text-gray-600">
          {pet.color}{pet.type === 'cat' ? '猫咪' : 
            pet.type === 'dog' ? '小狗' : 
            pet.type === 'rabbit' ? '兔子' : 
            pet.type === 'dragon' ? '小龙' : '外星生物'} · {getLevelDescription(pet.level)}
        </p>
      </div>
      
      <div className="relative">
        {/* 宠物形象 - 使用SVG或后备emoji */}
        <motion.div 
          className="w-48 h-48 flex items-center justify-center"
          variants={variants}
          animate={animation}
        >
          {petSvg ? (
            <img src={petSvg} alt={pet.name} className="w-full h-full object-contain" />
          ) : (
            <div className="text-9xl">{pet.emoji}</div>
          )}
        </motion.div>
        
        {/* 宠物表情 - 使用SVG或后备emoji */}
        <div className="absolute top-1/4 right-0">
          {moodSvg ? (
            <img src={moodSvg} alt="mood" className="w-10 h-10" />
          ) : (
            <div className="text-3xl">{moodEmoji}</div>
          )}
        </div>
        
        {/* 对话气泡 */}
        {showSpeech && (
          <motion.div 
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-xl shadow-md max-w-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-sm">{speechText}</div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
          </motion.div>
        )}
      </div>
      
      <button 
        onClick={speak}
        className="mt-6 px-4 py-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
      >
        打招呼
      </button>
    </div>
  );
} 