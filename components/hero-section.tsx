"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("hero.greeting")}</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">Donia Fioklou</h1>
            <p className="text-xl sm:text-2xl text-primary font-medium">{t("hero.title")}</p>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToProjects} className="text-lg px-8 py-6 rounded-full">
              {t("hero.cta")}
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 rounded-full bg-transparent"
            >
              {t("hero.contact")}
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => window.open('https://github.com/donia-fioklou', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => window.open('https://www.linkedin.com/in/donia-fioklou/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => window.open('mailto:fiokloudonia@gmail.com', '_blank')}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="pt-12">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
