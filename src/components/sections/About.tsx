import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Award, Target, Heart, Briefcase } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { personalInfo } from '../../data/constants'

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading title="About Me" subtitle="Who I Am" />

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left — About text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-3 space-y-6"
        >
          <motion.p variants={fadeUp} className="text-light-400 font-inter text-lg leading-relaxed">
            {personalInfo.about}
          </motion.p>

          {/* Strengths */}
          <motion.div variants={fadeUp}>
            <h3 className="font-poppins font-semibold text-xl text-light-100 mb-4 flex items-center gap-2">
              <Target size={20} className="text-primary" />
              Core Strengths
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {personalInfo.strengths.map((strength, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-light-400 font-inter text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                  {strength}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeUp}>
            <GlassCard hover={false} className="border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-light-100 text-base">
                    {personalInfo.education.degree}
                  </h4>
                  <p className="text-light-400 font-inter text-sm mt-1">
                    {personalInfo.education.institution}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="text-primary font-semibold">
                      {personalInfo.education.percentage}
                    </span>
                    <span className="text-light-400">
                      {personalInfo.education.duration}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Right — Quick facts */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          <motion.h3
            variants={fadeUp}
            className="font-poppins font-semibold text-xl text-light-100 mb-2 flex items-center gap-2"
          >
            <Heart size={20} className="text-accent" />
            Quick Facts
          </motion.h3>

          {personalInfo.quickFacts.map((fact, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard delay={i * 0.05} className="!p-4">
                <div className="flex items-center justify-between">
                  <span className="text-light-400 text-sm font-inter">{fact.label}</span>
                  <span className="text-light-100 text-sm font-inter font-medium">{fact.value}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}

          {/* Passion card */}
          <motion.div variants={fadeUp}>
            <GlassCard className="!p-5 border border-primary/10">
              <div className="flex items-start gap-3">
                <Briefcase size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-poppins font-semibold text-light-100 text-sm mb-1">
                    What Drives Me
                  </h4>
                  <p className="text-light-400 text-sm font-inter leading-relaxed">
                    I'm passionate about building cloud infrastructure that's scalable, secure, and automated.
                    The intersection of DevOps practices and cloud architecture is where I thrive — turning
                    complex deployment challenges into elegant, repeatable solutions.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
