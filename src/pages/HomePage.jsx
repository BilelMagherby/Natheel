import React from 'react';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { AboutSection } from '../components/AboutSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { CollaborationSection } from '../components/CollaborationSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { ScrollToTop } from '../components/ScrollToTop';

export function HomePage({ onNavigate, onSelectProject, onOpenPitchModal }) {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('projects');
    }
  };

  return (
    <main className="home-page-root">
      {/* 1. Hero Carousel with 01/04 Indicator */}
      <Hero 
        onExploreProjects={handleScrollToProjects}
        onOpenPitchModal={onOpenPitchModal}
        onSelectProject={onSelectProject}
      />

      {/* 2. Floating Animated 4-Stat Bar */}
      <ScrollReveal animation="fade-up" delay={100}>
        <StatsBar />
      </ScrollReveal>

      {/* 3. About Natheel & Hail Landscape Section */}
      <ScrollReveal animation="fade-up" delay={150}>
        <AboutSection 
          onReadMore={() => {
            onNavigate('about');
          }}
        />
      </ScrollReveal>

      {/* 4. 6-Project Showcase with Category Filters */}
      <ScrollReveal animation="fade-up" delay={200}>
        <ProjectsSection 
          onSelectProject={onSelectProject}
        />
      </ScrollReveal>

      {/* 5. Partner With Us & Workstation CTA */}
      <ScrollReveal animation="fade-up" delay={250}>
        <CollaborationSection 
          onOpenPitchModal={onOpenPitchModal}
          onNavigateToContact={() => {
            onNavigate('contact');
          }}
        />
      </ScrollReveal>

      {/* Floating Scroll To Top with Progress Ring */}
      <ScrollToTop />
    </main>
  );
}
