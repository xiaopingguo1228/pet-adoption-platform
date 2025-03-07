import React, { useState } from 'react'
import { FiFilter, FiSearch } from 'react-icons/fi'
import PetCard from '../../components/PetCard'

// 模拟数据
const allPets = [
  {
    id: 1,
    name: '小花',
    type: '猫咪',
    breed: '中华田园猫',
    age: '1岁',
    gender: '女孩',
    description: '活泼可爱，喜欢玩耍，对人友善',
    imageUrl: 'https://source.unsplash.com/random/300x300/?cat,cute',
  },
  {
    id: 2,
    name: '旺财',
    type: '狗狗',
    breed: '金毛寻回犬',
    age: '2岁',
    gender: '男孩',
    description: '温顺听话，喜欢户外活动，适合家庭',
    imageUrl: 'https://source.unsplash.com/random/300x300/?dog,golden',
  },
  {
    id: 3,
    name: '豆豆',
    type: '兔子',
    breed: '荷兰垂耳兔',
    age: '6个月',
    gender: '女孩',
    description: '安静乖巧，喜欢被抚摸，适合安静环境',
    imageUrl: 'https://source.unsplash.com/random/300x300/?rabbit,bunny',
  },
  {
    id: 4,
    name: '小黑',
    type: '狗狗',
    breed: '拉布拉多',
    age: '3岁',
    gender: '男孩',
    description: '活力十足，聪明伶俐，喜欢和孩子玩耍',
    imageUrl: 'https://source.unsplash.com/random/300x300/?dog,labrador',
  },
  {
    id: 5,
    name: '奇奇',
    type: '猫咪',
    breed: '英国短毛猫',
    age: '2岁',
    gender: '男孩',
    description: '性格独立，喜欢安静的环境，偶尔撒娇',
    imageUrl: 'https://source.unsplash.com/random/300x300/?cat,british',
  },
  {
    id: 6,
    name: '贝贝',
    type: '狗狗',
    breed: '柯基',
    age: '1岁',
    gender: '女孩',
    description: '活泼好动，喜欢和人互动，非常聪明',
    imageUrl: 'https://source.unsplash.com/random/300x300/?dog,corgi',
  },
  {
    id: 7,
    name: '毛毛',
    type: '兔子',
    breed: '安哥拉兔',
    age: '1岁',
    gender: '男孩',
    description: '毛发蓬松，性格温顺，适合有耐心的主人',
    imageUrl: 'https://source.unsplash.com/random/300x300/?rabbit,angora',
  },
  {
    id: 8,
    name: '小白',
    type: '猫咪',
    breed: '暹罗猫',
    age: '3岁',
    gender: '女孩',
    description: '聪明机灵，喜欢和主人互动，有时候会很粘人',
    imageUrl: 'https://source.unsplash.com/random/300x300/?cat,siamese',
  },
  {
    id: 9,
    name: '大黄',
    type: '狗狗',
    breed: '中华田园犬',
    age: '4岁',
    gender: '男孩',
    description: '忠诚勇敢，适应能力强，是很好的家庭伴侣',
    imageUrl: 'https://source.unsplash.com/random/300x300/?dog,yellow',
  },
  {
    id: 10,
    name: '咪咪',
    type: '猫咪',
    breed: '美国短毛猫',
    age: '2岁',
    gender: '女孩',
    description: '性格友善，适应能力强，喜欢和其他宠物一起玩',
    imageUrl: 'https://source.unsplash.com/random/300x300/?cat,american',
  },
  {
    id: 11,
    name: '球球',
    type: '仓鼠',
    breed: '布丁仓鼠',
    age: '6个月',
    gender: '男孩',
    description: '活泼可爱，喜欢在笼子里跑轮子，适合安静的环境',
    imageUrl: 'https://source.unsplash.com/random/300x300/?hamster',
  },
  {
    id: 12,
    name: '欢欢',
    type: '狗狗',
    breed: '边境牧羊犬',
    age: '1岁',
    gender: '女孩',
    description: '聪明好动，需要大量运动和智力训练，适合有经验的主人',
    imageUrl: 'https://source.unsplash.com/random/300x300/?dog,border,collie',
  },
]

const PetsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    type: '',
    gender: '',
    age: '',
  })
  const [showFilters, setShowFilters] = useState(false)

  // 处理搜索
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  // 处理筛选
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // 筛选宠物
  const filteredPets = allPets.filter((pet) => {
    // 搜索名称和品种
    const matchesSearch =
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase())

    // 筛选类型
    const matchesType = filters.type ? pet.type === filters.type : true

    // 筛选性别
    const matchesGender = filters.gender ? pet.gender === filters.gender : true

    // 筛选年龄
    let matchesAge = true
    if (filters.age === '幼年') {
      matchesAge = pet.age.includes('个月') || pet.age.includes('1岁')
    } else if (filters.age === '成年') {
      matchesAge = pet.age.includes('2岁') || pet.age.includes('3岁') || pet.age.includes('4岁')
    } else if (filters.age === '老年') {
      matchesAge = pet.age.includes('5岁') || parseInt(pet.age) > 5
    }

    return matchesSearch && matchesType && matchesGender && matchesAge
  })

  return (
    <div className="bg-secondary min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-4">待领养宠物</h1>
          <p className="text-text-secondary max-w-3xl mx-auto">
            浏览我们平台上所有等待被领养的宠物，每一个都有自己独特的性格和故事，希望能找到一个温暖的家。
          </p>
        </div>

        {/* 搜索和筛选 */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="搜索宠物名称或品种..."
                value={searchTerm}
                onChange={handleSearch}
                className="input pl-10"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-primary flex items-center justify-center md:w-auto"
            >
              <FiFilter className="mr-2" /> 筛选选项
            </button>
          </div>

          {/* 筛选选项 */}
          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow-soft mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-text-secondary mb-1">
                  宠物类型
                </label>
                <select
                  id="type"
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="input"
                >
                  <option value="">所有类型</option>
                  <option value="猫咪">猫咪</option>
                  <option value="狗狗">狗狗</option>
                  <option value="兔子">兔子</option>
                  <option value="仓鼠">仓鼠</option>
                </select>
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-text-secondary mb-1">
                  性别
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={filters.gender}
                  onChange={handleFilterChange}
                  className="input"
                >
                  <option value="">所有性别</option>
                  <option value="男孩">男孩</option>
                  <option value="女孩">女孩</option>
                </select>
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-text-secondary mb-1">
                  年龄段
                </label>
                <select
                  id="age"
                  name="age"
                  value={filters.age}
                  onChange={handleFilterChange}
                  className="input"
                >
                  <option value="">所有年龄</option>
                  <option value="幼年">幼年 (1岁以下)</option>
                  <option value="成年">成年 (1-5岁)</option>
                  <option value="老年">老年 (5岁以上)</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* 宠物列表 */}
        {filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-text-primary mb-2">没有找到匹配的宠物</h3>
            <p className="text-text-secondary">
              请尝试调整您的搜索条件或筛选选项。
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PetsPage 