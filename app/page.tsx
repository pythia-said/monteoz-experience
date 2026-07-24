const movements = [
  {
    number: "01",
    title: "Wahrnehmen",
    text: "Spuren, Rhythmen und Bedürfnisse begegnen dir, bevor daraus eine Aufgabe wird.",
  },
  {
    number: "02",
    title: "Verstehen",
    text: "Beobachtungen verbinden sich mit Wissen, Erinnerung und anderen Perspektiven.",
  },
  {
    number: "03",
    title: "Sorge tragen",
    text: "Du pflegst, reparierst, schützt – oder entscheidest dich bewusst, erst einmal nichts zu verändern.",
  },
];

const worldChapters = [
  {
    index: "I",
    title: "Das Zeitalter der Entfernung",
    text: "Die Menschheit besaß große Fähigkeiten. Doch die Folgen vieler Entscheidungen wurden unsichtbar.",
  },
  {
    index: "II",
    title: "Viele Brüche",
    text: "Ökologie, Versorgung und Vertrauen gerieten aus dem Gleichgewicht. Die Krise hatte keinen einzelnen Anfang.",
  },
  {
    index: "III",
    title: "Die Zeit der nahen Dinge",
    text: "Wasser, Nahrung, Wissen und Verantwortung bekamen wieder einen konkreten Ort und ein menschliches Gegenüber.",
  },
  {
    index: "IV",
    title: "The Rebirth",
    text: "Aus Bewahren wird wieder Gestalten. Nicht zurück zum Früher – sondern gemeinsam in eine verantwortlichere Zukunft.",
  },
];

const promises = [
  {
    label: "Kein Zeitdruck",
    title: "Offene Fäden, keine Schulden.",
    text: "Du darfst eine Sitzung beenden, wenn dein Tag etwas anderes von dir braucht. Der Hügel bestraft keine Abwesenheit.",
  },
  {
    label: "Keine Machtfantasie",
    title: "Teilnahme statt Besitz.",
    text: "Die Welt wartet nicht auf einen Auserwählten. Bedeutung entsteht aus Aufmerksamkeit, Beziehung und nachvollziehbarem Handeln.",
  },
  {
    label: "Keine glatte Utopie",
    title: "Hoffnung mit sichtbaren Narben.",
    text: "Reparierte Dinge bleiben gezeichnet. Fortschritt bedeutet nicht Perfektion, sondern die Fähigkeit, verantwortlich weiterzumachen.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>

      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#start" aria-label="Monte OZ – Startseite">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-sun" />
              <span className="brand-hill brand-hill-back" />
              <span className="brand-hill brand-hill-front" />
            </span>
            <span>
              MONTE OZ
              <small>THE REBIRTH</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Hauptnavigation">
            <a href="#idee">Idee</a>
            <a href="#erlebnis">Erlebnis</a>
            <a href="#welt">Welt</a>
            <a href="#prototyp">Prototyp</a>
          </nav>

          <a
            className="nav-github"
            href="https://github.com/pythia-said/MonteOZ_the_rebirth"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label="Menü öffnen">
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile Navigation">
              <a href="#idee">Idee</a>
              <a href="#erlebnis">Erlebnis</a>
              <a href="#welt">Welt</a>
              <a href="#prototyp">Prototyp</a>
              <a
                href="https://github.com/pythia-said/MonteOZ_the_rebirth"
                target="_blank"
                rel="noreferrer"
              >
                Öffentliches Repository ↗
              </a>
            </nav>
          </details>
        </div>
      </header>

      <main id="inhalt">
        <section className="hero" id="start">
          <div className="hero-sky" aria-hidden="true">
            <span className="hero-sun" />
            <span className="cloud cloud-one" />
            <span className="cloud cloud-two" />
            <span className="ridge ridge-far" />
            <span className="ridge ridge-near" />
          </div>

          <div className="page-shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">
                <span />
                Eine Welt im Werden
              </p>
              <h1>
                Ein kleiner Hügel.
                <br />
                Eine lebendige Welt.
                <br />
                <em>Ein Neuanfang.</em>
              </h1>
              <p className="hero-intro">
                Monte OZ ist ein ruhiges Welterlebnis über Fürsorge, Neugier und
                die Frage, wie wir nach einer Krise wieder Zukunft gestalten.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#idee">
                  Monte OZ entdecken
                  <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="button button-quiet"
                  href="https://github.com/pythia-said/MonteOZ_the_rebirth"
                  target="_blank"
                  rel="noreferrer"
                >
                  Entwicklung verfolgen
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="hero-meta" aria-label="Projektstatus">
                <span>In früher Entwicklung</span>
                <span>Erlebnis vor Technik</span>
                <span>Öffentlich dokumentiert</span>
              </div>
            </div>

            <div className="hero-diorama" aria-label="Ein Blick auf den Hügel von Monte OZ">
              <div className="diorama-frame">
                <div className="diorama-sky">
                  <span className="diorama-sun" />
                  <span className="bird bird-one">⌁</span>
                  <span className="bird bird-two">⌁</span>
                </div>
                <span className="diorama-mountain mountain-one" />
                <span className="diorama-mountain mountain-two" />
                <span className="diorama-ground ground-back" />
                <span className="diorama-ground ground-front" />
                <span className="diorama-path" />
                <div className="shelter" aria-hidden="true">
                  <span className="shelter-roof" />
                  <span className="shelter-wall" />
                  <span className="shelter-door" />
                </div>
                <div className="olive-tree" aria-hidden="true">
                  <span className="trunk" />
                  <span className="crown crown-one" />
                  <span className="crown crown-two" />
                  <span className="crown crown-three" />
                </div>
                <span className="water-thread" aria-hidden="true" />
                <span className="stone stone-one" aria-hidden="true" />
                <span className="stone stone-two" aria-hidden="true" />
                <p className="diorama-note">
                  <span>ERSTER ORT</span>
                  Der Wasserfaden
                </p>
              </div>
              <p className="diorama-caption">
                Mediterranes Morgenlicht. Ein reparierter Wetterschutz. Ein
                leises Tropfen, das eine Frage stellt.
              </p>
            </div>
          </div>

          <div className="hero-manifesto page-shell">
            <p>STAY CURIOUS.</p>
            <span aria-hidden="true" />
            <p>STAY HUMAN.</p>
          </div>
        </section>

        <section className="section section-idea" id="idee">
          <div className="page-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Die Idee</p>
                <h2>Du beherrschst den Hügel nicht.</h2>
              </div>
              <div>
                <p className="section-lead">
                  Du lernst, mit ihm zu leben. Aus Fremdheit wird Vertrautheit,
                  aus Aufmerksamkeit Verständnis und aus kleinen Handlungen
                  echte Beziehung.
                </p>
                <p className="section-copy">
                  Pflanzen, Tiere, Wasser, Wetter, Werkzeuge, Menschen und
                  Erinnerungen bilden Zusammenhänge. Die Welt reagiert spürbar,
                  ohne sich vollständig kontrollieren zu lassen.
                </p>
              </div>
            </div>

            <div className="movement-grid">
              {movements.map((movement) => (
                <article className="movement-card" key={movement.number}>
                  <span className="movement-number">{movement.number}</span>
                  <span className="movement-symbol" aria-hidden="true" />
                  <h3>{movement.title}</h3>
                  <p>{movement.text}</p>
                </article>
              ))}
            </div>

            <blockquote className="wide-quote">
              <span aria-hidden="true">“</span>
              Deine Aufmerksamkeit hat hier mehr Wert als deine Geschwindigkeit.
            </blockquote>
          </div>
        </section>

        <section className="section section-experience" id="erlebnis">
          <div className="page-shell experience-layout">
            <div className="experience-sticky">
              <p className="eyebrow">Die Spielerfahrung</p>
              <h2>Ein Ort, an dem du nichts beweisen musst.</h2>
              <p>
                Monte OZ lädt dich ein, anzukommen, einen eigenen Faden
                aufzunehmen und wieder zu gehen, wenn es für heute genug ist.
              </p>
              <div className="session-arc" aria-label="Natürlicher Sitzungsbogen">
                <span>Ankommen</span>
                <i aria-hidden="true" />
                <span>Bemerken</span>
                <i aria-hidden="true" />
                <span>Wählen</span>
                <i aria-hidden="true" />
                <span>Antwort erfahren</span>
                <i aria-hidden="true" />
                <span>Innehalten</span>
              </div>
            </div>

            <div className="experience-cards">
              {promises.map((promise, index) => (
                <article className="promise-card" key={promise.label}>
                  <div>
                    <span>0{index + 1}</span>
                    <p>{promise.label}</p>
                  </div>
                  <h3>{promise.title}</h3>
                  <p>{promise.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-world" id="welt">
          <div className="world-glow" aria-hidden="true" />
          <div className="page-shell">
            <div className="section-heading world-heading">
              <p className="eyebrow">Die Welt</p>
              <h2>Wiedergeburt bedeutet nicht Rückkehr.</h2>
              <p className="section-lead">
                Die alte Welt ist nicht einfach verschwunden. Ihre Fähigkeiten,
                Fehler und Erinnerungen liegen unter jedem neuen Anfang.
              </p>
            </div>

            <div className="world-timeline">
              {worldChapters.map((chapter) => (
                <article className="world-chapter" key={chapter.index}>
                  <div className="chapter-marker">
                    <span>{chapter.index}</span>
                  </div>
                  <div>
                    <h3>{chapter.title}</h3>
                    <p>{chapter.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="world-statement">
              <p>
                Aus vielen lokalen Neuanfängen entsteht ein leises Netz.
              </p>
              <span>
                Jeder Hügel bleibt eigenständig. Kein Ort trägt das gesamte
                Wissen. Verbindung erweitert Möglichkeiten, ohne Gleichheit zu
                verlangen.
              </span>
            </div>
          </div>
        </section>

        <section className="section section-prototype" id="prototyp">
          <div className="page-shell">
            <div className="prototype-head">
              <div>
                <p className="eyebrow">Der erste Erlebnisprototyp</p>
                <h2>Folge dem Wasser. Oder warte.</h2>
              </div>
              <p>
                Der Wasserfaden prüft einen einzigen Moment: Kann ein Ort
                Neugier wecken, ohne Questmarker, Zeitdruck oder eine
                vorgegebene richtige Antwort?
              </p>
            </div>

            <figure className="prototype-figure">
              <div className="prototype-window">
                <div className="window-bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <p>Wasserfaden — Etappe A</p>
                  <em>Erlebnisprototyp</em>
                </div>
                <img
                  src="/images/water-thread-etappe-a.png"
                  alt="Der Wasserfaden-Prototyp zeigt einen mediterranen Hang mit Wetterschutz, Olivenbaum, Weg und einem alten Wasserregler."
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span>Etappe A · Raum und Wahrnehmung</span>
                <p>
                  Ein bewusst wegwerfbarer 2.5D-Prototyp. Keine
                  Plattformentscheidung, keine finale Grafik — ein ehrlicher
                  Test der Erfahrung.
                </p>
              </figcaption>
            </figure>

            <div className="prototype-options">
              <p>Was der Wasserfaden später prüfen soll</p>
              <div>
                <span>Zur alten Schale leiten</span>
                <span>Die Kräutermulde versorgen</span>
                <span>Den Verlauf beobachten</span>
              </div>
            </div>

            <a
              className="text-link"
              href="https://github.com/pythia-said/MonteOZ_the_rebirth/tree/prototype/etappe-a-space-and-perception/prototypes/water-thread-spritekit"
              target="_blank"
              rel="noreferrer"
            >
              Prototyp und Dokumentation ansehen
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="section section-origin">
          <div className="page-shell origin-layout">
            <div className="origin-flame" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <p className="eyebrow">Der persönliche Ursprung</p>
              <blockquote>
                „Schon die ursprüngliche Idee von Monte OZ war einer dieser
                Momente, in denen ich das Feuer in mir wiederentdeckt und Holz
                nachgelegt habe.“
              </blockquote>
              <p className="quote-credit">Cloddy · Gründer von Monte OZ</p>
            </div>
          </div>
        </section>

        <section className="closing">
          <div className="closing-landscape" aria-hidden="true">
            <span className="closing-sun" />
            <span className="closing-ridge closing-ridge-one" />
            <span className="closing-ridge closing-ridge-two" />
          </div>
          <div className="page-shell closing-content">
            <p className="eyebrow">The Rebirth beginnt im Kleinen</p>
            <h2>
              Ich muss nicht alles retten,
              <br />
              um für etwas Sorge zu tragen.
            </h2>
            <p>
              Monte OZ befindet sich in früher, öffentlicher Entwicklung. Die
              Vision steht. Die Erfahrung wird jetzt Schritt für Schritt
              erprobt.
            </p>
            <div className="hero-actions closing-actions">
              <a
                className="button button-primary"
                href="https://github.com/pythia-said/MonteOZ_the_rebirth"
                target="_blank"
                rel="noreferrer"
              >
                Entwicklung auf GitHub
                <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-quiet"
                href="https://github.com/pythia-said/MonteOZ_the_rebirth/blob/main/docs/VISION.md"
                target="_blank"
                rel="noreferrer"
              >
                Vision lesen
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-shell footer-layout">
          <div>
            <a className="brand footer-brand" href="#start">
              <span className="brand-mark" aria-hidden="true">
                <span className="brand-sun" />
                <span className="brand-hill brand-hill-back" />
                <span className="brand-hill brand-hill-front" />
              </span>
              <span>
                MONTE OZ
                <small>THE REBIRTH</small>
              </span>
            </a>
            <p>Stay Curious. Stay Human.</p>
          </div>
          <nav aria-label="Fußnavigation">
            <a
              href="https://github.com/pythia-said/MonteOZ_the_rebirth"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
            <a
              href="https://github.com/pythia-said/MonteOZ_the_rebirth/tree/main/docs"
              target="_blank"
              rel="noreferrer"
            >
              Gründungsdokumente
            </a>
            <a
              href="https://github.com/pythia-said/monteoz-expierence"
              target="_blank"
              rel="noreferrer"
            >
              Showcase-Quellcode
            </a>
          </nav>
          <p className="copyright">
            © 2026 Cloddy Web. Monte OZ befindet sich in Entwicklung.
          </p>
        </div>
      </footer>
    </>
  );
}
