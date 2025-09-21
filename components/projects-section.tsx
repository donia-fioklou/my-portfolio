"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const projects = [
  {
    titleKey: "projects.project1.title",
    descriptionKey: "projects.project1.description",
    image: "/my-portfolio.jpg",
    tags: ["Next.js"],
    liveUrl: "https://my-portfolio-eta-sable-40.vercel.app/",
    githubUrl: "https://github.com/donia-fioklou/my-portfolio",
    featured: true,
  },
  {
    titleKey: "projects.project2.title",
    descriptionKey: "projects.project2.description",
    image: "/depot_boisson.jpg",
    tags: ["Django REST Framework","React","PostgreSQL"],
    liveUrl: "https://depot-boisson-front.onrender.com/",
    githubUrl: "https://github.com/donia-fioklou/gestion-depot-boisson",
    featured: true,
  },
  {
    titleKey: "projects.project3.title",
    descriptionKey: "projects.project3.description",
    image: "/traduction_doc.jpg",
    tags: ["Next.js","Supabase"],
    liveUrl: "https://traductionexperts.com/",
    githubUrl: "https://github.com/donia-fioklou/traduction_doc",
    featured: false,
  },
  {
    titleKey: "projects.project4.title",
    descriptionKey: "projects.project4.description",
    image: "/cv_boost.jpg",
    tags: ["Flask","Next.js","Gemini API"],
    liveUrl: "https://front-roast-cv.vercel.app/",
    githubUrl: "https://github.com/donia-fioklou/back-roast-cv",
    featured: false,
  },
]

export function ProjectsSection() {
  const { t } = useLanguage()
  
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("projects.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{t(project.titleKey)}</CardTitle>
                  {/* {project.featured && (
                    <Badge variant="secondary" className="ml-2">
                      {t("projects.featured")}
                    </Badge>
                  )} */}
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {t(project.descriptionKey)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("projects.liveDemo")}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t("projects.code")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
