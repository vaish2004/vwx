import "./Architecture.css";

const PRACTICES = [
  {
    title: "Agile & Scrum",
    desc: "8+ years working in Agile/Scrum environments using JIRA and Trello. Daily standups, sprint planning, code reviews and peer reviews.",
  },
  {
    title: "Microservice Design",
    desc: "Designed microservice-based architectures from scratch, creating reusable components and low-level design documents for each service.",
  },
  {
    title: "MVC & SPA Architecture",
    desc: "Expert in MVC architectures and single-page application development using Angular and React with Redux state management.",
  },
  {
    title: "REST & GraphQL APIs",
    desc: "Built and consumed REST and GraphQL APIs with Express and NestJS. Implemented middleware APIs, auth guards and HTTP interceptors.",
  },
  {
    title: "Cross-browser & Responsive",
    desc: "Deep knowledge of DOM layout, CSS3, Bootstrap and cross-browser compatibility. Customised Bootstrap plugins for carousels, modals and accordions.",
  },
  {
    title: "Testing & Quality",
    desc: "Unit and integration testing using Jest, Cypress and Jasmine. Writes functional requirement docs, design documents and test cases.",
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="dark:bg-gray-950 bg-stone-50">
      <div className="architecture__wrapper">
        <p className="section-label text-indigo-500">How I Work</p>
        <h2 className="section-title dark:text-white text-gray-900">Engineering Practices</h2>

        <div className="architecture__grid">
          {PRACTICES.map((item) => (
            <div
              key={item.title}
              className="architecture__card dark:bg-gray-900 bg-white dark:border-white/7 border-black/8"
            >
              <span className="architecture__bar bg-indigo-500" />
              <div>
                <h4 className="architecture__title dark:text-white text-gray-900">{item.title}</h4>
                <p className="architecture__desc dark:text-gray-400 text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
