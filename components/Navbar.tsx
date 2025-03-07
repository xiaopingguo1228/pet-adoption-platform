import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '待领养宠物', path: '/pets' },
    { name: '领养指南', path: '/guide' },
    { name: '我的申请', path: '/applications' },
    { name: '关于我们', path: '/about' },
  ]

  const isActive = (path: string) => router.pathname === path

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto"
                src="/logo.svg"
                alt="暖心宠物领养平台"
              />
              <span className="ml-3 text-xl font-display font-bold text-accent">暖心宠物</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/login" className="btn btn-outline">
              登录
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-accent focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1 px-4 sm:px-6 lg:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-2 font-medium ${
                  isActive(link.path)
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block py-2 mt-4 text-center btn btn-outline"
              onClick={() => setIsMenuOpen(false)}
            >
              登录
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 