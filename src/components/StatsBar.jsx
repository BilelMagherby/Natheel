import React, { useState, useEffect, useRef } from 'react';
import { keyStats } from '../data/siteData';
import { Users, Layers, Briefcase, TrendingUp } from 'lucide-react';
import '../styles/StatsBar.css';

function CounterNumber({ target, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = target / (duration / 25);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return <span ref={ref}>{target < 10 && target === 4 ? `0${count}` : count.toLocaleString('en-US')}</span>;
}

export function StatsBar() {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'users':
        return <Users size={24} />;
      case 'layers':
        return <Layers size={24} />;
      case 'briefcase':
        return <Briefcase size={24} />;
      case 'trending-up':
        return <TrendingUp size={24} />;
      default:
        return <TrendingUp size={24} />;
    }
  };

  return (
    <section className="stats-section-wrapper" aria-label="أرقام وإنجازات نثيل">
      <div className="container">
        <div className="stats-card-container">
          {keyStats.map((stat) => (
            <div key={stat.id} className="stat-item-block">
              <div className="stat-icon-bubble">
                {renderIcon(stat.icon)}
              </div>

              <div className="stat-number-wrapper">
                {stat.prefix && <span className="stat-prefix">{stat.prefix}</span>}
                <CounterNumber target={stat.number} />
                {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
              </div>

              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
