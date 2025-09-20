"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

const skillCategories = [
  {
    titleKey: "skills.backend",
    skills: ["Django", "Django REST Framework", "Flask", "Python", "PostgreSQL", "API Design"],
  },
  {
    titleKey: "skills.frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    titleKey: "skills.data",
    skills: ["Data Analysis", "ETL Pipelines", "Data Validation", "Statistical Analysis", "Looker Studio"],
  },
  {
    titleKey: "skills.devops",
    skills: ["Docker", "VPS Deployment", "Git", "Linux", "USSD Integration", "Telecom APIs"],
  },
  {
    titleKey: "skills.databases",
    skills: ["PostgreSQL", "MySQL", "Database Design", "Query Optimization", "Data Modeling"],
  },
  {
    titleKey: "skills.softSkills",
    skills: ["Problem Solving", "Team Collaboration", "Project Management", "Technical Documentation"],
  },
]

export function SkillsSection() {
  const { t } = useLanguage()
  
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("skills.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{t(category.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
