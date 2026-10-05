import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { tools } from '../../data/constants'

export default function Tools() {
  return (
    <SectionWrapper id="tools">
      <SectionHeading title="Tools & Technologies" subtitle="My Toolkit" />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            whileHover={{
              y: -10,
              scale: 1.1,
              boxShadow: `0 15px 30px ${tool.color}25`,
            }}
            className="glass rounded-2xl p-4 flex flex-col items-center gap-3 cursor-default group transition-all duration-300"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold font-space transition-all duration-300 group-hover:scale-110"
              style={{
                backgroundColor: `${tool.color}15`,
                color: tool.color,
              }}
            >
              {tool.name.slice(0, 2)}
            </div>
            <span className="text-light-400 text-xs font-inter font-medium text-center group-hover:text-light-100 transition-colors">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
