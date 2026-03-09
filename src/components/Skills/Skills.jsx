import "./Skills.css";

const SKILLS = {
  "Frontend": [
    "HTML5, CSS3, XHTML, XML",
    "JavaScript, TypeScript",
    "React.js, Angular 8+",
    "Bootstrap, SASS, LESS",
    "Redux Architecture",
    "jQuery, AJAX",
  ],
  "Backend": [
    "Node.js, NestJS",
    "Express.js",
    "REST, SOAP, GraphQL",
    "Microservices Architecture",
    "AWS Lambda, Serverless",
    "MQTT Integration",
  ],
  "Databases": [
    "PostgreSQL, MySQL",
    "MongoDB, DynamoDB",
    "Mongoose, Sequelize",
    "TypeORM",
    "ElasticSearch",
    "AWS RDS",
  ],
  "Cloud & DevOps": [
    "AWS (EC2, S3, Lambda, API Gateway)",
    "AWS Cognito, CloudWatch, IAM",
    "Docker, Kubernetes",
    "CloudFormation",
    "Nginx, PM2",
    "GIT, JIRA",
  ],
  "Testing & Tools": [
    "Jest, Cypress",
    "Jasmine",
    "Unit & Integration Testing",
    "VSCode",
    "Agile / Scrum",
    "JIRA, Trello",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="dark:bg-gray-950 bg-stone-50">
      <div className="skills__wrapper">
        <p className="section-label text-indigo-500">What I Work With</p>
        <h2 className="section-title dark:text-white text-gray-900">Technical Skills</h2>

        <div className="skills__grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div
              key={category}
              className="skills__card dark:bg-gray-900 bg-white dark:border-white/7 border-black/8"
            >
              <h3 className="skills__category text-indigo-500">{category}</h3>
              <ul className="skills__list">
                {items.map((item) => (
                  <li key={item} className="skills__item dark:text-gray-400 text-gray-500">
                    <span className="skills__dot bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
