import React, { useState } from 'react';
import { projectsData, projectCategories } from '../data/projectsData';
import { ArrowLeft, Sparkles, Building2 } from 'lucide-react';
import '../styles/ProjectsSection.css';

export function ProjectsSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter((p) => p.categoryKey === activeCategory);

  return (
    <section className="projects-section" id="projects" aria-label="مشاريع نثيل">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={18} />
            <span>مشاريعنا واستثماراتنا</span>
          </div>
          <h2>نستثمر في مشاريع نوعية تصنع الفارق وترتقي بالمجتمع</h2>
          <p>
            تضم محفظة نثيل كيانات رائدة في مجالات التطوير العقاري، الضيافة الراقية، التصميم الداخلي، والتسويق الإبداعي.
          </p>
        </div>

        {/* Category Filters */}
        <div className="projects-filter-nav">
          {projectCategories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`filter-tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article 
              key={project.id} 
              className="project-card"
              onClick={() => onSelectProject(project)}
            >
              {/* Card Image */}
              <div className="project-card-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.nameAr} 
                  loading="lazy"
                />
                
                <div className="project-card-overlay-badges">
                  <span className="project-badge-category">{project.category}</span>
                  <span className="project-badge-year">{project.year}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <h3 className="project-card-title">
                  <span>{project.nameAr}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                    {project.nameEn}
                  </span>
                </h3>

                <div className="project-card-tagline">
                  {project.tagline}
                </div>

                <p className="project-card-summary">
                  {project.summary}
                </p>

                {/* Card Action */}
                <div className="project-card-footer">
                  <div className="project-tags-preview">
                    {project.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="mini-tag">{t}</span>
                    ))}
                  </div>

                  <button 
                    type="button" 
                    className="btn-learn-more"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    id={`btn-project-${project.id}`}
                  >
                    <span>اعرف أكثر</span>
                    <ArrowLeft size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
