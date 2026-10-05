import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
  glow?: string
}

export default function GlassCard({ children, className = '', hover = true, delay = 0, glow }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hover
          ? {
              y: -8,
              boxShadow: glow
                ? `0 20px 60px ${glow}25, 0 0 0 1px ${glow}20`
                : '0 20px 60px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)',
            }
          : undefined
      }
      className={`glass rounded-2xl p-6 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  )
}
