import { StrictMode, type CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  stack: string[];
  features: string[];
  screenshots: Array<{ src: string; alt: string }>;
  links: ProjectLink[];
};

const email = "jeanchristopheparfait@gmail.com";

const projects: Project[] = [
  {
    id: "tiny-act",
    number: "01",
    title: "Tiny Act",
    subtitle: "Transformer l’inertie en petite action concrète.",
    description:
      "Une application mobile qui recommande une micro-activité selon l’humeur, le lieu, le temps disponible et les centres d’intérêt. Le parcours se prolonge avec un historique, une progression par XP et une room personnalisable.",
    accent: "#d7ff58",
    stack: ["React Native", "Expo", "TypeScript", "Ruby on Rails", "PostgreSQL"],
    features: [
      "Recommandation contextuelle et activités guidées",
      "API Rails, authentification par token et logique XP centralisée",
      "APK Android, déploiement Heroku, tests et CI GitHub Actions",
    ],
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/jcparfait/Tiny_act/main/docs/screenshots/mobile/login.png",
        alt: "Écran de connexion de Tiny Act",
      },
      {
        src: "https://raw.githubusercontent.com/jcparfait/Tiny_act/main/docs/screenshots/mobile/recommendation.png",
        alt: "Parcours de recommandation de Tiny Act",
      },
      {
        src: "https://raw.githubusercontent.com/jcparfait/Tiny_act/main/docs/screenshots/mobile/activity.png",
        alt: "Exécution d’une activité dans Tiny Act",
      },
      {
        src: "https://raw.githubusercontent.com/jcparfait/Tiny_act/main/docs/screenshots/mobile/room.png",
        alt: "Room personnalisable et progression dans Tiny Act",
      },
    ],
    links: [
      {
        label: "Voir le dépôt",
        href: "https://github.com/jcparfait/Tiny_act",
        primary: true,
      },
      {
        label: "Installer l’APK",
        href: "https://github.com/jcparfait/Tiny_act/releases/tag/v1.0.0-mobile-demo",
      },
    ],
  },
  {
    id: "bill",
    number: "02",
    title: "Bill",
    subtitle: "Un bar conversationnel où l’IA reste sous contrôle.",
    description:
      "Une application Rails qui dialogue avec l’utilisateur, comprend son humeur et ses contraintes, puis recommande un cocktail réel. Le LLM gère la conversation tandis que la logique métier Ruby contrôle les exclusions, les doublons et les fallbacks.",
    accent: "#ff9f66",
    stack: ["Ruby on Rails", "Hotwire", "Turbo Streams", "RubyLLM", "TheCocktailDB"],
    features: [
      "Décision structurée entre conversation et recommandation",
      "Données cocktail réelles, bibliothèque personnelle et historique",
      "Fallbacks métier, responsive mobile et déploiement Heroku",
    ],
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/jcparfait/Bill/master/docs/screenshots/mobile-home.jpg",
        alt: "Accueil mobile de Bill",
      },
      {
        src: "https://raw.githubusercontent.com/jcparfait/Bill/master/docs/screenshots/mobile-chat.jpg",
        alt: "Conversation mobile avec Bill",
      },
      {
        src: "https://raw.githubusercontent.com/jcparfait/Bill/master/docs/screenshots/mobile-cocktails.jpg",
        alt: "Bibliothèque personnelle de cocktails dans Bill",
      },
    ],
    links: [
      {
        label: "Voir la démo",
        href: "https://bill-jcparfait-8fb7a6f900f1.herokuapp.com",
        primary: true,
      },
      {
        label: "Voir le dépôt",
        href: "https://github.com/jcparfait/Bill",
      },
    ],
  },
  {
    id: "reelist",
    number: "03",
    title: "Reelist",
    subtitle: "Une bibliothèque cinéma pensée comme un produit.",
    description:
      "Une application Rails mobile-first pour créer des collections, importer des films depuis TMDB, choisir des visuels via Pexels et obtenir une recommandation Movie Night selon l’humeur, la durée et le genre.",
    accent: "#7db9ff",
    stack: ["Ruby on Rails", "PostgreSQL", "Devise", "TMDB", "Pexels"],
    features: [
      "Collections et avis propres à chaque utilisateur",
      "Recherche externe, import de films et recommandation Movie Night",
      "Interface responsive, tests, sécurité et CI GitHub Actions",
    ],
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/jcparfait/reelist/master/docs/screenshots/mobile-home.png",
        alt: "Bibliothèque mobile de Reelist",
      },
      {
        src: "https://raw.githubusercontent.com/jcparfait/reelist/master/docs/screenshots/mobile-movie-night.png",
        alt: "Filtres Movie Night de Reelist",
      },
      {
        src: "https://raw.githubusercontent.com/jcparfait/reelist/master/docs/screenshots/mobile-collection.png",
        alt: "Détail d’une collection dans Reelist",
      },
    ],
    links: [
      {
        label: "Voir la démo",
        href: "https://jcparf-reelist-14840d80eec3.herokuapp.com",
        primary: true,
      },
      {
        label: "Voir le dépôt",
        href: "https://github.com/jcparfait/reelist",
      },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  return (
    <a
      className={link.primary ? "button button-primary" : "button button-secondary"}
      href={link.href}
      target="_blank"
      rel="noreferrer"
    >
      {link.label}
      <ArrowIcon />
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const projectStyle = { "--project-accent": project.accent } as CSSProperties;

  return (
    <article className="project" id={project.id} style={projectStyle}>
      <div className="project-copy">
        <div className="project-kicker">
          <span>{project.number}</span>
          <span>Projet sélectionné</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>

        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="stack-list" aria-label={`Technologies de ${project.title}`}>
          {project.stack.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.links.map((link) => (
            <ProjectLinkButton key={link.href} link={link} />
          ))}
        </div>
      </div>

      <div className="screenshots" aria-label={`Captures d’écran de ${project.title}`}>
        {project.screenshots.map((screenshot, index) => (
          <figure className="phone-frame" key={screenshot.src}>
            <span className="phone-index">{String(index + 1).padStart(2, "0")}</span>
            <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Retour en haut">
          JCP<span>.</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#projects">Projets</a>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
        </nav>
        <a className="header-contact" href={`mailto:${email}`}>
          Contact
          <ArrowIcon />
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Paris · Développement full-stack</p>
            <h1>
              Je conçois des applications
              <span> utiles, lisibles et concrètes.</span>
            </h1>
            <p className="hero-intro">
              Développeur Ruby on Rails et React Native, je transforme des besoins réels en produits fonctionnels, du modèle de données jusqu’à l’interface mobile.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Voir les projets
                <ArrowIcon />
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/jcparfait"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Approche de travail">
            <div className="panel-header">
              <span>product-thinking.md</span>
              <span className="status-dot">actif</span>
            </div>
            <div className="panel-body">
              <p><span>01</span> Partir d’un usage concret.</p>
              <p><span>02</span> Séparer interface et logique métier.</p>
              <p><span>03</span> Tester les parcours critiques.</p>
              <p><span>04</span> Livrer une démonstration accessible.</p>
            </div>
            <div className="panel-footer">
              <span>Rails</span>
              <span>React Native</span>
              <span>TypeScript</span>
            </div>
          </aside>

          <div className="hero-metrics" aria-label="Résumé du portfolio">
            <div><strong>3</strong><span>produits terminés</span></div>
            <div><strong>2</strong><span>écosystèmes principaux</span></div>
            <div><strong>100%</strong><span>déployés et démontrables</span></div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Travaux sélectionnés</p>
            <h2>Trois projets, trois problèmes résolus.</h2>
            <p>
              Chaque projet présente une logique métier, un parcours utilisateur et une mise en production vérifiable.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-heading compact">
            <p className="eyebrow">À propos</p>
            <h2>Un parcours construit entre production, image et code.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                Avant ma reconversion, j’ai dirigé un studio photo dans un environnement de production exigeant. Il fallait structurer les flux, coordonner les besoins techniques et créatifs, identifier les blocages et livrer avec constance.
              </p>
              <p>
                Le développement prolonge cette démarche : comprendre un usage, modéliser le problème, construire une solution puis vérifier qu’elle fonctionne réellement pour l’utilisateur.
              </p>
            </div>

            <div className="approach-card">
              <div>
                <span>Expérience</span>
                <strong>Production & direction de studio</strong>
              </div>
              <div>
                <span>Aujourd’hui</span>
                <strong>Rails, mobile et produits numériques</strong>
              </div>
              <div>
                <span>Approche</span>
                <strong>Pragmatisme, autonomie et sens du détail</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-heading compact">
            <p className="eyebrow">Compétences</p>
            <h2>Une stack concentrée sur la livraison de produits complets.</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span>Backend</span>
              <strong>Ruby on Rails</strong>
              <p>Modélisation, API REST, authentification, services métier, tests Minitest.</p>
            </div>
            <div className="skill-card">
              <span>Mobile</span>
              <strong>React Native & Expo</strong>
              <p>Navigation, état, consommation d’API, persistance locale et build Android.</p>
            </div>
            <div className="skill-card">
              <span>Frontend</span>
              <strong>TypeScript & Hotwire</strong>
              <p>Interfaces responsive, Turbo Streams, composants et qualité TypeScript.</p>
            </div>
            <div className="skill-card">
              <span>Production</span>
              <strong>PostgreSQL, Git & CI</strong>
              <p>Déploiement Heroku, GitHub Actions, sécurité et documentation recruteur.</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>Parlons d’un poste, d’un produit ou d’un problème à résoudre.</h2>
          <a className="contact-email" href={`mailto:${email}`}>
            <MailIcon />
            {email}
            <ArrowIcon />
          </a>
        </section>
      </main>

      <footer>
        <span>Jean-Christophe Parfait · Paris</span>
        <div>
          <a href="https://github.com/jcparfait" target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${email}`}>Email</a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
