export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-content">
        <div className="about-text">
          <h1>Hi, I'm <span className="highlight">Charles</span></h1>
          <h2>Full-Stack Developer</h2>
          <p>
            I build clean, performant web applications using the MERN stack.
            Passionate about turning ideas into products that people love to use.
          </p>
          <div className="about-links">
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="/resume.pdf" className="btn btn-secondary" target="_blank">
              Resume
            </a>
          </div>
        </div>
        <img src="/photo.jpeg" alt="Charles photo" className="avatar" />
      </div>
    </section>
  );
}