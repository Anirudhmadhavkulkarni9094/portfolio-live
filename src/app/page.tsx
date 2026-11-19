import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Mail,
} from "lucide-react";
import GetQuote from "@/components/GetQuote/GetQuote";

const projects = [
  {
    number: "01",
    name: "Clinecxa",
    kind: "Healthcare · Sri Lanka",
    summary:
      "Access to care from home should still feel direct, secure and easy to arrange.",
    challenge:
      "People looking for care need to find a trusted clinician and arrange a consultation without travelling.",
    response:
      "Clinecxa brings certified professionals, appointment scheduling and video consultations into a remote-care experience, with prescriptions and follow-ups beyond the call.",
    url: "https://clinecxa.lk/",
    visual: "clinecxa",
    screenshot: "/clinecxa-site.png",
  },
  {
    number: "02",
    name: "Floworq",
    kind: "People operations · Australia",
    summary:
      "Workforce coordination shouldn’t be spread across spreadsheets and WhatsApp.",
    challenge:
      "Teams coordinating work across messages and spreadsheets need one dependable view of employees, schedules, tasks and compliance.",
    response:
      "Floworq brings employee records, jobs, scheduling, attendance, timesheets and documents together, with payroll integration.",
    url: "https://www.floworq.com/",
    visual: "floworq",
    screenshot: "/floworq-site.png",
  },
  {
    number: "03",
    name: "IPractis",
    kind: "Education",
    summary:
      "The right tutor is only useful if lessons fit a learner’s goals and schedule.",
    challenge:
      "Students need one-to-one tutoring matched to their level and goals, with scheduling that can adapt when plans change.",
    response:
      "IPractis connects students with tutors for live online lessons, flexible scheduling and rescheduling, and learning resources between sessions.",
    url: "https://ipractis.com/",
    visual: "ipractis",
    screenshot: "/ipractis-site.png",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Product engineering",
    description:
      "From a first useful version to the details that make a product feel considered.",
  },
  {
    number: "02",
    title: "Full-stack development",
    description:
      "Interfaces and application logic that work together, built with React and Next.js.",
  },
  {
    number: "03",
    title: "Backend systems",
    description:
      "APIs and data flows with Node.js, Express and MongoDB, shaped around the product.",
  },
  {
    number: "04",
    title: "Infrastructure",
    description:
      "Interested in the practical work of getting software into production and keeping it reliable.",
  },
  {
    number: "05",
    title: "Applied AI",
    description:
      "Exploring useful ways to bring AI into products without losing sight of the user or the system.",
  },
];

export default function Home() {
  return (
    <main className="portfolio">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Anirudh Kulkarni, home">
          AK<span>.</span>
        </a>
        <nav className="primary-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
          <a href="/blogs">Journal</a>
          <a className="nav-contact" href="#contact">
            Get in touch <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> Software engineer · Bengaluru, India</p>
          <h1 id="hero-title">
            Building software,
            <br />
            products <span className="and">&amp;</span> systems<span className="period">.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              I&apos;m Anirudh — a software engineer who enjoys working across the
              stack, thinking through the details, and taking ideas into
              production.
            </p>
            <a className="text-link" href="#work">
              Explore selected work <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="portrait">
          <Image
            src="/Profile.jpg"
            alt="Anirudh Kulkarni"
            width={520}
            height={620}
            sizes="(max-width: 760px) 42vw, 320px"
          />
          <figcaption>
            <span>ANIRUDH KULKARNI</span>
            <span>SOFTWARE ENGINEER</span>
          </figcaption>
        </figure>
      </section>

      <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="section-label"><span>01</span> Selected work</p>
          <h2 id="work-title">Products made for real people.</h2>
          <p className="section-intro">
            A few products I&apos;ve had the chance to work on. Each one starts
            with a different problem; the details here stick to what I can
            verify.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project project-${project.visual}`} key={project.name}>
              <a
                className="project-visual"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.name} website`}
              >
                <Image
                  className={`project-screenshot project-screenshot-${project.visual}`}
                  src={project.screenshot}
                  alt={`Screenshot of the ${project.name} website`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 560px"
                />
                <span className="visual-open" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </a>
              <div className="project-details">
                <div className="project-title-line">
                  <span className="project-number">{project.number}</span>
                  <div>
                    <p className="project-kind">{project.kind}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.name} website`}
                  >
                    Visit site <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
                <p className="project-summary">{project.summary}</p>
                <div className="project-story">
                  <div className="story-point">
                    <span>The need</span>
                    <p>{project.challenge}</p>
                  </div>
                  <div className="story-point">
                    <span>Product response</span>
                    <p>{project.response}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section section-wrap" id="approach" aria-labelledby="approach-title">
        <div className="section-heading approach-heading">
          <p className="section-label"><span>02</span> Engineering</p>
          <h2 id="approach-title">Good software is a team sport.</h2>
          <p className="section-intro">
            I care about how a product feels to use and how it holds up under
            the hood. The work is connecting those two things.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
        <p className="tech-line">
          <span>Tools I work with</span>
          React · Next.js · Node.js · Express · MongoDB
        </p>
      </section>

      <section className="experience-section section-wrap" aria-labelledby="experience-title">
        <div className="experience-intro">
          <p className="section-label"><span>03</span> Experience</p>
          <h2 id="experience-title">Three years of building for the web.</h2>
        </div>
        <div className="experience-detail">
          <span className="experience-rule" />
          <p>
            My work so far has been about building and shipping web products,
            from full-stack applications to software for early-stage teams.
            I&apos;m most at home where product decisions and engineering meet.
          </p>
        </div>
      </section>

      <section className="notes-section section-wrap" aria-labelledby="notes-title">
        <div>
          <p className="section-label"><span>04</span> Field notes</p>
          <h2 id="notes-title">Lately, I&apos;ve been thinking about<span className="period">.</span></h2>
        </div>
        <div className="notes-content">
          <p>
            Applied AI that earns its place in a product. System design that
            makes trade-offs clear. The infrastructure and developer tools
            that make shipping feel less fragile.
          </p>
          <span className="notes-aside">Things I&apos;m curious about — not a checklist.</span>
        </div>
      </section>

      <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
        <p className="section-label"><span>05</span> A little more</p>
        <div className="about-copy">
          <h2 id="about-title">Engineer by trade.<br />Builder by nature.</h2>
          <div>
            <p>
              I like making things that are useful, learning how they work,
              and figuring out how they could work better. Outside the editor,
              I&apos;m usually reading, planning a trip, or finding another
              rabbit hole to follow.
            </p>
            <p>
              I&apos;m based in Bengaluru, India, and interested in thoughtful
              teams building ambitious things.
            </p>
          </div>
        </div>
      </section>

      <footer className="contact-section section-wrap" id="contact">
        <p className="section-label"><span>06</span> Contact</p>
        <div className="contact-main">
          <div>
            <p className="contact-overline">Have something interesting to build?</p>
            <h2>Let&apos;s make it<br />work in the world<span className="period">.</span></h2>
          </div>
          <a className="contact-email" href="mailto:anirudh.kulkarni.dev@gmail.com">
            <Mail size={17} aria-hidden="true" />
            anirudh.kulkarni.dev@gmail.com
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <GetQuote />
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Anirudh Kulkarni</span>
          <span>Bengaluru, India</span>
          <a href="https://github.com/Anirudhmadhavkulkarni9094" target="_blank" rel="noreferrer">
            <Github size={15} aria-hidden="true" /> GitHub
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}
