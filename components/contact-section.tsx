"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai bientôt.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>{t("contact.sendMessage")}</CardTitle>
              <CardDescription>{t("contact.formDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t("contact.firstName")}</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t("contact.lastName")}</Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t("contact.subject")}</Label>
                  <Input id="subject" name="subject" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea id="message" name="message" rows={5} required className="resize-none" />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    t("contact.sending")
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {t("contact.sendMessageBtn")}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

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
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{t("contact.locationLabel")}</p>
                    <p className="text-sm text-muted-foreground">Togo, West Africa</p>
                  </div>
                </div>
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
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">{t("contact.availableForFreelance")}</p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-primary">{t("contact.openToOpportunities")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
