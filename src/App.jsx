import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HowWeWorkPage } from './pages/HowWeWorkPage';
import { RootsPage } from './pages/RootsPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectModal } from './components/ProjectModal';
import { IdeaSubmissionModal } from './components/IdeaSubmissionModal';
import { PrivacyModal } from './components/PrivacyModal';
import { Toast } from './components/Toast';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [pitchModalOpen, setPitchModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Ensure scroll is at top on page change
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleInquireProject = (project) => {
    addToast(`تم تحويلك لنموذج التواصل بخصوص مشروع ${project.nameAr}`, 'info');
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={setSelectedProject}
            onOpenPitchModal={() => setPitchModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage 
            onOpenPitchModal={() => setPitchModalOpen(true)} 
          />
        );
      case 'how-we-work':
        return (
          <HowWeWorkPage 
            onOpenPitchModal={() => setPitchModalOpen(true)} 
          />
        );
      case 'roots':
        return (
          <RootsPage 
            onOpenPitchModal={() => setPitchModalOpen(true)} 
          />
        );
      case 'contact':
        return (
          <ContactPage 
            onNotify={addToast}
            onOpenPitchModal={() => setPitchModalOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={setSelectedProject}
            onOpenPitchModal={() => setPitchModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="natheel-app-root">
      {/* Top Navbar Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenPitchModal={() => setPitchModalOpen(true)}
      />

      {/* Main Page Dynamic View */}
      {renderCurrentPage()}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectProject={setSelectedProject}
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
      />

      {/* Modals - conditionally mounted to keep body scroll clean */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquire={handleInquireProject}
        />
      )}

      {pitchModalOpen && (
        <IdeaSubmissionModal
          isOpen={pitchModalOpen}
          onClose={() => setPitchModalOpen(false)}
          onNotify={addToast}
        />
      )}

      {privacyModalOpen && (
        <PrivacyModal
          isOpen={privacyModalOpen}
          onClose={() => setPrivacyModalOpen(false)}
        />
      )}

      {/* Global Toast Feedback */}
      <Toast 
        toasts={toasts} 
        onDismiss={removeToast} 
      />
    </div>
  );
}
