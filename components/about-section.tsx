"use client"

import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">{t("about.title")}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {t("about.description")
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">{t("about.quickFacts")}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("about.location")}</span>
                  <span>Togo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("about.experience")}</span>
                  <span>{t("about.years")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("about.education")}</span>
                  <span>{t("about.softwareEngineering")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("about.specialization")}</span>
                  <span>{t("about.web")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
