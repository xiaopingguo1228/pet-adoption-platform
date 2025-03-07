import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiCheckCircle, FiAlertTriangle, FiHelpCircle, FiFileText, FiHome } from 'react-icons/fi'

const GuidePage = () => {
  // 领养流程步骤
  const adoptionSteps = [
    {
      id: 1,
      title: '浏览宠物信息',
      description: '在我们的平台上浏览各种待领养的宠物，了解它们的背景、性格和需求，找到与您生活方式相匹配的宠物。',
      icon: <FiFileText className="h-8 w-8 text-accent" />,
    },
    {
      id: 2,
      title: '提交领养申请',
      description: '找到心仪的宠物后，填写领养申请表，提供您的基本信息、居住环境和养宠经验等。我们会对您的申请进行初步审核。',
      icon: <FiFileText className="h-8 w-8 text-accent" />,
    },
    {
      id: 3,
      title: '电话沟通',
      description: '申请通过初审后，我们的工作人员会与您电话沟通，了解更多关于您的情况，并回答您可能有的问题。',
      icon: <FiHelpCircle className="h-8 w-8 text-accent" />,
    },
    {
      id: 4,
      title: '家访确认',
      description: '电话沟通顺利后，我们会安排工作人员进行家访，确保您能为宠物提供安全、舒适的生活环境。',
      icon: <FiHome className="h-8 w-8 text-accent" />,
    },
    {
      id: 5,
      title: '签署领养协议',
      description: '家访通过后，您将签署领养协议，承诺为宠物提供良好的照顾和生活条件。',
      icon: <FiFileText className="h-8 w-8 text-accent" />,
    },
    {
      id: 6,
      title: '接宠回家',
      description: '完成所有手续后，您可以接宠物回家，开始新的生活。我们会提供必要的物资和建议，帮助宠物适应新环境。',
      icon: <FiHome className="h-8 w-8 text-accent" />,
    },
    {
      id: 7,
      title: '定期回访',
      description: '领养后，我们会进行定期回访或电话跟进，了解宠物的适应情况，并提供必要的支持和建议。',
      icon: <FiCheckCircle className="h-8 w-8 text-accent" />,
    },
  ]

  // 领养须知
  const adoptionNotes = [
    {
      title: '领养资格',
      items: [
        '年满18周岁，有稳定的工作和收入',
        '有固定的居住场所，且允许养宠',
        '家庭成员同意并支持领养决定',
        '有足够的时间和精力照顾宠物',
        '愿意承担宠物的医疗、食品等各项费用',
      ],
    },
    {
      title: '领养责任',
      items: [
        '为宠物提供健康的食物和清洁的饮水',
        '定期带宠物进行健康检查和疫苗接种',
        '为宠物提供安全、舒适的生活环境',
        '每天花时间陪伴和锻炼宠物',
        '遵守当地养宠规定，如遛狗牵绳、清理排泄物等',
        '不得遗弃、虐待或转送宠物',
      ],
    },
    {
      title: '领养费用',
      items: [
        '领养费：200-500元不等（用于宠物的疫苗、绝育等医疗费用）',
        '日常饲养费：食品、用品等，每月约300-1000元',
        '医疗费：定期体检、疫苗、驱虫等，每年约1000-3000元',
        '紧急医疗费：意外伤病治疗，费用不定',
      ],
    },
  ]

  // 常见问题
  const faqs = [
    {
      question: '领养和购买宠物有什么区别？',
      answer: '领养是给予流浪或被遗弃的动物一个新家，不仅能够拯救一个生命，还能减少流浪动物数量。购买则是从繁殖场或宠物店获取宠物，可能间接支持不人道的繁殖行为。领养通常费用较低，且动物往往已接种疫苗和绝育。',
    },
    {
      question: '我能领养特定品种的宠物吗？',
      answer: '可以，但需要耐心等待。我们的平台上有各种品种的宠物，但特定品种的供应可能有限。我们建议您关注平台更新，或者考虑开放您的选择范围，因为混血宠物通常更健康，性格也很好。',
    },
    {
      question: '领养后如果发现不适应怎么办？',
      answer: '宠物适应新环境需要时间，通常需要几周到几个月。如果确实出现严重的不适应问题，请联系我们的工作人员，我们会提供专业建议或必要的帮助。我们不鼓励轻易放弃，但在极端情况下，我们会接受宠物退回，以确保动物福利。',
    },
    {
      question: '领养前需要准备什么？',
      answer: '您需要准备基本的宠物用品，如食盆、水盆、食物、窝/笼子、玩具、厕所/猫砂盆等。此外，为宠物准备一个安静、安全的适应空间也很重要。我们会在领养前提供详细的准备清单。',
    },
    {
      question: '已经有宠物了，可以再领养吗？',
      answer: '可以，但需要考虑现有宠物的性格和接受度。我们建议选择与现有宠物性格相容的新成员，并遵循正确的介绍方法。在某些情况下，我们会建议您带现有宠物来与潜在的新成员见面，评估它们的相处情况。',
    },
  ]

  return (
    <div className="bg-secondary min-h-screen">
      {/* 头部横幅 */}
      <div className="relative bg-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">领养指南</h1>
          <p className="text-lg max-w-3xl mx-auto">
            领养是一个慎重的决定，也是一个美好的开始。我们希望通过这份指南，帮助您了解领养流程和注意事项，为您和宠物的幸福生活做好准备。
          </p>
        </div>
      </div>

      {/* 领养流程 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">领养流程</h2>
          
          <div className="relative">
            {/* 连接线 */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-light -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {adoptionSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* 步骤圆点 */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold z-10 hidden md:flex">
                      {step.id}
                    </div>
                    
                    {/* 内容卡片 */}
                    <div className={`bg-white rounded-2xl shadow-soft p-6 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <div className="flex items-center mb-4">
                        <div className="bg-primary-light p-3 rounded-full mr-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
                      </div>
                      <p className="text-text-secondary">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 领养须知 */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">领养须知</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adoptionNotes.map((note, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                  <FiAlertTriangle className="text-accent mr-2" /> {note.title}
                </h3>
                <ul className="space-y-2">
                  {note.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">常见问题</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-secondary rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2 flex items-center">
                  <FiHelpCircle className="text-accent mr-2" /> {faq.question}
                </h3>
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 号召行动 */}
      <section className="py-16 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">准备好开始领养之旅了吗？</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            每一次领养都是一个生命的新开始。如果您已经做好准备，欢迎浏览我们的待领养宠物，找到您命中注定的伙伴。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pets" className="btn bg-primary text-text-primary hover:bg-primary-dark">
              浏览待领养宠物
            </Link>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100">
              联系我们咨询
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GuidePage 