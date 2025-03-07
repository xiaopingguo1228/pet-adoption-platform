import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft, FiHeart, FiShare2, FiCalendar, FiMapPin, FiInfo, FiCheckCircle, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

// 模拟数据
const petsData = [
  {
    id: 1,
    name: '小花',
    type: '猫咪',
    breed: '中华田园猫',
    age: '1岁',
    gender: '女孩',
    size: '中型',
    color: '橘白相间',
    vaccinated: true,
    neutered: true,
    description: '小花是一只活泼可爱的中华田园猫，她有着漂亮的橘白相间的毛发。她非常喜欢玩耍，尤其是追逐逗猫棒和毛线球。小花对人非常友善，喜欢被抚摸，但也有自己独立的一面。她已经完成了所有必要的疫苗接种和绝育手术，健康状况良好。小花适合有一定养猫经验的家庭，最好有足够的空间让她活动。',
    personality: ['活泼', '友善', '独立', '好奇'],
    goodWith: ['成人', '年长儿童', '其他猫'],
    requirements: ['室内饲养', '定期梳理毛发', '每日互动和玩耍'],
    story: '小花是在一个小区的花园里被发现的，当时她还是一只小奶猫，和她的兄弟姐妹一起被遗弃。志愿者将它们救助并送到了收容所。她的兄弟姐妹已经被领养，现在小花也期待着能找到自己的永久家庭。',
    images: [
      'https://source.unsplash.com/random/800x600/?cat,orange',
      'https://source.unsplash.com/random/800x600/?cat,cute',
      'https://source.unsplash.com/random/800x600/?cat,play',
    ],
    location: '北京市朝阳区',
    contactPerson: '张志愿',
    contactPhone: '138****1234',
  },
  {
    id: 2,
    name: '旺财',
    type: '狗狗',
    breed: '金毛寻回犬',
    age: '2岁',
    gender: '男孩',
    size: '大型',
    color: '金黄色',
    vaccinated: true,
    neutered: true,
    description: '旺财是一只温顺友好的金毛寻回犬，有着漂亮的金黄色被毛。他非常喜欢户外活动，尤其是追逐球和飞盘。旺财对人非常友善，特别喜欢和孩子们一起玩耍。他已经接受过基本的训练，会听从简单的指令，如"坐下"、"握手"等。旺财已完成所有必要的疫苗接种和绝育手术，健康状况良好。他适合有一定养狗经验的家庭，最好有院子或者能经常带他去户外活动。',
    personality: ['温顺', '活泼', '友善', '聪明'],
    goodWith: ['成人', '儿童', '其他狗'],
    requirements: ['定期户外活动', '基础训练维持', '定期梳理毛发'],
    story: '旺财原本生活在一个家庭中，但由于主人工作调动需要搬到国外，无法带他一起去，所以不得不寻找新的家庭收养他。他的前主人非常爱他，希望他能找到一个同样爱他的新家庭。',
    images: [
      'https://source.unsplash.com/random/800x600/?dog,golden',
      'https://source.unsplash.com/random/800x600/?dog,retriever',
      'https://source.unsplash.com/random/800x600/?dog,play',
    ],
    location: '上海市浦东新区',
    contactPerson: '李志愿',
    contactPhone: '139****5678',
  },
  // 其他宠物数据...
]

const PetDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [activeImage, setActiveImage] = useState(0)
  const [showAdoptionForm, setShowAdoptionForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    experience: '',
    reason: '',
    agreement: false,
  })

  // 根据ID查找宠物
  const pet = petsData.find((p) => p.id === Number(id))

  if (!pet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">宠物信息未找到</h2>
          <p className="text-text-secondary mb-6">
            抱歉，我们找不到您要查看的宠物信息。
          </p>
          <Link href="/pets" className="btn btn-primary">
            返回宠物列表
          </Link>
        </div>
      </div>
    )
  }

  // 处理表单输入
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    })
  }

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单验证和提交逻辑
    alert('领养申请已提交，我们会尽快联系您！')
    setShowAdoptionForm(false)
    // 在实际应用中，这里应该发送API请求
  }

  return (
    <div className="bg-secondary min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回按钮 */}
        <div className="mb-6">
          <Link href="/pets" className="inline-flex items-center text-text-secondary hover:text-accent">
            <FiArrowLeft className="mr-2" /> 返回宠物列表
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 宠物图片展示 */}
            <div className="p-6">
              <div className="relative h-80 w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src={pet.images[activeImage]}
                  alt={pet.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {pet.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative h-24 rounded-lg overflow-hidden cursor-pointer ${
                      activeImage === index ? 'ring-2 ring-accent' : ''
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`${pet.name} - 图片 ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 宠物信息 */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-text-primary">{pet.name}</h1>
                <div className="flex space-x-2">
                  <button className="p-2 bg-primary-light rounded-full hover:bg-primary transition-colors duration-200">
                    <FiHeart className="h-5 w-5 text-accent" />
                  </button>
                  <button className="p-2 bg-primary-light rounded-full hover:bg-primary transition-colors duration-200">
                    <FiShare2 className="h-5 w-5 text-accent" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-primary-light text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {pet.type}
                </span>
                <span className="bg-primary-light text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {pet.breed}
                </span>
                <span className="bg-primary-light text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {pet.age}
                </span>
                <span className="bg-primary-light text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {pet.gender}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <FiMapPin className="h-5 w-5 text-accent mr-2" />
                  <span className="text-text-secondary">{pet.location}</span>
                </div>
                <div className="flex items-center">
                  <FiCalendar className="h-5 w-5 text-accent mr-2" />
                  <span className="text-text-secondary">已在平台 30 天</span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span className="text-text-secondary">
                    {pet.vaccinated ? '已接种疫苗' : '未接种疫苗'}
                  </span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span className="text-text-secondary">
                    {pet.neutered ? '已绝育' : '未绝育'}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-text-primary mb-2">关于 {pet.name}</h2>
                <p className="text-text-secondary">{pet.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-text-primary mb-2">性格特点</h3>
                <div className="flex flex-wrap gap-2">
                  {pet.personality.map((trait, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-text-secondary px-3 py-1 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-text-primary mb-2">与谁相处融洽</h3>
                <div className="flex flex-wrap gap-2">
                  {pet.goodWith.map((entity, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-text-secondary px-3 py-1 rounded-full text-sm"
                    >
                      {entity}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowAdoptionForm(true)}
                className="btn btn-accent w-full mb-4"
              >
                申请领养
              </button>

              <div className="text-center text-sm text-text-secondary">
                <p>有问题? 联系志愿者 {pet.contactPerson}: {pet.contactPhone}</p>
              </div>
            </div>
          </div>

          {/* 宠物故事和要求 */}
          <div className="p-6 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                  <FiInfo className="mr-2 text-accent" /> {pet.name} 的故事
                </h2>
                <p className="text-text-secondary">{pet.story}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                  <FiInfo className="mr-2 text-accent" /> 领养要求
                </h2>
                <ul className="list-disc list-inside text-text-secondary">
                  {pet.requirements.map((req, index) => (
                    <li key={index} className="mb-2">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 领养申请表单模态框 */}
      {showAdoptionForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-medium p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-text-primary">
                申请领养 {pet.name}
              </h2>
              <button
                onClick={() => setShowAdoptionForm(false)}
                className="text-text-secondary hover:text-accent"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
                    您的姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">
                    联系电话 *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
                    电子邮箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-text-secondary mb-1">
                    居住地址 *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-medium text-text-secondary mb-1">
                  您有养宠物的经验吗？请简单描述 *
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="input"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="reason" className="block text-sm font-medium text-text-secondary mb-1">
                  为什么想要领养{pet.name}？ *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="input"
                />
              </div>

              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleInputChange}
                    required
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="agreement" className="text-sm text-text-secondary">
                    我已阅读并同意<Link href="/terms" className="text-accent hover:underline">领养协议</Link>，
                    承诺为{pet.name}提供良好的生活环境和照顾。 *
                  </label>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAdoptionForm(false)}
                  className="btn bg-gray-200 text-text-secondary hover:bg-gray-300"
                >
                  取消
                </button>
                <button type="submit" className="btn btn-accent">
                  提交申请
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default PetDetailPage 