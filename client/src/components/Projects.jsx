import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/projects`)
      .then((res) => setProjects(res.data))
      .catch(() => setError('Failed to load projects.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Projects</h2>
      {loading && <p className="status">Loading projects…</p>}
      {error && <p className="status error">{error}</p>}
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}