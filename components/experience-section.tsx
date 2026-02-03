"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, Award, Languages } from "lucide-react"
import { cn } from "@/lib/utils"

const experience = [
  {
    company: "AccessData Africa",
    role: "Software Developer",
    period: "2023 – Present",
    description: "Government & financial system integrations, architecture & database modeling, mission-critical applications.",
    current: true,
  },
  {
    company: "Tangu",
    role: "Web Developer",
    period: "2020 – 2023",
    description: "React & MySQL apps, CMS customization, client-focused solutions.",
    current: false,
  },
]

const education = [
  {
    degree: "Software Engineering",
    institution: "International University of Equator",
  },
  {
    degree: "Diploma A2",
    institution: "Telecommunications & IT",
  },
]

const certifications = ["React", "Flutter", "SQL", "Linux Bash"]

const languages = ["French", "English", "Kirundi"]

export function ExperienceSection() {
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
    <section ref={sectionRef} id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Experience & Education
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Work Experience</h3>
            </div>

            <div className="relative pl-8 space-y-8">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border" />

              {experience.map((job, index) => (
                <div key={job.company} className="relative">
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      "absolute -left-8 top-1 w-6 h-6 rounded-full border-4 border-background",
                      job.current ? "bg-primary" : "bg-muted"
                    )}
                  />

                  <div
                    className={cn(
                      "p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    )}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{job.company}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">{job.role}</p>
                    <p className="text-sm text-muted-foreground">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div
            className={cn(
              "space-y-8 transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={edu.degree}
                    className={cn(
                      "p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    )}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
              </div>

              <div
                className={cn(
                  "flex flex-wrap gap-2 transition-all duration-500",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: "400ms" }}
              >
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 rounded-lg bg-card border border-border text-foreground hover:border-primary/50 transition-colors"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Languages className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Languages</h3>
              </div>

              <div
                className={cn(
                  "flex flex-wrap gap-2 transition-all duration-500",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: "500ms" }}
              >
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
