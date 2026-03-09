import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="dark:bg-gray-900/50 bg-stone-100">
      <div className="contact__wrapper">
        <p className="section-label text-indigo-500">Let's Work Together</p>
        <h2 className="section-title dark:text-white text-gray-900">Get In Touch</h2>

        <p className="contact__desc dark:text-gray-400 text-gray-500">
          Open to full stack, frontend or backend roles where I can build
          scalable systems, lead teams, and deliver quality products.
        </p>

        <div className="contact__status dark:bg-indigo-500/10 bg-indigo-100 dark:border-indigo-500/20 border-indigo-300/50 text-indigo-500">
          <span className="contact__dot bg-green-400" />
          Available for New Opportunities
        </div>

        <div className="contact__actions">
          <a
            href="mailto:jiten@email.com"
            className="contact__btn-primary bg-indigo-500 hover:bg-indigo-600 text-white"
          >
            Send an Email →
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="contact__btn-secondary dark:border-white/10 border-black/10 dark:text-white text-gray-800 dark:hover:border-indigo-500 hover:border-indigo-400"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
