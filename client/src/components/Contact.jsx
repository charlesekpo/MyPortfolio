import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace this with EmailJS, Formspree, or your own backend endpoint
    setStatus('Message sent! I\'ll be in touch soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Get In Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="What would you like to discuss?"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary">Send Message</button>
        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
}