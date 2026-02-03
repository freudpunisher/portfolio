"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Zap, Globe, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"

const highlights = [
  {
    icon: Shield,
    title: "Security Focused",
    description: "Building secure applications for government and financial institutions",
  },
  {
    icon: Zap,
    title: "Performance Driven",
    description: "Optimizing for speed with offline-first architecture and efficient code",
  },
  {
    icon: Globe,
    title: "International Impact",
    description: "Delivering solutions for NGOs, governments, and global clients",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Writing maintainable, scalable code with modern best practices",
  },
]

export function AboutSection() {
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
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={cn(
              "space-y-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">About Me</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Crafting Digital Solutions That Matter
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {`I'm a Full-Stack Developer with strong experience in web and mobile applications, 
                government-integrated systems, hospital management platforms, tax collection systems, 
                and financial applications.`}
              </p>
              <p>
                My focus is on performance, security, offline-first systems, and clean user experiences. 
                I work with international clients, tech companies, NGOs, and government institutions 
                to build software that truly makes an impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
