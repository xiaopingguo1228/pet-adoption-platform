import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Step {
  id: number
  title: string
  description: string
  icon: ReactNode
}

interface StepCardProps {
  step: Step
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl shadow-soft p-6 flex flex-col items-center text-center"
    >
      <div className="bg-primary-light p-4 rounded-full mb-4">
        {step.icon}
      </div>
      <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mb-4">
        {step.id}
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-2">{step.title}</h3>
      <p className="text-text-secondary">{step.description}</p>
    </motion.div>
  )
}

export default StepCard 