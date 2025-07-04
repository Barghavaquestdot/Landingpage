
import HeroSection from "./components/Herosection";
import ProblemSection from "./components/Problemsection";
import SolutionSection from "./components/Solutionsection";
import WhoNeeds from "./components/WhoNeeds"
import GuidePreview from "./components/GuidePreview"
import AuthorSection from "./components/About";
import CallToActionSection from "./components/CalltoAction";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection/>
      <WhoNeeds/>
      <GuidePreview/>
       <AuthorSection/>
       <CallToActionSection/>
       <Footer/>
      
     
    </main>
  );
}
