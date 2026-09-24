import React, { useState, useEffect, useRef, useCallback } from 'react';
import { heroSlides } from '../data/siteData';
import { projectsData } from '../data/projectsData';
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles, Pause, Play } from 'lucide-react';
import '../styles/Hero.css';

const SLIDE_DURATION = 7000; // 7 seconds per slide

export function Hero({ onExploreProjects, onOpenPitchModal, onSelectProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const goToSlide = useCallback((index) => {
    setCurrentIndex((index + heroSlides.length) % heroSlides.length);
    setProgress(0);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Handle slide timer & progress bar
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 50;
    const progressStep = (intervalStep / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + progressStep;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        // In RTL, right arrow goes to previous slide
        prevSlide();
      } else if (e.key === 'ArrowLeft') {
        // In RTL, left arrow goes to next slide
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left (in RTL: next slide)
        nextSlide();
      } else {
        // Swiped right (in RTL: prev slide)
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = heroSlides[currentIndex];

  const handlePrimaryCta = (slide) => {
    if (slide.id === 3) {
      // Ghalia hospitality slide
      const ghaliaProject = projectsData.find((p) => p.id === 'ghalia');
      if (ghaliaProject && onSelectProject) {
        onSelectProject(ghaliaProject);
        return;
      }
    } else if (slide.id === 2) {
      // Danny Square slide
      const dannySquare = projectsData.find((p) => p.id === 'danny-square');
      if (dannySquare && onSelectProject) {
        onSelectProject(dannySquare);
        return;
      }
    } else if (slide.id === 4) {
      if (onOpenPitchModal) {
        onOpenPitchModal();
        return;
      }
    }
    // Default: explore projects
    if (onExploreProjects) {
      onExploreProjects();
    }
  };

  const handleSecondaryCta = (slide) => {
    if (slide.id === 3 || slide.id === 4 || slide.id === 1) {
      if (onOpenPitchModal) {
        onOpenPitchModal();
        return;
      }
    }
    if (onExploreProjects) {
      onExploreProjects();
    }
  };

  return (
    <section 
      className="hero-section" 
      aria-label="الواجهة الرئيسية وعروض نثيل"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Slides Layer */}
      <div className="hero-slides-layer" aria-hidden="true">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-slide-item ${idx === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-slide-image-scale" style={{ backgroundImage: `url(${slide.image})` }} />
          </div>
        ))}
      </div>

      {/* Luxury Cinematic Gradient Overlays */}
      <div className="hero-cinematic-overlay" />
      <div className="hero-ambient-glow" />
      <div className="hero-pattern-mesh" />

      {/* Main Slide Content Area */}
      <div className="container hero-container">
        <div className="hero-content-box" key={currentSlide.id}>
          {/* Animated Badge Chip */}
          <div className="hero-badge-pill">
            <Sparkles size={16} className="hero-badge-icon" />
            <span className="hero-badge-text">{currentSlide.badge}</span>
            <span className="hero-badge-dot" />
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            {currentSlide.title}
          </h1>

          {/* Description Subtext */}
          <p className="hero-description">
            {currentSlide.description}
          </p>

          {/* Action CTAs Row */}
          <div className="hero-actions-group">
            <button 
              type="button" 
              className="btn-hero-primary"
              onClick={() => handlePrimaryCta(currentSlide)}
              id={`btn-hero-primary-${currentSlide.id}`}
            >
              <span>{currentSlide.ctaPrimary}</span>
              <div className="hero-btn-arrow-circle">
                <ArrowLeft size={16} />
              </div>
            </button>

            <button 
              type="button" 
              className="btn-hero-glass"
              onClick={() => handleSecondaryCta(currentSlide)}
              id={`btn-hero-secondary-${currentSlide.id}`}
            >
              <span>{currentSlide.ctaSecondary}</span>
            </button>
          </div>
        </div>

        {/* Bottom Carousel Navigation Bar */}
        <div className="hero-bottom-controls-bar">
          {/* Slide Indicator Tabs */}
          <div className="hero-tabs-selector">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                className={`hero-tab-pill ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`الانتقال إلى الشريحة ${slide.slideNum}: ${slide.badge}`}
              >
                <span className="hero-tab-num">{slide.slideNum}</span>
                <span className="hero-tab-title">{slide.badge}</span>
                {idx === currentIndex && (
                  <div 
                    className="hero-tab-progress"
                    style={{ width: `${progress}%` }} 
                  />
                )}
              </button>
            ))}
          </div>

          {/* Controls: Arrows & Pause/Play */}
          <div className="hero-nav-actions">
            <div className="hero-slide-counter">
              <span className="current-num">{currentSlide.slideNum}</span>
              <span className="separator">/</span>
              <span className="total-num">0{heroSlides.length}</span>
            </div>

            <div className="hero-arrows-wrap">
              <button 
                type="button" 
                className="hero-arrow-btn"
                onClick={prevSlide}
                aria-label="الشريحة السابقة"
                title="الشريحة السابقة"
              >
                <ChevronRight size={18} />
              </button>

              <button 
                type="button" 
                className="hero-pause-btn"
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? 'تشغيل التبديل التلقائي' : 'إيقاف مؤقت'}
                title={isPaused ? 'تشغيل' : 'إيقاف مؤقت'}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
              </button>

              <button 
                type="button" 
                className="hero-arrow-btn"
                onClick={nextSlide}
                aria-label="الشريحة التالية"
                title="الشريحة التالية"
              >
                <ChevronLeft size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="hero-wave-divider" aria-hidden="true">
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
          fill="#f8fafc"
        >
          <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z" />
        </svg>
      </div>
    </section>
  );
}
