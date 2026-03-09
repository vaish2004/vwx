// import "./Projects.css";

// const PROJECTS = [
//   {
//     name: "NapierHealth",
//     domain: "Healthcare",
//     stats: [["Micro", "Services"], ["Multi", "Module"], ["EHR", "Ready"]],
//     desc: "Healthcare management platform covering home/residential care, health insurance, occupational health and connected health. Microservice-based with middleware APIs and Angular frontend.",
//     tags: ["Angular", "NodeJS", "MongoDB", "MySQL", "TypeScript", "Microservices"],
//   },
//   {
//     name: "BlockHealth",
//     domain: "Healthcare EMR",
//     stats: [["Multi", "EHR"], ["3+", "Services"], ["HIPAA", "Compliant"]],
//     desc: "EMR interface integrating multiple EHRs for appointment scheduling, medical equipment orders and insurance. Microservice architecture sharing data across services via REST APIs.",
//     tags: ["ReactJS", "NodeJS", "PostgreSQL", "Kubernetes", "TypeScript", "EC2"],
//   },
//   {
//     name: "AirTrack",
//     domain: "IoT / Tracking",
//     stats: [["Live", "MQTT"], ["AWS", "Lambda"], ["Real", "Time"]],
//     desc: "Real-time device tracking on map with live device data via MQTT subscription. Serverless AWS infrastructure with admin device management and user-facing movement visualization.",
//     tags: ["ReactJS", "Redux", "AWS Lambda", "DynamoDB", "GraphQL", "Docker"],
//   },
//   {
//     name: "Wirespeeds",
//     domain: "Network Monitoring",
//     stats: [["iPerf", "Test"], ["MQTT", "Alerts"], ["Full", "Serverless"]],
//     desc: "Network device monitoring with iPerf, Ping, Trace Route and SAAS monitoring. Graphs, maps, QR codes and full device/customer/policy management on serverless AWS.",
//     tags: ["ReactJS", "NodeJS", "AWS Serverless", "PostgreSQL", "IoT Core", "ElasticSearch"],
//   },
//   {
//     name: "Forestsafe",
//     domain: "Document Management",
//     stats: [["Multi", "Org"], ["Role", "Based"], ["Offline", "Forms"]],
//     desc: "Crew organisation data management with file explorer, form-to-PDF, document conversion, offline forms and role-based admin portal serving multiple organisations.",
//     tags: ["Angular 8", "ExpressJS", "MongoDB", "Nginx", "PM2", "TypeScript"],
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="dark:bg-gray-950 bg-stone-50">
//       <div className="projects__wrapper">
//         <p className="section-label text-indigo-500">What I've Built</p>
//         <h2 className="section-title dark:text-white text-gray-900">Key Projects</h2>

//         <div className="projects__grid">
//           {PROJECTS.map((project) => (
//             <div
//               key={project.name}
//               className="projects__card dark:bg-gray-900 bg-white dark:border-white/7 border-black/8"
//             >
//               <div className="projects__header">
//                 <h3 className="projects__name dark:text-white text-gray-900">{project.name}</h3>
//                 <span className="projects__domain dark:bg-indigo-500/10 bg-indigo-100 text-indigo-500 dark:border-indigo-500/20 border-indigo-300/50">
//                   {project.domain}
//                 </span>
//               </div>

//               <div className="projects__stats">
//                 {project.stats.map(([num, label]) => (
//                   <div
//                     key={label}
//                     className="projects__stat dark:bg-indigo-500/10 bg-indigo-50 dark:border-indigo-500/20 border-indigo-200"
//                   >
//                     <span className="projects__stat-num text-indigo-500">{num}</span>
//                     <span className="projects__stat-label dark:text-gray-400 text-gray-500">{label}</span>
//                   </div>
//                 ))}
//               </div>

//               <p className="projects__desc dark:text-gray-400 text-gray-500">{project.desc}</p>

//               <div className="projects__tags">
//                 {project.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="projects__tag dark:bg-indigo-500/10 bg-indigo-100 text-indigo-500 dark:border-indigo-500/20 border-indigo-300/50"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import "./Projects.css";

const PROJECTS = [
  {
    name: "NapierHealth",
    domain: "Healthcare",
    desc: "Healthcare management platform covering home/residential care, health insurance, occupational health and connected health. Microservice-based with middleware APIs and Angular frontend.",
    highlights: ["Microservice Architecture", "Middleware APIs", "Multi-module"],
    tags: ["Angular", "NodeJS", "MongoDB", "MySQL", "TypeScript", "Microservices"],
  },
  {
    name: "BlockHealth",
    domain: "Healthcare EMR",
    desc: "EMR interface integrating multiple EHRs for appointment scheduling, medical equipment orders and insurance. Microservice architecture sharing data across services via REST APIs.",
    highlights: ["Multi EHR Integration", "3+ Microservices", "HIPAA Compliant"],
    tags: ["ReactJS", "NodeJS", "PostgreSQL", "Kubernetes", "TypeScript", "EC2"],
  },
  {
    name: "AirTrack",
    domain: "IoT / Tracking",
    desc: "Real-time device tracking on map with live device data via MQTT subscription. Serverless AWS infrastructure with admin device management and user-facing movement visualization.",
    highlights: ["Live MQTT Feed", "AWS Serverless", "Real-time Map"],
    tags: ["ReactJS", "Redux", "AWS Lambda", "DynamoDB", "GraphQL", "Docker"],
  },
  {
    name: "Wirespeeds",
    domain: "Network Monitoring",
    desc: "Network device monitoring with iPerf, Ping, Trace Route and SAAS monitoring. Graphs, maps, QR codes and full device/customer/policy management on serverless AWS.",
    highlights: ["iPerf & Ping Tests", "MQTT Alerts", "Full Serverless"],
    tags: ["ReactJS", "NodeJS", "AWS Serverless", "PostgreSQL", "IoT Core", "ElasticSearch"],
  },
  {
    name: "Forestsafe",
    domain: "Document Management",
    desc: "Crew organisation data management with file explorer, form-to-PDF, document conversion, offline forms and role-based admin portal serving multiple organisations.",
    highlights: ["Multi-org Support", "Role Based Login", "Offline Forms"],
    tags: ["Angular 8", "ExpressJS", "MongoDB", "Nginx", "PM2", "TypeScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="dark:bg-gray-950 bg-stone-50">
      <div className="projects__wrapper">
        <p className="section-label text-indigo-500">What I've Built</p>
        <h2 className="section-title dark:text-white text-gray-900">Key Projects</h2>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="projects__card dark:bg-gray-900 bg-white dark:border-white/7 border-black/8"
            >
              {/* Header — name + domain badge */}
              <div className="projects__header">
                <h3 className="projects__name dark:text-white text-gray-900">{project.name}</h3>
                <span className="projects__domain text-indigo-500 dark:bg-indigo-500/10 bg-indigo-50 dark:border-indigo-500/20 border-indigo-200">
                  {project.domain}
                </span>
              </div>

              {/* Highlights — small pill row */}
              <div className="projects__highlights">
                {project.highlights.map((h) => (
                  <span key={h} className="projects__highlight dark:bg-white/5 bg-gray-100 dark:text-gray-300 text-gray-600">
                    ✦ {h}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="projects__desc dark:text-gray-400 text-gray-500">{project.desc}</p>

              {/* Tech tags */}
              <div className="projects__tags">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="projects__tag dark:bg-indigo-500/10 bg-indigo-100 text-indigo-500 dark:border-indigo-500/20 border-indigo-300/50"
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