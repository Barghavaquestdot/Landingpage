"use client";

import "../i18n";
import { withTranslationReady } from "./utils/withTranslationReady";

// Sections
import HeroSectionBase from "./components/Herosection";
import ProblemSectionBase from "./components/Problemsection";
import SolutionSectionBase from "./components/Solutionsection";
import WhoNeedsBase from "./components/WhoNeeds";
import GuidePreviewBase from "./components/GuidePreview";
import AuthorSectionBase from "./components/About";
import FooterBase from "./components/Footer";
import TestimonialsSectionBase from "./components/Testimonals";
import CompanySectionBase from "./components/AboutCompany";
import LanguageSwitcher from "./components/LanguageSwitcher";
import FloatingConsultationButton from "./components/Floatingbutton";
import { useTranslation } from "react-i18next";

const HeroSection = withTranslationReady(HeroSectionBase, "common");
const ProblemSection = withTranslationReady(ProblemSectionBase, "common");
const SolutionSection = withTranslationReady(SolutionSectionBase, "common");
const WhoNeeds = withTranslationReady(WhoNeedsBase, "common");
const GuidePreview = withTranslationReady(GuidePreviewBase, "common");
const AuthorSection = withTranslationReady(AuthorSectionBase, "common");
const Footer = withTranslationReady(FooterBase, "common");
const TestimonialsSection = withTranslationReady(TestimonialsSectionBase, "common");
const CompanySection = withTranslationReady(CompanySectionBase, "common");

export default function Home() {
  const { i18n } = useTranslation();

  return (
    <main className="bg-black text-white selection:bg-red-500 selection:text-white">
      {/* Top Utility Bar */}
      <div className="sticky top-0 z-50 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <span className="text-xs sm:text-sm text-white/70 tracking-widest uppercase">The Guide</span>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Sections */}
      <HeroSection key={i18n.language} />
      <ProblemSection key={`${i18n.language}-problem`} />
      <SolutionSection key={`${i18n.language}-solution`} />
      <WhoNeeds key={`${i18n.language}-who`} />
      <GuidePreview key={`${i18n.language}-guide`} />
      <AuthorSection key={`${i18n.language}-author`} />
      <TestimonialsSection key={`${i18n.language}-testimonials`} />
      <CompanySection key={`${i18n.language}-company`} />
      <Footer key={`${i18n.language}-footer`} />

      <FloatingConsultationButton />
    </main>
  );
}
