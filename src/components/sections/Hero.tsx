import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Download, Mail, ArrowRight, Cloud, Server, Shield, GitBranch, Terminal, Database } from 'lucide-react'
import GlowButton from '../ui/GlowButton'
import { personalInfo } from '../../data/constants'

const floatingIcons = [
  { Icon: Cloud, x: '10%', y: '20%', delay: 0, size: 28, color: '#FF9900' },
  { Icon: Server, x: '85%', y: '15%', delay: 1, size: 24, color: '#3B82F6' },
  { Icon: Shield, x: '75%', y: '70%', delay: 2, size: 26, color: '#06B6D4' },
  { Icon: GitBranch, x: '15%', y: '75%', delay: 0.5, size: 22, color: '#F97316' },
  { Icon: Terminal, x: '90%', y: '45%', delay: 1.5, size: 24, color: '#10B981' },
  { Icon: Database, x: '5%', y: '50%', delay: 2.5, size: 22, color: '#8B5CF6' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size, color }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon size={size} color={color} strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* Hero gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] bg-gradient-to-br from-primary via-secondary to-accent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm font-inter text-light-400">
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-title font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-light-100 leading-tight mb-4"
        >
          Hi, I'm{' '}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-space text-xl sm:text-2xl md:text-3xl text-light-400 mb-6 h-10"
        >
          <TypeAnimation
            sequence={[
              'Cloud Engineer ☁️',
              2000,
              'DevOps Engineer ⚙️',
              2000,
              'AWS Enthusiast 🚀',
              2000,
              'CI/CD Automation Expert 🔄',
              2000,
              'Infrastructure as Code 🏗️',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-light-400 font-inter text-base sm:text-lg leading-relaxed mb-10"
        >
          {personalInfo.careerObjective}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <GlowButton
            variant="primary"
            size="lg"
            href="#contact"
            icon={<Mail size={18} />}
          >
            Contact Me
          </GlowButton>
          <GlowButton
            variant="outline"
            size="lg"
            href="#projects"
            icon={<ArrowRight size={18} />}
          >
            View Projects
          </GlowButton>
          <GlowButton
            variant="ghost"
            size="lg"
            href="#"
            icon={<Download size={18} />}
          >
            Download Resume
          </GlowButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '3+', label: 'Projects Built' },
            { value: '7+', label: 'Certifications' },
            { value: '15+', label: 'AWS Services' },
            { value: '10+', label: 'Tools Mastered' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.03 }}
              className="glass rounded-2xl p-4 text-center cursor-default"
            >
              <div className="font-poppins font-bold text-2xl sm:text-3xl gradient-text">
                {stat.value}
              </div>
              <div className="text-light-400 text-sm font-inter mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-light-400/30 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
