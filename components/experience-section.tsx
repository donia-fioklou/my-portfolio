"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const experiences = [
  {
    title: "Développeur web",
    company: "Give Smile Solution",
    location: "Togo",
    period: "Février 2024 – Juillet 2025",
    typeKey: "experience.fullTime",
    description:
      "Mise en production d'application d'analyse de données agricoles sur VPS, intégrant un backend Django REST Framework et un frontend React. Création d'API REST avec Django REST Framework permettant d'obtenir des données pour l'analyse de données agricoles.",
    achievements: [
      "Déploiement d'application d'analyse de données agricoles sur VPS",
      "Création d'API REST avec Django REST Framework",
      "Intégration du frontend React avec les services backend",
      "Implémentation de fonctionnalités d'analyse de données pour les insights agricoles",
    ],
  },
  {
    title: "Développeur web",
    company: "Centre Nationale de Traitement de donnée",
    location: "Togo",
    period: "Septembre 2023 – Janvier 2024",
    typeKey: "experience.contract",
    description:
      "Développement d'une plateforme d'enregistrement des candidatures électorales, permettant la gestion des dossiers des candidats et l'automatisation des processus de validation. Analyse statistique des données électorales pour faciliter la prise de décision stratégique.",
    achievements: [
      "Développement de plateforme d'enregistrement des candidats électoraux",
      "Automatisation des processus de validation des candidatures",
      "Implémentation d'analyse statistique des données électorales",
      "Création de rapports personnalisés et d'indicateurs de performance clés",
      "Construction d'API USSD pour la collecte de données de recensement avec les partenaires télécom",
    ],
  },
  {
    title: "Stagiaire - Projet de fin d'étude",
    company: "Give Smile Solution",
    location: "Togo",
    period: "Juin 2023 – Août 2024",
    typeKey: "experience.internship",
    description:
      "Développement d'une plateforme d'analyse de données collectées pour une certification agricole. Implémentation d'un pipeline permettant de collecter, transformer et retourner des données propres.",
    achievements: [
      "Construction de plateforme d'analyse de données de certification agricole",
      "Implémentation de pipeline ETL pour le traitement de données",
      "Développement de mécanismes d'assurance qualité des données",
      "Création de détection automatisée des incohérences de données",
    ],
  },
]

const education = [
  {
    degree: "Ingénieur des travaux informatiques, Génie logiciel",
    school: "IAI-TOGO",
    period: "Nov. 2020 - Août 2023",
    activities: "Google Developer Student Clubs",
  },
  {
    degree: "Ingénieur big data",
    school: "UCAO-UUT",
    period: "Formation continue",
    skills: "Looker Studio, Docker",
  },
]

export function ExperienceSection() {
  const { t } = useLanguage()
  
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
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <Badge variant="outline">{t(exp.typeKey)}</Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
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
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">{t("experience.keyAchievements")}:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            {achievement}
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
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <CardDescription className="text-primary font-medium">{edu.school}</CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground">{edu.period}</div>
                    </div>
                  </CardHeader>
                  {(edu.activities || edu.skills) && (
                    <CardContent>
                      {edu.activities && (
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">{t("experience.activities")}:</span> {edu.activities}
                        </p>
                      )}
                      {edu.skills && (
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">{t("experience.skills")}:</span> {edu.skills}
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
