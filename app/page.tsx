"use client";

import "../i18n";
import { withTranslationReady } from "./utils/withTranslationReady";

// Wrap components
import HeroSectionBase from "./components/Herosection";
import ProblemSectionBase from "./components/Problemsection";
import SolutionSectionBase from "./components/Solutionsection";
import WhoNeedsBase from "./components/WhoNeeds";
import GuidePreviewBase from "./components/GuidePreview";
import AuthorSectionBase from "./components/About";
import CallToActionSectionBase from "./components/CalltoAction";
import FooterBase from "./components/Footer";
import TestimonialsSectionBase from "./components/Testimonals";
import LanguageSwitcher from "./components/LanguageSwitcher";
import CompanySectionBase from "./components/AboutCompany"
import { useTranslation } from "react-i18next";
import FloatingConsultationButton from "./components/Floatingbutton";

const HeroSection = withTranslationReady(HeroSectionBase, "common");
const ProblemSection = withTranslationReady(ProblemSectionBase, "common");
const SolutionSection = withTranslationReady(SolutionSectionBase, "common");
const WhoNeeds = withTranslationReady(WhoNeedsBase, "common");
const GuidePreview = withTranslationReady(GuidePreviewBase, "common");
const AuthorSection = withTranslationReady(AuthorSectionBase, "common");
const CallToActionSection = withTranslationReady(CallToActionSectionBase, "common");
const Footer = withTranslationReady(FooterBase, "common");
const TestimonialsSection = withTranslationReady(TestimonialsSectionBase, "common");
const CompanySection = withTranslationReady(CompanySectionBase, "common");

export default function Home() {
  const { i18n } = useTranslation();

  return (
    <main className="bg-black text-white">
      <LanguageSwitcher />
      <HeroSection key={i18n.language} />
      <ProblemSection key={i18n.language + '-problem'} />
      <SolutionSection key={i18n.language + '-solution'} />
      <WhoNeeds key={i18n.language + '-who'} />
      <GuidePreview key={i18n.language + '-guide'} />
      <AuthorSection key={i18n.language + '-author'} />
      <TestimonialsSection key={i18n.language + '-testimonials'} />
      <CompanySection key={i18n.language + '-company'}/>
      <Footer key={i18n.language + '-footer'} />
      <FloatingConsultationButton />
    </main>
  );
}
