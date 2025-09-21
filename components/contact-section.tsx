"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>{t("contact.contactInfo")}</CardTitle>
                <CardDescription>{t("contact.contactInfoDescription")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{t("contact.emailLabel")}</p>
                    <p className="text-sm text-muted-foreground">fiokloudonia@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{t("contact.phoneLabel")}</p>
                    <p className="text-sm text-muted-foreground">+228 92 47 43 15</p>
                  </div>
                </div>
                {/* <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{t("contact.locationLabel")}</p>
                    <p className="text-sm text-muted-foreground">Togo, West Africa</p>
                  </div>
                </div> */}
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>{t("contact.connectWithMe")}</CardTitle>
                <CardDescription>{t("contact.connectDescription")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
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
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => window.open('tel:+22892474315', '_blank')}
                  >
                    <Phone className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">{t("contact.availableForFreelance")}</p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-primary">{t("contact.openToOpportunities")}</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  )
}
