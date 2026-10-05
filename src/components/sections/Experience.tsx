import { motion } from 'framer-motion'
import { BookOpen, FlaskConical, Cloud, Code, Rocket } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const experiences = [
  {
    icon: Cloud,
    title: 'AWS Cloud Practice',
    subtitle: 'Self-Directed Learning & Labs',
    description:
      'Designed and deployed serverless architectures using Lambda, API Gateway, S3, and DynamoDB. Practiced VPC configurations, IAM policy creation, and CloudWatch monitoring setups.',
    highlights: ['EC2 Instance Management', 'S3 Static Hosting', 'IAM Role Configuration', 'VPC Network Design'],
    color: '#FF9900',
  },
  {
    icon: Code,
    title: 'CI/CD Pipeline Development',
    subtitle: 'GitHub Actions & Jenkins',
    description:
      'Built end-to-end CI/CD pipelines automating build, test, and deployment stages. Gained hands-on experience integrating GitHub Actions with Jenkins for multi-stage deployment workflows.',
    highlights: ['GitHub Actions Workflows', 'Jenkins Job Configuration', 'Automated Testing', 'Deployment Automation'],
    color: '#3B82F6',
  },
  {
    icon: FlaskConical,
    title: 'Research & Optimization',
    subtitle: 'Cloud Computing Research',
    description:
      'Researched energy-efficient virtual machine placement using Ant Colony Optimization algorithms, exploring sustainable approaches to cloud resource management.',
    highlights: ['ACO Algorithm Implementation', 'VM Placement Optimization', 'Energy Efficiency Analysis', 'Research Methodology'],
    color: '#10B981',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    subtitle: 'Certifications & Skill Building',
    description:
      'Actively pursuing industry certifications and completing structured learning paths across AWS, Docker, Python, web development, and AI/ML from platforms like Infosys, IBM, and ServiceNow.',
    highlights: ['AWS CCP Certification', 'Docker Associate (In Progress)', 'Python & Web Dev', 'Generative AI'],
    color: '#8B5CF6',
  },
  {
    icon: Rocket,
    title: 'Infrastructure as Code',
    subtitle: 'Terraform & CloudFormation',
    description:
      'Practiced provisioning and managing cloud resources through code using Terraform and AWS CloudFormation templates, establishing repeatable infrastructure deployment patterns.',
    highlights: ['Terraform Modules', 'CloudFormation Templates', 'Resource Provisioning', 'State Management'],
    color: '#06B6D4',
  },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading title="Hands-On Experience" subtitle="Learning Journey" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-light-400 font-inter max-w-2xl mx-auto mb-12"
      >
        As an aspiring DevOps engineer, my experience comes from intensive hands-on labs,
        personal projects, and structured certification paths — building real-world cloud
        skills from the ground up.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, i) => {
          const Icon = exp.icon
          return (
            <GlassCard key={exp.title} delay={i * 0.1} glow={exp.color}>
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${exp.color}15` }}
                >
                  <Icon size={22} style={{ color: exp.color }} />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-light-100 text-base">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-inter" style={{ color: exp.color }}>
                    {exp.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-light-400 text-sm font-inter leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2.5 py-1 rounded-lg text-xs font-inter font-medium bg-white/5 text-light-400"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </GlassCard>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
