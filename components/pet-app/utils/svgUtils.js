// 颜色映射表
const colorMap = {
  // 猫咪颜色
  '橙色': '#FFA500',
  '黑色': '#333333',
  '白色': '#FFFFFF',
  '灰色': '#AAAAAA',
  '棕色': '#8B4513',
  
  // 小狗颜色
  '金色': '#FFD700',
  '斑点': '#FFFFFF', // 斑点在SVG中需要特殊处理
  
  // 小龙颜色
  '红色': '#FF0000',
  '蓝色': '#0000FF',
  '绿色': '#00FF00',
  '金色': '#FFD700',
  
  // 外星生物颜色
  '紫色': '#9370DB',
  '银色': '#C0C0C0',
};

/**
 * 获取宠物SVG的URL
 * @param {string} type 宠物类型
 * @param {string} color 宠物颜色
 * @returns {string} SVG URL
 */
export const getPetSvgUrl = (type, color) => {
  return `/images/pets/${type}.svg`;
};

/**
 * 加载SVG并替换颜色
 * @param {string} type 宠物类型
 * @param {string} color 宠物颜色
 * @returns {Promise<string>} 修改后的SVG内容
 */
export const loadAndColorSvg = async (type, color) => {
  try {
    const response = await fetch(getPetSvgUrl(type));
    if (!response.ok) {
      throw new Error(`Failed to load SVG: ${response.statusText}`);
    }
    
    let svgContent = await response.text();
    const hexColor = colorMap[color] || color;
    
    // 根据宠物类型替换不同的颜色
    switch (type) {
      case 'cat':
        // 替换猫咪的身体、头部、耳朵和尾巴颜色
        svgContent = svgContent.replace(/fill="#FFA500"/g, `fill="${hexColor}"`);
        svgContent = svgContent.replace(/stroke="#FFA500"/g, `stroke="${hexColor}"`);
        break;
      case 'dog':
        // 替换小狗的身体、头部、耳朵、腿和尾巴颜色
        svgContent = svgContent.replace(/fill="#D2B48C"/g, `fill="${hexColor}"`);
        svgContent = svgContent.replace(/stroke="#D2B48C"/g, `stroke="${hexColor}"`);
        
        // 如果是斑点狗，添加斑点
        if (color === '斑点') {
          const spotPattern = `
            <pattern id="spotPattern" patternUnits="userSpaceOnUse" width="30" height="30">
              <circle cx="15" cy="15" r="5" fill="#333333" />
            </pattern>
          `;
          svgContent = svgContent.replace(/<\/title>/, `</title>\n${spotPattern}`);
          svgContent = svgContent.replace(/fill="${hexColor}"/g, 'fill="url(#spotPattern)"');
        }
        break;
      case 'rabbit':
        // 替换兔子的身体、头部、耳朵、腿和尾巴颜色
        svgContent = svgContent.replace(/fill="#FFFFFF"/g, `fill="${hexColor}"`);
        break;
      case 'dragon':
        // 替换小龙的身体、头部、角、翅膀和尾巴颜色
        svgContent = svgContent.replace(/fill="#5CB85C"/g, `fill="${hexColor}"`);
        svgContent = svgContent.replace(/stroke="#5CB85C"/g, `stroke="${hexColor}"`);
        break;
      case 'alien':
        // 替换外星生物的身体、头部、触角、手臂、腿和光环颜色
        svgContent = svgContent.replace(/fill="#9370DB"/g, `fill="${hexColor}"`);
        svgContent = svgContent.replace(/stroke="#9370DB"/g, `stroke="${hexColor}"`);
        break;
    }
    
    return svgContent;
  } catch (error) {
    console.error('Error loading or coloring SVG:', error);
    return null;
  }
};

/**
 * 创建SVG数据URL
 * @param {string} svgContent SVG内容
 * @returns {string} 数据URL
 */
export const createSvgDataUrl = (svgContent) => {
  if (!svgContent) return '';
  const encodedSvg = encodeURIComponent(svgContent);
  return `data:image/svg+xml,${encodedSvg}`;
};

/**
 * 获取宠物表情SVG
 * @param {string} mood 心情
 * @returns {string} 表情SVG
 */
export const getMoodSvg = (mood) => {
  const moodSvgs = {
    happy: `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#FFDD00" />
      <circle cx="12" cy="15" r="3" fill="#000000" />
      <circle cx="28" cy="15" r="3" fill="#000000" />
      <path d="M10,25 Q20,35 30,25" stroke="#000000" stroke-width="2" fill="none" />
    </svg>`,
    
    neutral: `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#FFDD00" />
      <circle cx="12" cy="15" r="3" fill="#000000" />
      <circle cx="28" cy="15" r="3" fill="#000000" />
      <line x1="10" y1="28" x2="30" y2="28" stroke="#000000" stroke-width="2" />
    </svg>`,
    
    sad: `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#FFDD00" />
      <circle cx="12" cy="15" r="3" fill="#000000" />
      <circle cx="28" cy="15" r="3" fill="#000000" />
      <path d="M10,30 Q20,20 30,30" stroke="#000000" stroke-width="2" fill="none" />
    </svg>`,
    
    hungry: `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#FFDD00" />
      <circle cx="12" cy="15" r="3" fill="#000000" />
      <circle cx="28" cy="15" r="3" fill="#000000" />
      <ellipse cx="20" cy="28" rx="5" ry="3" fill="#000000" />
      <path d="M15,28 L25,28" stroke="#000000" stroke-width="1" fill="none" />
    </svg>`,
    
    tired: `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#FFDD00" />
      <path d="M10,15 L14,15" stroke="#000000" stroke-width="2" />
      <path d="M26,15 L30,15" stroke="#000000" stroke-width="2" />
      <path d="M15,28 L25,28" stroke="#000000" stroke-width="2" />
    </svg>`,
    
    sick: `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#FFDD00" />
      <circle cx="12" cy="15" r="3" fill="#000000" />
      <circle cx="28" cy="15" r="3" fill="#000000" />
      <path d="M15,28 L25,28" stroke="#000000" stroke-width="2" />
      <path d="M20,10 L20,5" stroke="#00FF00" stroke-width="2" />
      <circle cx="20" cy="5" r="2" fill="#00FF00" />
    </svg>`
  };
  
  return createSvgDataUrl(moodSvgs[mood] || moodSvgs.neutral);
}; 