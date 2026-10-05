import { motion } from 'framer-motion'
import { Award, ExternalLink, Clock } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { certifications } from '../../data/constants'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading title="Certifications" subtitle="Credentials & Achievements" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{
              y: -8,
              boxShadow: `0 20px 60px ${cert.color}20, 0 0 0 1px ${cert.color}15`,
            }}
            className="glass rounded-2xl p-6 relative overflow-hidden group transition-all duration-500"
          >
            {/* Status indicator */}
            <div className="absolute top-4 right-4">
              {cert.status === 'completed' ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-inter font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Completed
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-inter font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Clock size={10} />
                  In Progress
                </span>
              )}
            </div>

            {/* Badge icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${cert.color}15` }}
            >
              <Award size={26} style={{ color: cert.color }} />
            </div>

            {/* Content */}
            <h3 className="font-poppins font-semibold text-light-100 text-base mb-2 pr-20">
              {cert.title}
            </h3>
            <p className="text-light-400 text-sm font-inter mb-1">{cert.provider}</p>
            <p className="text-sm font-inter" style={{ color: cert.color }}>
              {cert.date}
            </p>

            {/* Decorative gradient */}
            <div
              className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle, ${cert.color}, transparent)` }}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
