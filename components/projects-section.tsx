"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Smartphone, Building2, Hospital, FileText, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "GDAF v1 – Mobile Tax Collection App",
    description: "Market & barrier tax collection system with taxpayer verification via National ID Card and backend synchronization.",
    icon: Smartphone,
    tech: ["React Native", "API Integration"],
    highlights: ["Market & barrier tax collection", "Taxpayer verification via NIC", "Backend synchronization"],
  },
  {
    title: "GDAF v2 – Municipal POS Tax System",
    description: "Advanced POS ticket generation system with bank integrations and offline-first architecture for real-time payment verification.",
    icon: Building2,
    tech: ["Flutter", "SQLite", "Banking APIs"],
    highlights: ["POS ticket generation", "Bank integrations (Bancobu, Finbank, IBB+, Ihela)", "Offline-first with real-time payment verification"],
  },
  {
    title: "OBR Interconnected Invoicing System",
    description: "Official invoice generation platform with Tax ID (NIF) verification and automated invoice cancellation connected to government APIs.",
    icon: FileText,
    tech: ["Next.js", "Django REST", "Government APIs"],
    highlights: ["Official invoice generation", "Tax ID (NIF) verification", "Automated invoice cancellation"],
  },
  {
    title: "ASanté+ – Hospital Management System",
    description: "Comprehensive hospital management platform with billing, insurance integration, patient tracking, and role-based access control.",
    icon: Hospital,
    tech: ["Next.js", "Django REST"],
    highlights: ["Billing & insurance", "Patient & appointment tracking", "Role-based access control"],
  },
  {
    title: "Offline Contribution Management App",
    description: "Offline data collection application with deferred synchronization and local analytics for field workers.",
    icon: Users,
    tech: ["Flutter", "SQLite", "Django REST"],
    highlights: ["Offline data collection", "Deferred sync", "Local analytics"],
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of government, financial, and healthcare systems I have designed and developed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "group relative flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
