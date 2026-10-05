import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { skillCategories } from '../../data/constants'

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-light-400 text-sm font-inter">{name}</span>
        <span className="text-light-400 text-xs font-inter">{level}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-dark-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 12px ${color}40`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading title="Technical Skills" subtitle="What I Work With" />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillCategories.map((category, catIdx) => {
          const Icon = category.icon
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.08 }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 60px ${category.color}15, 0 0 0 1px ${category.color}15`,
              }}
              className="glass rounded-2xl p-6 transition-all duration-500"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <Icon size={20} style={{ color: category.color }} />
                </div>
                <h3 className="font-poppins font-semibold text-light-100 text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={skillIdx}
                    color={category.color}
                  />
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
