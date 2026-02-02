import { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { HomePage } from '@/app/components/HomePage';
import { AboutPage } from '@/app/components/AboutPage';
import { ServicesPage } from '@/app/components/ServicesPage';
import { ContactPage } from '@/app/components/ContactPage';
import { Footer } from '@/app/components/Footer';

type Page = 'home' | 'about' | 'services' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <ContactPage />}
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
