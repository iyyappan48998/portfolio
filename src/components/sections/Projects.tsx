import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ChevronUp, Layers, AlertTriangle, CheckCircle, Wrench } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import GlowButton from '../ui/GlowButton'
import { projects } from '../../data/constants'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="glass rounded-3xl overflow-hidden group"
    >
      {/* Gradient header bar */}
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6 md:p-8">
        {/* Title and subtitle */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-poppins font-bold text-xl md:text-2xl text-light-100 mb-1">
              {project.title}
            </h3>
            <p className="text-primary font-inter text-sm font-medium">{project.subtitle}</p>
          </div>
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center opacity-80`}>
            <Layers size={22} className="text-white" />
          </div>
        </div>

        {/* Overview */}
        <p className="text-light-400 font-inter text-sm leading-relaxed mb-5">
          {project.overview}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded-full text-xs font-inter font-medium bg-primary/10 text-primary border border-primary/20"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="space-y-5 pt-4 border-t border-white/5">
                {/* Problem */}
                <div>
                  <h4 className="flex items-center gap-2 font-poppins font-semibold text-sm text-light-100 mb-2">
                    <AlertTriangle size={16} className="text-amber-400" />
                    Problem Statement
                  </h4>
                  <p className="text-light-400 text-sm font-inter leading-relaxed">{project.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="flex items-center gap-2 font-poppins font-semibold text-sm text-light-100 mb-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Solution
                  </h4>
                  <p className="text-light-400 text-sm font-inter leading-relaxed">{project.solution}</p>
                </div>

                {/* Architecture */}
                <div>
                  <h4 className="flex items-center gap-2 font-poppins font-semibold text-sm text-light-100 mb-2">
                    <Layers size={16} className="text-primary" />
                    Architecture
                  </h4>
                  <div className="glass-light rounded-xl p-4">
                    <p className="text-light-400 text-sm font-mono leading-relaxed">{project.architecture}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="flex items-center gap-2 font-poppins font-semibold text-sm text-light-100 mb-2">
                    <Wrench size={16} className="text-accent" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-light-400 text-sm font-inter">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="font-poppins font-semibold text-sm text-light-100 mb-2">
                    Challenges & Learnings
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-light-400 text-sm font-inter">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="glass-light rounded-xl p-4 border-l-4 border-green-500">
                  <h4 className="font-poppins font-semibold text-sm text-green-400 mb-1">Outcome</h4>
                  <p className="text-light-400 text-sm font-inter">{project.outcome}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action buttons */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
          <div className="flex gap-3">
            {project.github && (
              <GlowButton variant="outline" size="sm" href={project.github} icon={<Github size={16} />}>
                Code
              </GlowButton>
            )}
            {project.demo && (
              <GlowButton variant="primary" size="sm" href={project.demo} icon={<ExternalLink size={16} />}>
                Live Demo
              </GlowButton>
            )}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-primary text-sm font-inter font-medium hover:text-secondary transition-colors cursor-pointer"
          >
            {expanded ? 'Show Less' : 'View Details'}
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading title="Featured Projects" subtitle="What I've Built" />

      <div className="space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
