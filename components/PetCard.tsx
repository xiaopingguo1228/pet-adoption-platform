import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiHeart } from 'react-icons/fi'
import { motion } from 'framer-motion'

interface Pet {
  id: number
  name: string
  type: string
  breed: string
  age: string
  gender: string
  description: string
  imageUrl: string
}

interface PetCardProps {
  pet: Pet
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="card h-full flex flex-col"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={pet.imageUrl}
          alt={pet.name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:bg-primary transition-colors duration-200">
          <FiHeart className="h-5 w-5 text-accent" />
        </button>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-text-primary">{pet.name}</h3>
          <span className="bg-primary-light text-accent px-2 py-1 rounded-full text-xs font-medium">
            {pet.type}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-3 text-sm text-text-secondary">
          <div>品种: {pet.breed}</div>
          <div>年龄: {pet.age}</div>
          <div>性别: {pet.gender}</div>
        </div>
        
        <p className="text-text-secondary text-sm mb-4 line-clamp-2 flex-grow">
          {pet.description}
        </p>
        
        <Link
          href={`/pets/${pet.id}`}
          className="btn btn-accent w-full text-center"
        >
          了解详情
        </Link>
      </div>
    </motion.div>
  )
}

export default PetCard 