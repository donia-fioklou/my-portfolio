"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const experiences = [
  {
    titleKey: "experience.exp1.title",
    company: "Centre Nationale de Traitement de donnée",
    location: "Togo",
    periodKey: "experience.exp1.period",
    typeKey: "experience.contract",
    descriptionKey: "experience.exp1.description",
    achievementsKey: "experience.exp1.achievements",
  },
  {
    titleKey: "experience.exp2.title",
    company: "Give Smile Solution",
    location: "Togo",
    periodKey: "experience.exp2.period",
    typeKey: "experience.fullTime",
    descriptionKey: "experience.exp2.description",
    achievementsKey: "experience.exp2.achievements",
  },
  {
    titleKey: "experience.exp3.title",
    company: "Give Smile Solution",
    location: "Togo",
    periodKey: "experience.exp3.period",
    typeKey: "experience.internship",
    descriptionKey: "experience.exp3.description",
    achievementsKey: "experience.exp3.achievements",
  },
]

const education = [
  {
    degreeKey: "experience.edu1.degree",
    school: "IAI-TOGO",
    periodKey: "experience.edu1.period",
    activitiesKey: "experience.edu1.activities",
  },
  {
    degreeKey: "experience.edu2.degree",
    school: "UCAO-UUT",
    periodKey: "experience.edu2.period",
  },
]

export function ExperienceSection() {
  const { t, language } = useLanguage()
  
  // Helper function to get array from translations
  const getArray = (key: string) => {
    const keys = key.split(".")
    let value: any = language === "fr" ? 
      require("@/lib/translations").translations.fr : 
      require("@/lib/translations").translations.en
    
    for (const k of keys) {
      value = value?.[k]
    }
    return value || []
  }
  
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("experience.title")}</h2>
          <p className="text-lg text-muted-foreground">
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="space-y-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">{t("experience.professionalExperience")}</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{t(exp.titleKey)}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <Badge variant="outline">{t(exp.typeKey)}</Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {t(exp.periodKey)}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* <p className="text-muted-foreground mb-4 leading-relaxed">{t(exp.descriptionKey)}</p> */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">{t("experience.keyAchievements")}:</h4>
                      <ul className="space-y-1">
                        {getArray(exp.achievementsKey).map((achievement: string, achIndex: number) => (
                          <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            {/* <span className="text-primary mt-1.5">•</span> */}
                            - {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">{t("experience.education")}</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg">{t(edu.degreeKey)}</CardTitle>
                        <CardDescription className="text-primary font-medium">{edu.school}</CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground">{t(edu.periodKey)}</div>
                    </div>
                  </CardHeader>
                  {(edu.activitiesKey) && (
                    <CardContent>
                      {edu.activitiesKey && (
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">{t("experience.activities")}:</span> {t(edu.activitiesKey)}
                        </p>
                      )}
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
