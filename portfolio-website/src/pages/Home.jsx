import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../features/site/HeroSection'
import AboutSection from '../features/site/AboutSection'
import CoreCompetenciesSection from '../features/site/CoreCompetenciesSection'
import ExperienceSection from '../features/site/ExperienceSection'
import FeaturedProjectsSection from '../features/portfolio/FeaturedProjectsSection'
import RecentContributionsSection from '../features/site/RecentContributionsSection'
import ContactSection from '../features/contact/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 space-y-24">
        <HeroSection />
        <AboutSection />
        <CoreCompetenciesSection />
        <ExperienceSection />
        <FeaturedProjectsSection />
        <RecentContributionsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

