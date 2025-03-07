import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiClock, FiCheckCircle, FiXCircle, FiAlertCircle, FiChevronRight, FiCalendar, FiMessageCircle, FiInfo } from 'react-icons/fi'

// 模拟数据
const applications = [
  {
    id: 1,
    petName: '小花',
    petType: '猫咪',
    petImage: 'https://source.unsplash.com/random/300x300/?cat,orange',
    status: 'processing',
    statusText: '审核中',
    appliedDate: '2023-10-15',
    steps: [
      { name: '提交申请', status: 'completed', date: '2023-10-15' },
      { name: '初步审核', status: 'completed', date: '2023-10-17' },
      { name: '电话沟通', status: 'current', date: '预计 2023-10-20' },
      { name: '家访确认', status: 'upcoming', date: '待定' },
      { name: '签署协议', status: 'upcoming', date: '待定' },
      { name: '接宠回家', status: 'upcoming', date: '待定' },
    ],
    messages: [
      {
        id: 1,
        from: 'system',
        content: '您的领养申请已提交，我们会尽快进行审核。',
        date: '2023-10-15 14:30',
      },
      {
        id: 2,
        from: 'staff',
        staffName: '张志愿',
        content: '您的申请已通过初步审核，我们将在近期与您电话沟通，请保持手机畅通。',
        date: '2023-10-17 10:15',
      },
    ],
  },
  {
    id: 2,
    petName: '旺财',
    petType: '狗狗',
    petImage: 'https://source.unsplash.com/random/300x300/?dog,golden',
    status: 'approved',
    statusText: '已通过',
    appliedDate: '2023-09-20',
    steps: [
      { name: '提交申请', status: 'completed', date: '2023-09-20' },
      { name: '初步审核', status: 'completed', date: '2023-09-22' },
      { name: '电话沟通', status: 'completed', date: '2023-09-25' },
      { name: '家访确认', status: 'completed', date: '2023-09-30' },
      { name: '签署协议', status: 'completed', date: '2023-10-05' },
      { name: '接宠回家', status: 'completed', date: '2023-10-10' },
    ],
    messages: [
      {
        id: 1,
        from: 'system',
        content: '您的领养申请已提交，我们会尽快进行审核。',
        date: '2023-09-20 09:45',
      },
      {
        id: 2,
        from: 'staff',
        staffName: '李志愿',
        content: '您的申请已通过初步审核，我们将在近期与您电话沟通，请保持手机畅通。',
        date: '2023-09-22 11:30',
      },
      {
        id: 3,
        from: 'staff',
        staffName: '李志愿',
        content: '电话沟通很顺利，我们将安排家访，具体时间已通过短信通知您。',
        date: '2023-09-25 16:20',
      },
      {
        id: 4,
        from: 'staff',
        staffName: '李志愿',
        content: '家访已完成，您的居住环境非常适合旺财。请于10月5日到我们中心签署领养协议。',
        date: '2023-09-30 18:00',
      },
      {
        id: 5,
        from: 'staff',
        staffName: '李志愿',
        content: '恭喜您成功领养旺财！请记得定期带旺财体检，有任何问题随时联系我们。',
        date: '2023-10-05 15:45',
      },
    ],
  },
  {
    id: 3,
    petName: '豆豆',
    petType: '兔子',
    petImage: 'https://source.unsplash.com/random/300x300/?rabbit,bunny',
    status: 'rejected',
    statusText: '未通过',
    appliedDate: '2023-08-10',
    steps: [
      { name: '提交申请', status: 'completed', date: '2023-08-10' },
      { name: '初步审核', status: 'rejected', date: '2023-08-15' },
      { name: '电话沟通', status: 'cancelled', date: '已取消' },
      { name: '家访确认', status: 'cancelled', date: '已取消' },
      { name: '签署协议', status: 'cancelled', date: '已取消' },
      { name: '接宠回家', status: 'cancelled', date: '已取消' },
    ],
    messages: [
      {
        id: 1,
        from: 'system',
        content: '您的领养申请已提交，我们会尽快进行审核。',
        date: '2023-08-10 13:20',
      },
      {
        id: 2,
        from: 'staff',
        staffName: '王志愿',
        content: '非常抱歉，您的申请未能通过审核。根据您提供的信息，您的住所不允许饲养宠物，这可能会影响到兔子的生活质量。建议您在确保住所允许养宠后再考虑领养。',
        date: '2023-08-15 14:30',
      },
    ],
  },
]

const ApplicationsPage = () => {
  const [selectedApplication, setSelectedApplication] = useState(applications[0])
  const [activeTab, setActiveTab] = useState('progress') // 'progress' or 'messages'

  // 获取状态对应的图标和颜色
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'processing':
        return {
          icon: <FiClock className="h-5 w-5" />,
          color: 'text-blue-500 bg-blue-100',
        }
      case 'approved':
        return {
          icon: <FiCheckCircle className="h-5 w-5" />,
          color: 'text-green-500 bg-green-100',
        }
      case 'rejected':
        return {
          icon: <FiXCircle className="h-5 w-5" />,
          color: 'text-red-500 bg-red-100',
        }
      default:
        return {
          icon: <FiAlertCircle className="h-5 w-5" />,
          color: 'text-gray-500 bg-gray-100',
        }
    }
  }

  // 获取步骤状态对应的样式
  const getStepStatusStyle = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'current':
        return 'bg-blue-500 animate-pulse'
      case 'rejected':
        return 'bg-red-500'
      case 'cancelled':
        return 'bg-gray-300'
      default:
        return 'bg-gray-200'
    }
  }

  return (
    <div className="bg-secondary min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">我的领养申请</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 申请列表 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-text-primary">申请记录</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {applications.map((application) => {
                  const { icon, color } = getStatusInfo(application.status)
                  return (
                    <div
                      key={application.id}
                      className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                        selectedApplication.id === application.id ? 'bg-primary-light' : ''
                      }`}
                      onClick={() => setSelectedApplication(application)}
                    >
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 rounded-lg overflow-hidden mr-4">
                          <Image
                            src={application.petImage}
                            alt={application.petName}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium text-text-primary">
                            {application.petName} ({application.petType})
                          </h3>
                          <div className="flex items-center text-sm text-text-secondary">
                            <FiCalendar className="mr-1" />
                            <span>申请日期: {application.appliedDate}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
                            {icon}
                            <span className="ml-1">{application.statusText}</span>
                          </span>
                          <FiChevronRight className="ml-2 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* 申请详情 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              {/* 宠物信息 */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="relative h-16 w-16 rounded-lg overflow-hidden mr-4">
                    <Image
                      src={selectedApplication.petImage}
                      alt={selectedApplication.petName}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary">
                      {selectedApplication.petName} ({selectedApplication.petType})
                    </h2>
                    <div className="flex items-center mt-1">
                      <span className="text-text-secondary mr-4">
                        申请日期: {selectedApplication.appliedDate}
                      </span>
                      {(() => {
                        const { icon, color } = getStatusInfo(selectedApplication.status)
                        return (
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
                            {icon}
                            <span className="ml-1">{selectedApplication.statusText}</span>
                          </span>
                        )
                      })()}
                    </div>
                  </div>
                </div>
              </div>

              {/* 标签页切换 */}
              <div className="border-b border-gray-100">
                <div className="flex">
                  <button
                    className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                      activeTab === 'progress'
                        ? 'text-accent border-b-2 border-accent'
                        : 'text-text-secondary hover:text-accent'
                    }`}
                    onClick={() => setActiveTab('progress')}
                  >
                    领养进度
                  </button>
                  <button
                    className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                      activeTab === 'messages'
                        ? 'text-accent border-b-2 border-accent'
                        : 'text-text-secondary hover:text-accent'
                    }`}
                    onClick={() => setActiveTab('messages')}
                  >
                    消息记录
                  </button>
                </div>
              </div>

              {/* 内容区域 */}
              <div className="p-6">
                {activeTab === 'progress' ? (
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-6">领养进度追踪</h3>
                    <div className="relative">
                      {/* 进度线 */}
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                      {/* 进度步骤 */}
                      <div className="space-y-8">
                        {selectedApplication.steps.map((step, index) => (
                          <div key={index} className="relative flex items-start">
                            <div className={`absolute left-4 w-4 h-4 rounded-full transform -translate-x-1/2 mt-1.5 ${getStepStatusStyle(step.status)}`}></div>
                            <div className="ml-8">
                              <h4 className="text-md font-medium text-text-primary">{step.name}</h4>
                              <p className="text-sm text-text-secondary mt-1">{step.date}</p>
                              {step.status === 'rejected' && (
                                <p className="text-sm text-red-500 mt-1">
                                  未通过此步骤，申请已终止
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 提示信息 */}
                    {selectedApplication.status === 'processing' && (
                      <div className="mt-8 p-4 bg-blue-50 rounded-lg text-blue-700 text-sm">
                        <p className="flex items-center">
                          <FiInfo className="mr-2" />
                          您的申请正在处理中，请耐心等待。如有疑问，可以通过消息与我们联系。
                        </p>
                      </div>
                    )}
                    {selectedApplication.status === 'approved' && (
                      <div className="mt-8 p-4 bg-green-50 rounded-lg text-green-700 text-sm">
                        <p className="flex items-center">
                          <FiCheckCircle className="mr-2" />
                          恭喜您成功领养！希望您和您的新伙伴有一个美好的生活。
                        </p>
                      </div>
                    )}
                    {selectedApplication.status === 'rejected' && (
                      <div className="mt-8 p-4 bg-red-50 rounded-lg text-red-700 text-sm">
                        <p className="flex items-center">
                          <FiAlertCircle className="mr-2" />
                          很遗憾，您的申请未能通过。您可以查看消息了解具体原因，或联系我们获取更多帮助。
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold text-text-primary">消息记录</h3>
                      {selectedApplication.status === 'processing' && (
                        <button className="btn btn-outline text-sm py-2">
                          <FiMessageCircle className="mr-2" /> 发送消息
                        </button>
                      )}
                    </div>

                    {/* 消息列表 */}
                    <div className="space-y-4">
                      {selectedApplication.messages.map((message) => (
                        <div
                          key={message.id}
                          className={`p-4 rounded-lg ${
                            message.from === 'system'
                              ? 'bg-gray-50'
                              : 'bg-primary-light'
                          }`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">
                              {message.from === 'system'
                                ? '系统通知'
                                : `${message.staffName} (工作人员)`}
                            </span>
                            <span className="text-xs text-text-secondary">
                              {message.date}
                            </span>
                          </div>
                          <p className="text-text-secondary">{message.content}</p>
                        </div>
                      ))}

                      {selectedApplication.messages.length === 0 && (
                        <div className="text-center py-8 text-text-secondary">
                          暂无消息记录
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 新申请按钮 */}
        <div className="mt-8 text-center">
          <Link href="/pets" className="btn btn-accent inline-flex items-center">
            浏览更多宠物
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ApplicationsPage 