import React from 'react'
import Image from 'next/image'
import { FiStar } from 'react-icons/fi'
import { motion } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  avatar: string
  petName: string
  petType: string
  content: string
  rating: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl shadow-soft p-6"
    >
      <div className="flex items-center mb-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <h3 className="font-bold text-text-primary">{testimonial.name}</h3>
          <p className="text-sm text-text-secondary">
            领养了{testimonial.petType} {testimonial.petName}
          </p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating
                ? 'text-primary fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-text-secondary italic">"{testimonial.content}"</p>
    </motion.div>
  )
}

export default TestimonialCard 