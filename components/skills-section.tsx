"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Dart", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Django REST Framework"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "React Native"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Oracle", "SQLite"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "Linux Bash"],
  },
]

export function SkillsSection() {
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
    <section ref={sectionRef} id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={cn(
                "group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default",
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      )}
                      style={{
                        transitionDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                      }}
                    >
                      {skill}
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
