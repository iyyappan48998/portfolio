import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, Loader2 } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { personalInfo } from '../../data/constants'

const contactInfo = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/iyyappan05devops', href: personalInfo.linkedin },
]

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setFormState({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <SectionWrapper id="contact">
      <SectionHeading title="Get In Touch" subtitle="Contact Me" />

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Contact info */}
        <div className="lg:col-span-2 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-light-400 font-inter text-base leading-relaxed mb-6"
          >
            I'm always open to discussing cloud architecture, DevOps practices, new opportunities,
            or just connecting with fellow tech enthusiasts. Feel free to reach out!
          </motion.p>

          {contactInfo.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 glass rounded-xl group cursor-pointer transition-all duration-300 hover:border-primary/20"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-light-400 text-xs font-inter">{item.label}</p>
                  <p className="text-light-100 text-sm font-inter font-medium">{item.value}</p>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Contact form */}
        <div className="lg:col-span-3">
          <GlassCard hover={false} className="!p-6 md:!p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-light-400 text-sm font-inter mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-white/5 text-light-100 font-inter text-sm placeholder-light-400/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-light-400 text-sm font-inter mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-white/5 text-light-100 font-inter text-sm placeholder-light-400/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-light-400 text-sm font-inter mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-white/5 text-light-100 font-inter text-sm placeholder-light-400/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="Job Opportunity / Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-light-400 text-sm font-inter mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-white/5 text-light-100 font-inter text-sm placeholder-light-400/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-inter font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  status === 'sent'
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]'
                } disabled:opacity-70`}
              >
                {status === 'idle' && (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                )}
              </motion.button>
            </form>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  )
}
