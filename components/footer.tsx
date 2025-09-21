"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-mono text-xl font-bold text-primary">{"Donia Fioklou"}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => window.open('https://github.com/donia-fioklou', '_blank')}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => window.open('https://www.linkedin.com/in/donia-fioklou/', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => window.open('mailto:fiokloudonia@gmail.com', '_blank')}
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => window.open('tel:+22892474315', '_blank')}
              >
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t("footer.quickLinks")}</h3>
            <div className="space-y-2">
              {[
                { key: "nav.about", href: "#about" },
                { key: "nav.projects", href: "#projects" },
                { key: "nav.skills", href: "#skills" },
                { key: "nav.contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(link.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t("footer.services")}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t("footer.fullStackDev")}</p>
              <p>{t("footer.apiDev")}</p>
              {/* <p>{t("footer.dataAnalysis")}</p>
              <p>{t("footer.systemIntegration")}</p> */}
              <p>{t("footer.technicalConsulting")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center w-full">© {currentYear} Donia Fioklou. {t("footer.allRightsReserved")}</p>
          {/* <div className="flex gap-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">{t("footer.privacyPolicy")}</button>
            <button className="hover:text-primary transition-colors">{t("footer.termsOfService")}</button>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
