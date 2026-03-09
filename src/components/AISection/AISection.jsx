import "./AISection.css";

const EXPERTISE = [
  {
    icon: "🏥",
    title: "Healthcare Domain",
    desc: "Built EMR interfaces, appointment scheduling, insurance and EHR integrations across NapierHealth and BlockHealth platforms.",
  },
  {
    icon: "📡",
    title: "IoT & Real-Time",
    desc: "MQTT topic subscription for live device data, real-time tracking maps, and device monitoring dashboards in AirTrack and Wirespeeds.",
  },
  {
    icon: "☁️",
    title: "AWS Serverless",
    desc: "Lambda, API Gateway, DynamoDB, Cognito, IoT Core, ElasticSearch and CloudFormation for fully serverless production applications.",
  },
  {
    icon: "🔧",
    title: "Microservices",
    desc: "Designed and built microservice architectures, middleware APIs, and inter-service communication across multiple enterprise projects.",
  },
];

export default function AISection() {
  return (
    <section id="ai" className="dark:bg-gray-950 bg-stone-50">
      <div className="ai__wrapper">
        <p className="section-label text-indigo-500">Core Expertise</p>
        <h2 className="section-title dark:text-white text-gray-900">Domain Specialisations</h2>

        <div className="ai__grid">
          {EXPERTISE.map((card) => (
            <div
              key={card.title}
              className="ai__card dark:bg-gray-900 bg-white dark:border-white/7 border-black/8"
            >
              <span className="ai__icon">{card.icon}</span>
              <h3 className="ai__title dark:text-white text-gray-900">{card.title}</h3>
              <p className="ai__desc dark:text-gray-400 text-gray-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
