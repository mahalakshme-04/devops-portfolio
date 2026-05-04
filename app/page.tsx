const skillGroups = [
  {
    title: "Cloud platforms",
    items: [
      "AWS EC2",
      "S3",
      "RDS MySQL",
      "ALB",
      "Route 53",
      "ACM",
      "Lambda",
      "MediaConvert",
      "Cognito",
      "Azure basics",
    ],
  },
  {
    title: "DevOps tools",
    items: [
      "Jenkins",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Ansible",
      "Git",
      "GitHub",
      "Linux Ubuntu",
    ],
  },
  {
    title: "Programming and data",
    items: [
      "Python",
      "SQL",
      "MySQL",
      "Pandas",
      "PySpark",
      "Jupyter Notebook",
      "Matplotlib",
      "VS Code",
    ],
  },
  {
    title: "Core competencies",
    items: [
      "CI/CD automation",
      "Infrastructure as Code",
      "ETL pipelines",
      "System design",
      "SDLC",
      "Cloud architecture",
      "Automation",
      "Support operations",
    ],
  },
];

const stats = [
  { value: "300+", label: "Terraform lines written" },
  { value: "80%", label: "manual effort reduced" },
  { value: "100%", label: "automated media workflow" },
  { value: "500+", label: "citizen applications processed" },
];

const experiences = [
  {
    company: "Birlasoft",
    location: "Coimbatore, TN",
    role: "ICTS Intern - Apprenticeship",
    period: "Oct 2025 - Current",
    highlights: [
      "Designed and deployed a cloud-based OTT streaming platform using AWS services including EC2, S3, RDS, ALB, Route 53, Lambda, MediaConvert, and Cognito.",
      "Implemented Terraform Infrastructure as Code for a multi-AZ architecture with VPC, 6 subnets, EC2, ALB, and RDS with read replica.",
      "Built Jenkins and GitHub CI/CD pipelines, then automated configuration and backups with Ansible to reduce manual effort by 80%.",
      "Developed an event-driven S3, Lambda, and MediaConvert pipeline for fully automated MP4 video transcoding.",
    ],
  },
  {
    company: "Common Service Center",
    location: "Trichy, TN",
    role: "Customer and Tech Support",
    period: "Dec 2022 - Jan 2025",
    highlights: [
      "Collaborated with local teams to deliver citizen services and process 500+ online applications.",
      "Reviewed, verified, and processed government forms with high accuracy in a fast-paced service environment.",
      "Took initiative to improve service delivery while strengthening analytical thinking and customer support discipline.",
    ],
  },
];

const projects = [
  {
    name: "Video Streaming Platform",
    type: "AWS, WordPress, DevOps tools",
    summary:
      "Built a scalable OTT platform during Birlasoft's DevOps Bootcamp with automated cloud provisioning and media processing.",
    details: [
      "Provisioned 15+ cloud resources using AWS and Terraform.",
      "Automated deployments and configuration with Jenkins and Ansible.",
      "Used S3, Lambda, and MediaConvert for fully automated video workflows.",
    ],
  },
  {
    name: "Spotify Track Data Pipeline",
    type: "Python, Pandas, Matplotlib, MySQL",
    summary:
      "Created a custom ETL pipeline to fetch audio features, transform records, store structured data, and visualize trends.",
    details: [
      "Integrated the Spotipy API to collect audio feature data.",
      "Transformed and stored data in MySQL for 2,000+ tracks.",
      "Visualized track behavior patterns with Matplotlib.",
    ],
  },
  {
    name: "Netflix Data Pipeline",
    type: "Azure Data Factory, Databricks, PySpark, Synapse",
    summary:
      "Built a real-time and batch ingestion pipeline with transformations, governance, analytics, and workflow automation.",
    details: [
      "Processed 100k+ records per day with PySpark and Autoloader.",
      "Used Unity Catalog for governance and Azure Synapse for analytics.",
      "Optimized queries across 10GB+ datasets with Delta Live Tables.",
    ],
  },
];

const navItems = ["Profile", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Mahalakshme S home">
          MS
        </a>
        <div className="navLinks">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="heroCopy">
          <p className="eyebrow">DevOps and Cloud Intern</p>
          <h1>Mahalakshme S.</h1>
          <p className="heroText">
            I build cloud infrastructure, automate delivery pipelines, and turn
            operational workflows into reliable, repeatable systems across AWS,
            Jenkins, Terraform, Docker, Kubernetes, Ansible, and Linux.
          </p>
          <div className="actions" aria-label="Hero actions">
            <a className="button primary" href="#projects">
              View projects
            </a>
            <a className="button secondary" href="/Resume_Mahalakshme_S_DevOps.pdf">
              Download resume
            </a>
          </div>
        </div>

        <div className="heroVisual" aria-label="Cloud automation snapshot">
          <div className="orbitPanel">
            <div className="panelHeader">
              <span>cloud-ops.yml</span>
              <strong>Live</strong>
            </div>
            <div className="pipeline">
              <span>Source</span>
              <span>Build</span>
              <span>Provision</span>
              <span>Deploy</span>
            </div>
            <div className="signalBoard">
              <div>
                <small>Cloud</small>
                <strong>AWS + Azure</strong>
              </div>
              <div>
                <small>Automation</small>
                <strong>CI/CD + IaC</strong>
              </div>
              <div>
                <small>Focus</small>
                <strong>Reliable delivery</strong>
              </div>
            </div>
          </div>
          <div className="metricGrid">
            {stats.map((stat) => (
              <div className="metric" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="profile" className="profile section" aria-labelledby="profile-title">
        <div className="sectionKicker">Profile</div>
        <div>
          <h2 id="profile-title">Cloud automation with delivery discipline.</h2>
          <p>
            DevOps and Cloud Intern at Birlasoft with practical experience in
            AWS services, Jenkins CI/CD automation, Terraform Infrastructure as
            Code, Docker, Kubernetes, and Ansible. Strong understanding of cloud
            architecture, automation, deployment best practices, and support
            operations.
          </p>
        </div>
      </section>

      <section id="skills" className="section" aria-labelledby="skills-title">
        <div className="sectionHeader">
          <p className="eyebrow">Skills</p>
          <h2 id="skills-title">A practical DevOps toolkit</h2>
        </div>
        <div className="skillGrid">
          {skillGroups.map((group) => (
            <article className="skillCard" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="section experience"
        aria-labelledby="experience-title"
      >
        <div className="sectionHeader">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">Work shaped by automation and service delivery</h2>
        </div>
        <div className="timeline">
          {experiences.map((job) => (
            <article className="timelineItem" key={`${job.company}-${job.role}`}>
              <div>
                <p className="period">{job.period}</p>
                <h3>{job.role}</h3>
                <p className="company">
                  {job.company} - {job.location}
                </p>
              </div>
              <ul>
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects" aria-labelledby="projects-title">
        <div className="sectionHeader">
          <p className="eyebrow">Projects</p>
          <h2 id="projects-title">Technical projects with measurable scope</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.name}>
              <div>
                <p className="projectType">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
              <ul>
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="education"
        className="section education"
        aria-labelledby="education-title"
      >
        <div>
          <p className="eyebrow">Education</p>
          <h2 id="education-title">Bachelor of Computer Science</h2>
          <p>
            Bishop Heber College, Trichy, India
            <br />
            July 2022 - May 2025
          </p>
        </div>
        <div className="credentialPanel">
          <div>
            <span>CGPA</span>
            <strong>8.1 / 10</strong>
          </div>
          <div>
            <span>Certification</span>
            <strong>AZ-900 Microsoft Azure Fundamentals</strong>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Open to DevOps and cloud opportunities.</h2>
          <p>
            Available to begin operations immediately and open to relocation for
            the right cloud, DevOps, or infrastructure role.
          </p>
        </div>
        <div className="contactPanel" aria-label="Contact details">
          <a href="mailto:mahalinked@gmail.com">mahalinked@gmail.com</a>
          <a href="tel:+917094555050">+91 70945 55050</a>
          <a
            href="https://www.linkedin.com/in/mahalakshme/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn profile
          </a>
          <a href="/Resume_Mahalakshme_S_DevOps.pdf">Resume PDF</a>
        </div>
      </section>
    </main>
  );
}
