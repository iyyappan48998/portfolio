import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { awsServices } from '../../data/constants'

const categoryColors: Record<string, string> = {
  Compute: '#FF9900',
  Storage: '#3ECF8E',
  Security: '#DD344C',
  Networking: '#8C4FFF',
  Database: '#3B48CC',
  Management: '#FF4F8B',
  Integration: '#DD344C',
}

export default function AWSServices() {
  return (
    <SectionWrapper id="aws">
      <SectionHeading title="AWS Expertise" subtitle="Cloud Services" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-light-400 font-inter max-w-2xl mx-auto mb-12 text-lg"
      >
        Hands-on experience with 15+ AWS services, building scalable, secure, and cost-efficient cloud solutions.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {awsServices.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{
              y: -8,
              scale: 1.05,
              boxShadow: `0 20px 40px ${categoryColors[service.category] || '#3B82F6'}20`,
            }}
            className="glass rounded-2xl p-5 text-center cursor-default group transition-all duration-300"
          >
            <div
              className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-xl font-bold font-space transition-all duration-300 group-hover:scale-110"
              style={{
                backgroundColor: `${categoryColors[service.category]}15`,
                color: categoryColors[service.category],
              }}
            >
              {service.name.slice(0, 2)}
            </div>
            <h4 className="font-poppins font-semibold text-light-100 text-sm mb-1">
              {service.name}
            </h4>
            <p className="text-light-400 text-xs font-inter leading-relaxed line-clamp-2">
              {service.description}
            </p>
            <div
              className="mt-3 inline-block px-2 py-0.5 rounded-full text-[10px] font-inter font-medium"
              style={{
                backgroundColor: `${categoryColors[service.category]}15`,
                color: categoryColors[service.category],
              }}
            >
              {service.category}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
