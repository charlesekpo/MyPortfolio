export default function ProjectCard({ project }) {
  const { title, description, imageUrl, liveLink, githubLink, tags } = project;

  return (
    <article className="card">
      <img src={imageUrl} alt={title} className="card-img" loading="lazy" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        {tags?.length > 0 && (
          <ul className="tags">
            {tags.map((tag) => (
              <li key={tag} className="tag">{tag}</li>
            ))}
          </ul>
        )}
        <div className="card-links">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer" className="btn btn-secondary">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}