import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiHeart, FiHome, FiUsers, FiAward, FiCalendar } from 'react-icons/fi'
import { motion } from 'framer-motion'

// 团队成员数据
const teamMembers = [
  {
    name: '张明',
    role: '创始人 & CEO',
    bio: '张明拥有10年的动物保护经验，曾在多家动物保护组织工作。他创立暖心宠物平台的初衷是希望通过科技手段，让更多流浪动物找到温暖的家。',
    image: 'https://source.unsplash.com/random/300x300/?person,man',
  },
  {
    name: '李华',
    role: '运营总监',
    bio: '李华负责平台的日常运营和志愿者管理。她热爱动物，家中养有3只猫和2只狗，都是从收容所领养的。她相信每个动物都值得被爱和尊重。',
    image: 'https://source.unsplash.com/random/300x300/?person,woman',
  },
  {
    name: '王强',
    role: '兽医顾问',
    bio: '王强是一名经验丰富的兽医，负责评估平台上所有宠物的健康状况，并为领养家庭提供专业的医疗建议。他致力于提高流浪动物的福利水平。',
    image: 'https://source.unsplash.com/random/300x300/?person,doctor',
  },
  {
    name: '赵琳',
    role: '社区经理',
    bio: '赵琳负责平台的社区建设和用户互动。她擅长组织各类线上线下活动，连接爱心人士和需要帮助的动物，创造更多领养机会。',
    image: 'https://source.unsplash.com/random/300x300/?person,woman,smile',
  },
]

// 合作伙伴数据
const partners = [
  {
    name: '城市动物保护协会',
    logo: 'https://source.unsplash.com/random/200x100/?logo,animal',
  },
  {
    name: '爱心宠物医院',
    logo: 'https://source.unsplash.com/random/200x100/?logo,pet,hospital',
  },
  {
    name: '绿色家园基金会',
    logo: 'https://source.unsplash.com/random/200x100/?logo,green',
  },
  {
    name: '宠物食品有限公司',
    logo: 'https://source.unsplash.com/random/200x100/?logo,pet,food',
  },
  {
    name: '城市志愿者联盟',
    logo: 'https://source.unsplash.com/random/200x100/?logo,volunteer',
  },
  {
    name: '爱心教育中心',
    logo: 'https://source.unsplash.com/random/200x100/?logo,education',
  },
]

// 里程碑数据
const milestones = [
  {
    year: '2018',
    title: '平台创立',
    description: '暖心宠物平台正式成立，开始在北京地区提供宠物领养服务。',
    icon: <FiHeart className="h-6 w-6 text-accent" />,
  },
  {
    year: '2019',
    title: '扩展服务区域',
    description: '服务范围扩展至上海、广州等一线城市，累计帮助500+宠物找到新家。',
    icon: <FiHome className="h-6 w-6 text-accent" />,
  },
  {
    year: '2020',
    title: '志愿者网络建立',
    description: '建立全国志愿者网络，招募1000+志愿者参与救助和家访工作。',
    icon: <FiUsers className="h-6 w-6 text-accent" />,
  },
  {
    year: '2021',
    title: '获得行业认可',
    description: '获得"最佳宠物福利平台"奖项，成为行业标杆。',
    icon: <FiAward className="h-6 w-6 text-accent" />,
  },
  {
    year: '2022',
    title: '全国覆盖',
    description: '服务范围覆盖全国50+城市，累计成功领养案例突破5000例。',
    icon: <FiCalendar className="h-6 w-6 text-accent" />,
  },
  {
    year: '2023',
    title: '平台升级',
    description: '推出全新平台，引入AI匹配技术，提升用户体验和领养成功率。',
    icon: <FiHeart className="h-6 w-6 text-accent" />,
  },
]

const AboutPage = () => {
  return (
    <div className="bg-secondary min-h-screen">
      {/* 头部横幅 */}
      <div className="relative bg-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <p className="text-lg max-w-3xl mx-auto">
            暖心宠物领养平台致力于为每一个流浪动物找到温暖的家，让爱与责任传递下去。
          </p>
        </div>
      </div>

      {/* 我们的使命 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">我们的使命</h2>
              <p className="text-text-secondary mb-6">
                暖心宠物领养平台成立于2018年，是一家致力于流浪动物救助和领养的非营利组织。我们的使命是通过科技手段连接爱心人士和需要家的动物，减少流浪动物数量，提高动物福利水平。
              </p>
              <p className="text-text-secondary mb-6">
                我们相信，每一个生命都值得被尊重和关爱。通过建立专业、透明、便捷的领养平台，我们希望改变传统领养方式中的信息不对称和流程繁琐等问题，让更多人参与到领养而非购买的行动中来。
              </p>
              <p className="text-text-secondary">
                截至目前，我们已经帮助超过5000只流浪动物找到了温暖的家，并建立了覆盖全国50多个城市的志愿者网络，为流浪动物提供救助、医疗和临时安置服务。
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-medium">
              <Image
                src="https://source.unsplash.com/random/800x600/?animal,rescue"
                alt="救助动物"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 我们的价值观 */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">我们的价值观</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-soft p-6 text-center"
            >
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiHeart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">关爱生命</h3>
              <p className="text-text-secondary">
                我们尊重每一个生命，无论其品种、年龄或健康状况。我们相信每个动物都应该得到关爱和尊重，都有权利拥有一个温暖的家。
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-soft p-6 text-center"
            >
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiUsers className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">责任领养</h3>
              <p className="text-text-secondary">
                我们倡导负责任的领养文化，确保每一次领养都是经过深思熟虑的决定。我们严格筛选领养家庭，确保动物能够获得长期稳定的照顾。
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-soft p-6 text-center"
            >
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiHome className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">社区参与</h3>
              <p className="text-text-secondary">
                我们鼓励社区参与，通过教育和宣传活动提高公众对流浪动物问题的认识。我们相信，只有全社会共同努力，才能从根本上解决流浪动物问题。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">发展历程</h2>
          
          <div className="relative">
            {/* 连接线 */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-light -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* 年份圆点 */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold z-10 hidden md:flex">
                      {milestone.year}
                    </div>
                    
                    {/* 内容卡片 */}
                    <div className={`bg-white rounded-2xl shadow-soft p-6 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <div className="flex items-center mb-4">
                        <div className="bg-primary-light p-3 rounded-full mr-4">
                          {milestone.icon}
                        </div>
                        <div>
                          <span className="block text-sm text-accent font-medium md:hidden">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-bold text-text-primary">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-text-secondary">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">我们的团队</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-soft overflow-hidden"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-1">{member.name}</h3>
                  <p className="text-accent mb-4">{member.role}</p>
                  <p className="text-text-secondary text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作伙伴 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">合作伙伴</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl p-4 flex items-center justify-center h-24"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 加入我们 */}
      <section className="py-16 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">加入我们的行动</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            无论是领养宠物、成为志愿者，还是提供捐赠支持，您都可以为改善流浪动物的生活贡献一份力量。
            一起行动，为每个生命创造更美好的未来。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pets" className="btn bg-primary text-text-primary hover:bg-primary-dark">
              浏览待领养宠物
            </Link>
            <Link href="/volunteer" className="btn bg-white text-accent hover:bg-gray-100">
              成为志愿者
            </Link>
            <Link href="/donate" className="btn bg-white text-accent hover:bg-gray-100">
              爱心捐赠
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage 