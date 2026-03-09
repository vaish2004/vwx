import "./Experience.css";

const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "Prasantha — NapierHealth",
    period: "Recent",
    desc: "Healthcare management platform simplifying caregiving operations including home/residential care, health insurance, and occupational health. Designed microservice architecture, implemented middleware APIs, guided junior developers, and collaborated with CTO on new service architecture.",
    tags: ["Angular", "NodeJS", "MongoDB", "MySQL", "Microservices", "TypeScript", "Bootstrap"],
  },
  {
    role: "Backend Developer",
    company: "Hassan — BlockHealth",
    period: "Recent",
    desc: "Healthcare EMR platform for patients and facilities to schedule appointments, order medical equipment and medicines. Integrated multiple EHR APIs for medical data sharing across appointment, orders, and insurance microservices.",
    tags: ["ReactJS", "NodeJS", "PostgreSQL", "Microservices", "TypeScript", "Kubernetes", "EC2"],
  },
  {
    role: "Full Stack Developer",
    company: "Sam Chandra — Forestsafe",
    period: "Previous",
    desc: "Online platform to manage crew organisation data with file explorer, form-to-PDF conversion, admin portal with role-based login, document conversion, and offline forms. Served multiple organisations managing crew data and documentation.",
    tags: ["Angular 8", "ExpressJS", "MongoDB", "Mongoose", "Nginx", "PM2", "TypeScript"],
  },
  {
    role: "NodeJS Developer",
    company: "Jason — AirTrack",
    period: "Previous",
    desc: "Device tracking application on map with real-time device movement data via MQTT topic subscription from frontend. Admin manages devices; users view live movement. Built on serverless AWS infrastructure with Lambda and DynamoDB.",
    tags: ["ReactJS", "Redux", "NodeJS", "AWS Lambda", "DynamoDB", "GraphQL", "MQTT", "Docker"],
  },
  {
    role: "Sr. Full Stack Developer",
    company: "Morgan — Wirespeeds",
    period: "Previous",
    desc: "Device tracking and monitoring platform with iPerf Test, Ping, Trace Route and SAAS Monitoring. Features graphs, maps, QR codes, customer/device/policy management and MQTT-based alerts. Built on fully serverless AWS stack.",
    tags: ["ReactJS", "Redux", "NodeJS", "AWS Serverless", "PostgreSQL", "IoT Core", "ElasticSearch", "Cognito"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="dark:bg-gray-950 bg-stone-50">
      <div className="experience__wrapper">
        <p className="section-label text-indigo-500">Where I've Worked</p>
        <h2 className="section-title dark:text-white text-gray-900">Professional Experience</h2>

        <div className="experience__list">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.company}
              className="experience__card dark:bg-gray-900 bg-white dark:border-white/7 border-black/8"
            >
              <div className="experience__header">
                <div>
                  <h3 className="experience__role dark:text-white text-gray-900">{exp.role}</h3>
                  <p className="experience__company text-indigo-500">{exp.company}</p>
                </div>
                <span className="experience__period bg-green-500/10 text-green-400 border-green-500/25">
                  {exp.period}
                </span>
              </div>

              <p className="experience__desc dark:text-gray-400 text-gray-500">{exp.desc}</p>

              <div className="experience__tags">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="experience__tag dark:bg-indigo-500/10 bg-indigo-100 text-indigo-500 dark:border-indigo-500/20 border-indigo-300/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
