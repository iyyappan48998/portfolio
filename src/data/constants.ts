import {
  Cloud,
  Server,
  Shield,
  Database,
  GitBranch,
  Terminal,
  Monitor,
  Globe,
  Lock,
  Cpu,
  HardDrive,
  Layers,
  Code,
  Container,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export interface Skill {
  name: string
  level: number
  icon?: LucideIcon
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  color: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    color: '#FF9900',
    skills: [
      { name: 'AWS (EC2, S3, IAM, VPC, RDS, Lambda)', level: 80 },
      { name: 'Azure (Basics)', level: 40 },
      { name: 'CloudWatch & Monitoring', level: 70 },
      { name: 'CloudFormation', level: 65 },
    ],
  },
  {
    title: 'DevOps & CI/CD',
    icon: Workflow,
    color: '#3B82F6',
    skills: [
      { name: 'Jenkins', level: 75 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'GitLab CI/CD', level: 60 },
      { name: 'Docker', level: 65 },
    ],
  },
  {
    title: 'Infrastructure as Code',
    icon: Layers,
    color: '#7C3AED',
    skills: [
      { name: 'Terraform', level: 70 },
      { name: 'AWS CloudFormation', level: 65 },
    ],
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    color: '#F97316',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
    ],
  },
  {
    title: 'Scripting & Automation',
    icon: Terminal,
    color: '#10B981',
    skills: [
      { name: 'Bash', level: 75 },
      { name: 'Python', level: 65 },
      { name: 'PowerShell', level: 55 },
    ],
  },
  {
    title: 'Operating Systems',
    icon: Monitor,
    color: '#EAB308',
    skills: [
      { name: 'Linux (Ubuntu)', level: 80 },
      { name: 'Windows Server', level: 60 },
    ],
  },
  {
    title: 'Networking',
    icon: Globe,
    color: '#06B6D4',
    skills: [
      { name: 'TCP/IP & DNS', level: 70 },
      { name: 'HTTP/S & Load Balancers', level: 70 },
      { name: 'Firewalls & VPN', level: 60 },
    ],
  },
  {
    title: 'Security',
    icon: Shield,
    color: '#EF4444',
    skills: [
      { name: 'IAM Policies', level: 75 },
      { name: 'Security Groups', level: 75 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: '#8B5CF6',
    skills: [
      { name: 'MySQL', level: 65 },
      { name: 'PostgreSQL', level: 60 },
      { name: 'MongoDB', level: 55 },
      { name: 'DynamoDB', level: 60 },
    ],
  },
  {
    title: 'Programming',
    icon: Code,
    color: '#EC4899',
    skills: [
      { name: 'HTML & CSS', level: 70 },
      { name: 'JavaScript', level: 60 },
      { name: 'Python', level: 65 },
    ],
  },
]

export interface AWSService {
  name: string
  description: string
  category: string
  color: string
}

export const awsServices: AWSService[] = [
  { name: 'EC2', description: 'Virtual servers in the cloud for scalable compute capacity', category: 'Compute', color: '#FF9900' },
  { name: 'S3', description: 'Scalable object storage for data backup and content delivery', category: 'Storage', color: '#3ECF8E' },
  { name: 'IAM', description: 'Securely manage access to AWS services and resources', category: 'Security', color: '#DD344C' },
  { name: 'VPC', description: 'Isolated virtual network for launching AWS resources', category: 'Networking', color: '#8C4FFF' },
  { name: 'RDS', description: 'Managed relational database service for MySQL, PostgreSQL', category: 'Database', color: '#3B48CC' },
  { name: 'Lambda', description: 'Run code without provisioning servers — serverless compute', category: 'Compute', color: '#FF9900' },
  { name: 'CloudWatch', description: 'Monitor and observe resources with logs, metrics, and alarms', category: 'Management', color: '#FF4F8B' },
  { name: 'Route 53', description: 'Scalable DNS and domain name registration service', category: 'Networking', color: '#8C4FFF' },
  { name: 'CloudFormation', description: 'Model and provision AWS resources using templates', category: 'Management', color: '#FF4F8B' },
  { name: 'ELB', description: 'Distribute incoming traffic across multiple targets', category: 'Networking', color: '#8C4FFF' },
  { name: 'Auto Scaling', description: 'Automatically adjust capacity to maintain performance', category: 'Compute', color: '#FF9900' },
  { name: 'DynamoDB', description: 'Fast, flexible NoSQL database for any scale', category: 'Database', color: '#3B48CC' },
  { name: 'API Gateway', description: 'Create, publish, and manage APIs at any scale', category: 'Networking', color: '#8C4FFF' },
  { name: 'SNS', description: 'Pub/sub messaging for microservices and serverless apps', category: 'Integration', color: '#DD344C' },
  { name: 'SQS', description: 'Fully managed message queuing for decoupled systems', category: 'Integration', color: '#DD344C' },
]

export interface Project {
  title: string
  subtitle: string
  overview: string
  problem: string
  solution: string
  architecture: string
  tools: string[]
  features: string[]
  challenges: string[]
  outcome: string
  github?: string
  demo?: string
  gradient: string
}

export const projects: Project[] = [
  {
    title: 'CI/CD Pipeline Automation',
    subtitle: 'GitHub Actions & Jenkins',
    overview: 'An end-to-end CI/CD pipeline that automates the complete software delivery lifecycle — from code commit to production deployment — using GitHub Actions and Jenkins.',
    problem: 'Manual deployment processes were time-consuming, error-prone, and inconsistent, leading to delayed releases and integration issues that went undetected until late in the cycle.',
    solution: 'Designed an automated pipeline triggered on every push to the main branch. GitHub Actions handles build and test stages, while Jenkins orchestrates downstream deployment, ensuring consistent and repeatable releases.',
    architecture: 'Developer pushes code → GitHub Actions triggers CI (build + tests) → On success, Jenkins picks up the artifact → Jenkins deploys to staging → Validation → Production deployment.',
    tools: ['GitHub Actions', 'Jenkins', 'Git', 'Docker', 'Bash', 'YAML'],
    features: [
      'Automated build and test on every commit',
      'Integration issue detection before deployment',
      'Downstream deployment orchestration via Jenkins',
      'Reduced manual release effort significantly',
      'Consistent, repeatable deployment process',
    ],
    challenges: [
      'Integrating GitHub Actions with Jenkins seamlessly',
      'Handling build failures gracefully with rollback mechanisms',
      'Optimizing pipeline execution time',
    ],
    outcome: 'Reduced deployment time by 70%, eliminated manual errors, and established a reliable CI/CD workflow that catches integration issues early.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Buy @Anything',
    subtitle: 'Serverless E-Commerce Website',
    overview: 'A fully serverless e-commerce platform built on AWS, enabling users to browse products, manage shopping carts, and place orders — all without any server management.',
    problem: 'Traditional e-commerce hosting requires managing servers, scaling manually, and handling infrastructure concerns, increasing cost and complexity for a lightweight store.',
    solution: 'Leveraged AWS serverless services to build a scalable, reliable, and cost-effective architecture. The frontend is hosted on S3, APIs are managed through API Gateway, business logic runs on Lambda, and data is stored in DynamoDB.',
    architecture: 'S3 (Frontend) → API Gateway (REST APIs) → Lambda (Python Backend) → DynamoDB (Data Store) → IAM (Access Management)',
    tools: ['Amazon S3', 'API Gateway', 'AWS Lambda', 'DynamoDB', 'AWS IAM', 'Python', 'HTML/CSS/JS'],
    features: [
      'Product browsing with dynamic catalog',
      'Shopping cart management',
      'Order placement and tracking',
      'Serverless architecture — zero server management',
      'Auto-scaling with pay-per-use pricing',
      'Secure access with IAM roles and policies',
    ],
    challenges: [
      'Designing efficient DynamoDB schemas for relational-like queries',
      'Managing cold starts in Lambda functions',
      'Implementing secure cross-service communication with IAM',
    ],
    outcome: 'Delivered a production-ready serverless e-commerce application with near-zero infrastructure cost at low traffic, demonstrating mastery of AWS serverless architecture.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Energy Efficient VM Placement',
    subtitle: 'Ant Colony Optimization in Cloud',
    overview: 'A research-driven optimization model that applies Ant Colony Optimization (ACO) algorithms to improve virtual machine placement in cloud data centres, reducing energy consumption.',
    problem: 'Cloud data centres consume massive amounts of energy due to inefficient VM placement, leading to resource waste, high operational costs, and environmental impact.',
    solution: 'Applied Ant Colony Optimization — a nature-inspired algorithm — to find optimal VM-to-host mappings that minimize energy consumption while maintaining performance and SLA compliance.',
    architecture: 'VM Requests → ACO Algorithm Engine → Optimal Placement Map → Cloud Resource Manager → Energy Metrics Dashboard',
    tools: ['Python', 'Cloud Computing Concepts', 'Optimization Algorithms', 'Research Methodology'],
    features: [
      'ACO-based VM placement optimization',
      'Energy consumption reduction model',
      'Improved resource allocation efficiency',
      'Energy-aware scheduling techniques',
      'Data centre workload balancing',
    ],
    challenges: [
      'Balancing energy savings with performance requirements',
      'Modeling realistic data centre workloads',
      'Fine-tuning ACO parameters for optimal convergence',
    ],
    outcome: 'Demonstrated measurable improvement in energy efficiency for cloud VM placement, contributing to greener cloud computing practices.',
    gradient: 'from-green-500 to-emerald-500',
  },
]

export interface Certification {
  title: string
  provider: string
  date: string
  status: 'completed' | 'in-progress'
  color: string
}

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner (CLF-C02)',
    provider: 'Amazon Web Services',
    date: '2026',
    status: 'completed',
    color: '#FF9900',
  },
  {
    title: 'Docker Certified Associate',
    provider: 'Docker Inc.',
    date: 'Expected 2026',
    status: 'in-progress',
    color: '#2496ED',
  },
  {
    title: 'System Admin with IT Service Management & AI Emphasis',
    provider: 'ServiceNow – SmartBridge',
    date: 'Aug 2026',
    status: 'completed',
    color: '#62D84E',
  },
  {
    title: 'Generative AI with IBM',
    provider: 'SmartBridge – IBM SkillsBuild',
    date: 'Nov 2025',
    status: 'completed',
    color: '#054ADA',
  },
  {
    title: 'Fundamentals of Web Development',
    provider: 'Edunet – IBM SkillsBuild',
    date: 'Sep 2025',
    status: 'completed',
    color: '#054ADA',
  },
  {
    title: 'Foundation of Coding with Python',
    provider: 'Infosys Springboard',
    date: 'Sep 2025',
    status: 'completed',
    color: '#007CC3',
  },
  {
    title: 'English Language Communication - STEP',
    provider: 'The Hindu Group',
    date: 'Sep 2025',
    status: 'completed',
    color: '#DC2626',
  },
]

export interface TimelineItem {
  year: string
  title: string
  subtitle: string
  description: string
  type: 'education' | 'certification' | 'project' | 'training'
  icon: LucideIcon
}

export const timelineItems: TimelineItem[] = [
  {
    year: '2023',
    title: 'Started B.Sc Information Technology',
    subtitle: 'Mass Arts and Science College, Kumbakonam',
    description: 'Began undergraduate studies with a focus on IT fundamentals, programming, and cloud computing concepts.',
    type: 'education',
    icon: Monitor,
  },
  {
    year: '2025',
    title: 'Certifications & Skill Building',
    subtitle: 'Multiple Platforms',
    description: 'Earned certifications in Python, Web Development, Generative AI, and English Communication from Infosys, IBM SkillsBuild, and The Hindu Group.',
    type: 'certification',
    icon: Shield,
  },
  {
    year: '2025-26',
    title: 'Cloud & DevOps Projects',
    subtitle: 'Hands-on Experience',
    description: 'Built CI/CD pipelines with GitHub Actions & Jenkins, developed a serverless e-commerce platform on AWS, and researched energy-efficient cloud optimization.',
    type: 'project',
    icon: Cloud,
  },
  {
    year: '2026',
    title: 'AWS Certified Cloud Practitioner',
    subtitle: 'Amazon Web Services',
    description: 'Achieved AWS CCP certification (CLF-C02), validating foundational cloud knowledge and AWS service expertise.',
    type: 'certification',
    icon: Shield,
  },
  {
    year: '2026',
    title: 'B.Sc IT Graduation (Expected)',
    subtitle: 'Mass Arts and Science College — 76%',
    description: 'Completing undergraduate degree with strong academic performance and comprehensive hands-on cloud/DevOps experience.',
    type: 'education',
    icon: Monitor,
  },
]

export interface Tool {
  name: string
  color: string
}

export const tools: Tool[] = [
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Terraform', color: '#7B42BC' },
  { name: 'Linux', color: '#FCC624' },
  { name: 'Git', color: '#F05032' },
  { name: 'GitHub', color: '#FFFFFF' },
  { name: 'Jenkins', color: '#D24939' },
  { name: 'VS Code', color: '#007ACC' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Bash', color: '#4EAA25' },
  { name: 'Ansible', color: '#EE0000' },
  { name: 'Prometheus', color: '#E6522C' },
  { name: 'Grafana', color: '#F46800' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'PuTTY', color: '#0000CD' },
  { name: 'MobaXterm', color: '#2D9CDB' },
]

export const personalInfo = {
  name: 'Iyyappan V',
  title: 'AWS & DevOps Engineer',
  email: 'iyyappaniyyappan48998@gmail.com',
  phone: '+91 6379216605',
  location: 'Chennai, India',
  linkedin: 'https://www.linkedin.com/in/iyyappan05devops',
  github: '#',
  about: `Passionate and driven Cloud/DevOps Engineer with hands-on experience in designing and deploying scalable cloud infrastructure on AWS. Skilled in building automated CI/CD pipelines using GitHub Actions and Jenkins, securing environments through IAM policies, and managing Linux-based server environments. Proficient in Infrastructure as Code with Terraform and CloudFormation, and experienced in serverless architecture using Lambda, API Gateway, and DynamoDB. Eager to contribute to building reliable, cost-efficient, and highly available cloud systems at scale.`,
  careerObjective: `Entry-level Cloud/DevOps engineer with hands-on experience in AWS deployment, IAM security, Linux administration, and CI/CD automation using GitHub Actions and Jenkins, seeking to build and maintain reliable, scalable, and cost-efficient cloud infrastructure.`,
  education: {
    degree: 'Bachelor of Science – Information Technology',
    institution: 'Mass Arts and Science College, Kumbakonam, Tamil Nadu',
    percentage: '76%',
    duration: 'June 2023 – May 2026',
  },
  strengths: [
    'AWS Cloud Architecture & Deployment',
    'CI/CD Pipeline Automation',
    'Linux System Administration',
    'Infrastructure as Code (Terraform)',
    'Serverless Application Development',
    'Security & IAM Management',
    'Problem Solving & Quick Learner',
    'Team Collaboration & Communication',
  ],
  quickFacts: [
    { label: 'Location', value: 'Chennai, Tamil Nadu' },
    { label: 'Education', value: 'B.Sc IT — 76%' },
    { label: 'Certification', value: 'AWS CCP (CLF-C02)' },
    { label: 'Focus Area', value: 'Cloud & DevOps' },
    { label: 'Languages', value: 'English, Tamil' },
    { label: 'Status', value: 'Open to Opportunities' },
  ],
}
