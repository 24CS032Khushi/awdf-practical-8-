import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SITE } from '../data/site';

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Secure by design',
    text: 'Passwords hashed with bcrypt and sessions protected with expiring JWT tokens.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Fast loading',
    text: 'Route-based code splitting with React.lazy() - pages download only when you visit them.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
    ),
    title: 'Smart analytics',
    text: 'Charts for your task progress, loaded only when you open the analytics panel.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
    title: 'Validated input',
    text: 'Every request is checked on the server before it ever reaches the database.',
  },
];

const STACK = ['React 18', 'Vite', 'React Router', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt'];

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <section className="hero">
        <span className="pill">{SITE.course}</span>
        <h1>
          {SITE.tagline.split('.')[0]}. <span className="gradient-text">Finish it.</span>
        </h1>
        <p className="hero-sub">
          {SITE.name} is a full-stack task manager built with React, Express and MongoDB -
          optimised with code splitting and lazy loading.
        </p>
        <div className="hero-cta">
          {user ? (
            <Link to="/tasks" className="btn btn-primary btn-lg">Open my tasks</Link>
          ) : (
            <>
              <Link to="/register" className="btn btn-primary btn-lg">Get started free</Link>
              <Link to="/login" className="btn btn-ghost btn-lg">I have an account</Link>
            </>
          )}
        </div>
      </section>

      <section className="grid grid-4">
        {FEATURES.map((f) => (
          <article key={f.title} className="card feature">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p className="muted">{f.text}</p>
          </article>
        ))}
      </section>

      <section className="card stack-card">
        <h2>Built with</h2>
        <div className="tag-row">
          {STACK.map((s) => <span key={s} className="tag">{s}</span>)}
        </div>
      </section>
    </>
  );
}
