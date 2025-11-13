"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ProblemStatement from "@/components/problem-statement"
import Solution from "@/components/solution"
import ImpactMetrics from "@/components/impact-metrics"
import TechArchitecture from "@/components/tech-architecture"
import BusinessModel from "@/components/business-model"
import SocialImpact from "@/components/social-impact"
import FeasibilityScalability from "@/components/feasibility-scalability"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-b from-background to-slate-50 dark:to-slate-950">
      <Header />
      <Hero />
      <ProblemStatement />
      <Solution />
      <ImpactMetrics />
      <TechArchitecture />
      <BusinessModel />
      <SocialImpact />
      <FeasibilityScalability />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
