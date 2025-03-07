import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiHeart, FiHome, FiInfo, FiCalendar } from 'react-icons/fi'
import { motion } from 'framer-motion'
import PetCard from '../components/PetCard'
import TestimonialCard from '../components/TestimonialCard'
import StepCard from '../components/StepCard'

// 模拟数据
const featuredPets = [
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
]

const testimonials = [
  {
    id: 1,
    name: '张先生',
    avatar: 'https://source.unsplash.com/random/100x100/?man',
    petName: '小白',
    petType: '猫咪',
    content: '通过暖心宠物平台，我找到了我的小白。领养过程非常顺利，平台提供的领养指南也很有帮助。现在小白已经成为我家庭的一部分，每天都带给我们无尽的欢乐。',
    rating: 5,
  },
  {
    id: 2,
    name: '李女士',
    avatar: 'https://source.unsplash.com/random/100x100/?woman',
    petName: '贝贝',
    petType: '狗狗',
    content: '贝贝是我在暖心宠物平台领养的第一只狗狗，平台的工作人员非常耐心地解答了我所有的问题，并帮助我完成了领养手续。贝贝现在很健康快乐，我们非常感谢暖心宠物平台！',
    rating: 5,
  },
  {
    id: 3,
    name: '王先生',
    avatar: 'https://source.unsplash.com/random/100x100/?person',
    petName: '豆豆',
    petType: '兔子',
    content: '领养豆豆是我做过的最好的决定之一。暖心宠物平台不仅帮我找到了合适的宠物，还提供了很多养护知识。现在豆豆已经完全适应了我的家，我们相处得非常愉快。',
    rating: 4,
  },
]

const adoptionSteps = [
  {
    id: 1,
    title: '浏览宠物',
    description: '在我们的平台上浏览各种待领养的宠物，了解它们的背景、性格和需求。',
    icon: <FiInfo className="h-8 w-8 text-accent" />,
  },
  {
    id: 2,
    title: '提交申请',
    description: '找到心仪的宠物后，填写领养申请表，我们会对您的居住环境和生活方式进行评估。',
    icon: <FiCalendar className="h-8 w-8 text-accent" />,
  },
  {
    id: 3,
    title: '家访确认',
    description: '通过初步审核后，我们会安排工作人员进行家访，确保您能为宠物提供良好的生活环境。',
    icon: <FiHome className="h-8 w-8 text-accent" />,
  },
  {
    id: 4,
    title: '完成领养',
    description: '一切顺利后，您将签署领养协议，正式迎接新成员加入您的家庭。',
    icon: <FiHeart className="h-8 w-8 text-accent" />,
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary-light py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                为每个生命寻找<span className="text-accent">温暖的家</span>
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                暖心宠物领养平台致力于帮助流浪动物找到爱它们的家庭，同时为爱心人士提供领养的机会，让爱与责任传递下去。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/pets" className="btn btn-accent">
                  寻找宠物
                </Link>
                <Link href="/guide" className="btn btn-outline">
                  了解领养流程
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-medium"
            >
              <Image
                src="https://source.unsplash.com/random/800x600/?pet,dog,cat,happy"
                alt="幸福的宠物与主人"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="3" className="text-accent opacity-10" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#pattern-circles)" />
          </svg>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">等待被领养的小伙伴</h2>
            <p className="text-text-secondary max-w-3xl mx-auto">
              这些可爱的小生命正在等待一个温暖的家。每个宠物都有自己独特的性格和故事，或许其中一个正是您命中注定的伙伴。
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/pets" className="inline-flex items-center text-accent hover:text-accent-dark font-medium">
              查看更多宠物 <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Adoption Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">领养流程</h2>
            <p className="text-text-secondary max-w-3xl mx-auto">
              我们简化了领养流程，但保留了必要的审核步骤，确保每个宠物都能找到最适合的家庭。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adoptionSteps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/guide" className="btn btn-primary">
              详细了解领养指南
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">领养故事</h2>
            <p className="text-text-secondary max-w-3xl mx-auto">
              听听那些通过我们平台成功领养宠物的家庭分享他们的故事和体验。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">准备好迎接新家庭成员了吗？</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            无论您是第一次养宠物还是经验丰富的宠物主人，我们都能帮您找到最适合的伙伴。开始您的领养之旅吧！
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pets" className="btn bg-primary text-text-primary hover:bg-primary-dark">
              浏览待领养宠物
            </Link>
            <Link href="/volunteer" className="btn bg-white text-accent hover:bg-gray-100">
              成为志愿者
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 