import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision · Monte OZ — The Rebirth",
  description:
    "Die öffentliche Vision von Monte OZ: Fürsorge, Aufmerksamkeit und Beziehung statt Kontrolle.",
};

const principles = [
  {
    number: "01",
    title: "Fürsorge statt Eroberung",
    text: "Du betrittst keinen leeren Besitz. Der Hügel hat eine Geschichte, eigene Rhythmen und Bedürfnisse, die auch ohne dich bestehen.",
  },
  {
    number: "02",
    title: "Aufmerksamkeit statt Effizienz",
    text: "Bedeutung entsteht nicht aus maximalem Ertrag. Sie entsteht, wenn du Veränderungen bemerkst und ihre Folgen lesen lernst.",
  },
  {
    number: "03",
    title: "Beziehung statt Kontrolle",
    text: "Der Ort reagiert nachvollziehbar, aber nicht vollständig berechenbar. Vertrautheit wächst, ohne die Welt zu unterwerfen.",
  },
];

export default function VisionPage() {
  return (
    <main className="detail-page">
      <header className="detail-nav page-shell">
        <a className="brand" href="../" aria-label="Zurück zu Monte OZ">
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
        <a className="detail-back" href="../">
          Zurück zum Erlebnis <span aria-hidden="true">←</span>
        </a>
      </header>

      <section className="detail-hero page-shell">
        <p className="eyebrow">
          <span />
          Öffentliche Vision
        </p>
        <h1>Der Hügel ist kein Problem, das auf seine Lösung wartet.</h1>
        <p>
          Monte OZ ist ein ruhiges Welterlebnis über die Fähigkeit, nach einer
          Krise wieder verantwortlich zu handeln – nah genug, um Folgen zu
          sehen, und offen genug, um nicht alles kontrollieren zu müssen.
        </p>
      </section>

      <section className="detail-section page-shell">
        <div className="detail-grid">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h2>{principle.title}</h2>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-statement">
        <div className="page-shell">
          <p className="eyebrow">Was daraus spielerisch folgt</p>
          <blockquote>
            Deine Aufmerksamkeit hat hier mehr Wert als deine Geschwindigkeit.
          </blockquote>
          <div className="detail-columns">
            <p>
              Du liest Wasser, Wetter, Pflanzen, Tiere, Werkzeuge, Menschen und
              Erinnerungen als zusammenhängende Welt. Kleine Handlungen dürfen
              sichtbar nachwirken.
            </p>
            <p>
              Monte OZ verspricht weder eine makellose Utopie noch eine
              Machtfantasie. Reparierte Dinge behalten ihre Narben. Hoffnung
              zeigt sich darin, verantwortlich weiterzumachen.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-cta page-shell">
        <div>
          <p className="eyebrow">Vom Satz zum Erlebnis</p>
          <h2>Der Wasserfaden prüft diese Haltung an einem einzigen Ort.</h2>
        </div>
        <a className="button button-primary" href="../wasserfaden/">
          Den Wasserfaden ansehen <span aria-hidden="true">→</span>
        </a>
      </section>
    </main>
  );
}
