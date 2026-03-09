import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero dark:bg-gray-950 bg-stone-50">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge dark:bg-indigo-500/10 bg-indigo-100 dark:border-indigo-500/20 border-indigo-300/50 text-indigo-500">
          <span className="hero__dot bg-green-400" />
          8+ Years of Experience
        </div>

        <h1 className="hero__title dark:text-white text-gray-900">
          Jiten M
          <span className="block text-indigo-500">MEAN Stack Developer</span>
        </h1>

        <p className="hero__desc dark:text-gray-400 text-gray-500">
          8+ years building scalable web applications with Angular, React, Node.js,
          NestJS and cloud platforms. Expert in microservices, REST APIs, and
          full-stack delivery across healthcare and IoT domains.
        </p>

        <div className="hero__actions">
          <button
            className="hero__btn-primary bg-indigo-500 hover:bg-indigo-600 text-white"
            onClick={() => scrollTo("contact")}
          >
            Get In Touch →
          </button>
          <button
            className="hero__btn-secondary dark:border-white/10 border-black/10 dark:text-white text-gray-800 dark:hover:border-indigo-500 hover:border-indigo-400"
            onClick={() => scrollTo("experience")}
          >
            View Experience ↓
          </button>
        </div>
      </div>
    </section>
  );
}
