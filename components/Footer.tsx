import React from 'react'
import Link from 'next/link'
import { FiHeart, FiInstagram, FiTwitter, FiFacebook, FiMail } from 'react-icons/fi'

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <img
                className="h-10 w-auto"
                src="/logo-white.svg"
                alt="暖心宠物领养平台"
              />
              <span className="ml-3 text-xl font-display font-bold">暖心宠物</span>
            </Link>
            <p className="mt-4 text-sm">
              我们致力于为每一个流浪动物找到温暖的家，让爱与关怀传递下去。
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-text-light hover:text-primary transition-colors duration-200">
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-light hover:text-primary transition-colors duration-200">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-light hover:text-primary transition-colors duration-200">
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="mailto:contact@warmheart-pets.com" className="text-text-light hover:text-primary transition-colors duration-200">
                <FiMail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-medium">快速链接</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors duration-200">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/pets" className="text-sm hover:text-primary transition-colors duration-200">
                  待领养宠物
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-sm hover:text-primary transition-colors duration-200">
                  领养指南
                </Link>
              </li>
              <li>
                <Link href="/applications" className="text-sm hover:text-primary transition-colors duration-200">
                  我的申请
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-medium">帮助中心</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/faq" className="text-sm hover:text-primary transition-colors duration-200">
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors duration-200">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-primary transition-colors duration-200">
                  服务条款
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-primary transition-colors duration-200">
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-medium">订阅我们</h3>
            <p className="mt-4 text-sm">
              订阅我们的新闻通讯，获取最新的领养信息和活动通知。
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="您的邮箱地址"
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-text-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-text-primary px-4 py-2 rounded-r-lg hover:bg-primary-dark transition-colors duration-200"
                >
                  订阅
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-accent-light text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} 暖心宠物领养平台. 保留所有权利.
          </p>
          <p className="text-sm mt-2 flex items-center justify-center">
            用爱创造 <FiHeart className="mx-1 text-primary" /> 为每个生命寻找家
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 