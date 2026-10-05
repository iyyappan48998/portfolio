import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { timelineItems } from '../../data/constants'

const typeColors: Record<string, string> = {
  education: '#3B82F6',
  certification: '#10B981',
  project: '#F97316',
  training: '#8B5CF6',
}

export default function Timeline() {
  return (
    <SectionWrapper id="timeline">
      <SectionHeading title="My Journey" subtitle="Timeline" />

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-20" />

        {timelineItems.map((item, i) => {
          const Icon = item.icon
          const isLeft = i % 2 === 0
          const color = typeColors[item.type] || '#3B82F6'

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-start mb-10 md:mb-12 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${color}20`, border: `2px solid ${color}40` }}
                >
                  <Icon size={18} style={{ color }} />
                </motion.div>
              </div>

              {/* Content card */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                  isLeft ? 'md:pr-0' : 'md:pl-0'
                }`}
              >
                <motion.div
                  whileHover={{ y: -4, boxShadow: `0 15px 40px ${color}10` }}
                  className="glass rounded-2xl p-5 transition-all duration-300"
                >
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-inter font-semibold mb-3"
                    style={{ backgroundColor: `${color}15`, color }}
                  >
                    {item.year}
                  </span>
                  <h3 className="font-poppins font-semibold text-light-100 text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-inter mb-2" style={{ color }}>
                    {item.subtitle}
                  </p>
                  <p className="text-light-400 text-sm font-inter leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
