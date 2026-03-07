import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Rocket,
  Construction,
  Briefcase,
  GraduationCap,
  FileText,
  Zap,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "GiftSync",
    tagline: "AI-powered gift planning with budget tracking and collaboration",
    status: "live" as const,
    demoUrl: "https://giftsync-demo.vercel.app",
    repoUrl: "https://github.com/kdoddy36615/giftsync-portfolio",
    stack: [
      "Next.js 15",
      "React Native / Expo",
      "Supabase",
      "OpenAI",
      "Turborepo",
      "pnpm",
      "TypeScript",
      "Tailwind CSS",
    ],
    highlights: [
      "AI quick-add: paste a product URL or describe a gift and AI extracts name, price, and retailer",
      "Privacy blur mode hides gift details when someone peeks at your screen",
      "Real-time collaboration invites so family can contribute to shared lists",
      "Supabase Row-Level Security ensures each user only sees their own data",
      "Monorepo with Turborepo: shared packages across web and mobile apps",
    ],
    color: "#6366f1",
  },
  {
    title: "Texas Move Planner",
    tagline:
      "Local-first relocation toolkit with multi-vehicle convoy planning",
    status: "live" as const,
    demoUrl: "https://move-planner-demo.vercel.app",
    repoUrl: "https://github.com/kdoddy36615/texas-move-planner-portfolio",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "localStorage",
    ],
    highlights: [
      "Zero-backend architecture: all data persists in localStorage, no account required",
      "Multi-vehicle convoy mode: track per-vehicle gas costs and shared hotel stops",
      "Rule-based AI planner generates strategy recommendations from budget, distance, and family size",
      "Interactive financial dashboard with savings projections and affordability scoring",
      "Packing checklist, container estimator, and phased timeline all in one app",
    ],
    color: "#10b981",
  },
  {
    title: "LinkedIn Pro 2026",
    tagline:
      "Stealth browser automation for LinkedIn outreach with AI-generated messages",
    status: "dev" as const,
    stack: [
      "Playwright",
      "Claude AI",
      "TypeScript",
      "Node.js",
      "Human-like delays",
    ],
    highlights: [
      "Playwright-driven browser automation with stealth anti-detection measures",
      "Claude AI generates personalized connection messages from profile context",
      "Human-like delay simulation (typing speed variance, scroll pauses) to avoid rate limits",
      "Observability dashboard tracks sent requests, acceptance rates, and reply metrics",
    ],
    color: "#f59e0b",
  },
];

const skills = {
  Frontend: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
  ],
  Backend: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "Edge Functions"],
  "AI / Automation": ["OpenAI API", "Claude API", "Playwright", "Puppeteer"],
  "Dev Tools": [
    "Git",
    "Turborepo",
    "pnpm",
    "Vercel",
    "GitHub Actions",
    "VS Code",
  ],
};

function Badge({ label, color }: { label: string; color?: string }) {
  return (
    <span
      className="inline-block px-2.5 py-1 text-xs font-medium rounded-full border"
      style={{
        borderColor: color ? `${color}33` : "#333",
        backgroundColor: color ? `${color}11` : "#1a1a1a",
        color: color || "#a1a1aa",
      }}
    >
      {label}
    </span>
  );
}

function StatusBadge({ status }: { status: "live" | "dev" }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <Rocket size={12} />
        Live Demo
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
      <Construction size={12} />
      In Development
    </span>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="group bg-[#111118] border border-[#222233] rounded-2xl p-6 hover:border-[#333355] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3
            className="text-xl font-bold mb-1"
            style={{ color: project.color }}
          >
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400">{project.tagline}</p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map((tech) => (
          <Badge key={tech} label={tech} color={project.color} />
        ))}
      </div>

      <ul className="space-y-2 mb-6">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-sm text-zinc-300">
            <span className="text-zinc-600 shrink-0 mt-1">&#8226;</span>
            {h}
          </li>
        ))}
      </ul>

      {project.status === "live" && (
        <div className="flex gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-white transition-colors"
            style={{ backgroundColor: project.color }}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors border border-zinc-700"
          >
            <Github size={14} />
            Source
          </a>
        </div>
      )}
    </div>
  );
}

const pipelineStages = [
  {
    name: "Task Ingestion",
    desc: "CLI pulls assigned tickets with acceptance criteria",
  },
  {
    name: "Compliance Guard",
    desc: "CLAUDE.md enforces org rules — security, PHI, code standards",
  },
  {
    name: "Design Sync",
    desc: "Figma MCP extracts component specs and design tokens",
  },
  {
    name: "Implementation",
    desc: "Claude Code writes, tests, and iterates with full context",
  },
  {
    name: "Ship",
    desc: "CLI commits, pushes, and opens draft PR for review",
  },
];

const workflowTools = [
  "Claude Code",
  "CLAUDE.md",
  "Azure DevOps CLI",
  "Figma MCP",
  "GitLab CLI",
];

function WorkflowSection() {
  const color = "#06b6d4";
  return (
    <section className="max-w-4xl mx-auto px-6 pb-16">
      <h2 className="text-2xl font-bold mb-8">AI-Augmented Development</h2>
      <div
        className="bg-[#111118] border rounded-2xl p-6"
        style={{ borderColor: `${color}33` }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <Zap size={20} style={{ color }} />
          <h3 className="text-lg font-bold" style={{ color }}>
            AI-Augmented Development
          </h3>
        </div>
        <p className="text-sm text-zinc-400 mb-6">
          A repeatable pipeline that turns CLI tools + Claude Code into a
          full-cycle development workflow.
        </p>

        {/* Pipeline */}
        <div className="flex flex-wrap items-start gap-2 mb-6">
          {pipelineStages.map((stage, i) => (
            <div key={stage.name} className="flex items-start gap-2">
              <div
                className="rounded-lg border px-3 py-2 min-w-[130px]"
                style={{
                  borderColor: `${color}33`,
                  backgroundColor: `${color}08`,
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                  style={{ color }}
                >
                  {stage.name}
                </p>
                <p className="text-xs text-zinc-400 leading-snug">
                  {stage.desc}
                </p>
              </div>
              {i < pipelineStages.length - 1 && (
                <ArrowRight
                  size={16}
                  className="shrink-0 mt-3 text-zinc-600"
                />
              )}
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap gap-4 mb-5">
          <div
            className="rounded-lg border px-4 py-3"
            style={{
              borderColor: `${color}33`,
              backgroundColor: `${color}0a`,
            }}
          >
            <p className="text-2xl font-bold" style={{ color }}>
              ~30 min
            </p>
            <p className="text-xs text-zinc-400">avg task completion</p>
          </div>
          <div
            className="rounded-lg border px-4 py-3"
            style={{
              borderColor: `${color}33`,
              backgroundColor: `${color}0a`,
            }}
          >
            <p className="text-2xl font-bold" style={{ color }}>
              22 bug fixes
            </p>
            <p className="text-xs text-zinc-400">resolved in ~1 hour</p>
          </div>
        </div>

        {/* Note */}
        <p className="text-xs text-zinc-500 mb-4">
          This pattern extends to any CLI or MCP-compatible tool — S3, AWS, CI
          pipelines, databases, and more.
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {workflowTools.map((tool) => (
            <Badge key={tool} label={tool} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
          <Code2 size={16} className="text-accent" />
          <span>Full-Stack Software Engineer</span>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Kevin Doddy
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          I build polished, full-stack applications with modern React, TypeScript,
          and AI integrations. I care about clean architecture, real-world
          usability, and shipping fast.
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="https://github.com/kdoddy36615"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/kevindoddy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:kevin36615@gmail.com"
            className="text-zinc-300 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </header>

      {/* Projects */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* AI Workflow */}
      <WorkflowSection />

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-[#111118] border border-[#222233] rounded-xl p-5"
            >
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <Badge key={s} label={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-8">Experience</h2>
        <div className="space-y-6">
          {[
            {
              title: "Senior Frontend Engineer (Fullstack)",
              company: "Centene Corporation",
              period: "Aug 2025 - Present",
              tech: "React, TypeScript, Node.js, Express, Kubernetes, Azure",
              bullets: [
                "Develop enterprise healthcare platform features supporting internal care-management workflows",
                "Implement fullstack functionality spanning React UI, Node.js services, and API integrations",
                "Improve performance through optimized data fetching, memoization, and bundle optimization",
              ],
            },
            {
              title: "Fullstack Developer",
              company: "KPMG",
              period: "May 2024 - Aug 2025",
              tech: "React, Node.js, Express, Azure SQL, Power BI, Azure DevOps",
              bullets: [
                "Architected public grants portal using React, Node.js, and Azure supporting multi-agency funding",
                "Built AI-driven document processing workflows using Azure Document Intelligence",
                "Developed auditor validation interface reducing review time by 40%",
              ],
            },
            {
              title: "Lead Frontend / Fullstack Engineer",
              company: "IBM",
              period: "Jun 2020 - May 2024",
              tech: "React, Next.js, TypeScript, Node.js, Tailwind CSS",
              bullets: [
                "Led modernization of legacy Angular/JSP applications migrating to React and Next.js",
                "Improved Lighthouse performance and accessibility scores from below 20 to above 90",
                "Led teams of 3-12 engineers mentoring developers and improving engineering standards",
              ],
            },
            {
              title: "Senior Frontend Developer",
              company: "OCLC",
              period: "Jan 2018 - Jun 2020",
              tech: "React, Redux, REST APIs",
              bullets: [
                "Rebuilt customer portal serving 800K+ daily users migrating from JSP to React",
                "Implemented internationalization and RTL language support increasing engagement by 15%",
              ],
            },
            {
              title: "Fullstack Engineer",
              company: "Unified",
              period: "Aug 2016 - Jan 2018",
              tech: "React, Redux, Groovy, Jenkins",
              bullets: [
                "Built analytics dashboards with advanced filtering and reporting capabilities",
                "Increased automated test coverage to 95% improving release reliability",
              ],
            },
          ].map((job) => (
            <div
              key={job.company}
              className="bg-[#111118] border border-[#222233] rounded-xl p-5"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-start gap-3">
                  <Briefcase
                    size={18}
                    className="text-zinc-500 mt-0.5 shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-zinc-200">
                      {job.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{job.company}</p>
                  </div>
                </div>
                <span className="text-xs text-zinc-500 shrink-0">
                  {job.period}
                </span>
              </div>
              <p className="text-xs text-zinc-500 ml-[30px] mb-2">
                {job.tech}
              </p>
              <ul className="space-y-1 ml-[30px]">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-400">
                    <span className="text-zinc-600 shrink-0">&#8226;</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#111118] border border-[#222233] rounded-xl p-5 flex items-start gap-3">
            <GraduationCap size={18} className="text-zinc-500 mt-0.5" />
            <div>
              <h3 className="font-semibold text-zinc-200 text-sm">
                Hack Reactor
              </h3>
              <p className="text-xs text-zinc-400">
                Advanced Software Engineering Bootcamp (2016)
              </p>
            </div>
          </div>
          <div className="bg-[#111118] border border-[#222233] rounded-xl p-5 flex items-start gap-3">
            <GraduationCap size={18} className="text-zinc-500 mt-0.5" />
            <div>
              <h3 className="font-semibold text-zinc-200 text-sm">
                Temple University
              </h3>
              <p className="text-xs text-zinc-400">
                B.A. Psychology, Honors Program (2015)
              </p>
            </div>
          </div>
        </div>

        {/* Resume Download */}
        <div className="mt-6 flex justify-center">
          <a
            href="/Kevin_Doddy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors border border-zinc-700"
          >
            <FileText size={16} />
            Download Full Resume (PDF)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-[#222233]">
        <div className="flex items-center justify-between text-sm text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Kevin Doddy</span>
          <div className="flex gap-4">
            <a
              href="https://github.com/kdoddy36615"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kevindoddy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:kevin36615@gmail.com"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
