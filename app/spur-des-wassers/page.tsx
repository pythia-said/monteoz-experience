import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Die Spur des Wassers · Monte OZ",
  description:
    "Der öffentliche Erlebnisprototyp von Monte OZ: Etappe A, aktueller Stand und nächster Erprobungsschritt.",
};

const currentProof = [
  "Ein einfacher Unterstand als ruhiger Ankunftsort",
  "Ein begrenzter, frei anklickbarer Hang ohne Aufgabenmarkierung",
  "Ein Rinnsal, das durch Klang, feuchten Boden, Mineralränder und Glanz auffindbar wird",
  "Eine Annäherung, die Lautstärke, Stereorichtung und Lesbarkeit verändert",
];

const notYetBuilt = [
  "Eine kleine, selbst gewählte Veränderung am Wasserlauf",
  "Bewusstes Abwarten als ebenso lesbare Entscheidung",
  "Eine zeitversetzte ökologische Antwort des Ortes",
];

export default function SpurDesWassersPage() {
  return (
    <main className="detail-page water-detail">
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
          Erster Erlebnisprototyp · Etappe A
        </p>
        <h1>Kann ein Ort Neugier wecken, bevor er eine Aufgabe stellt?</h1>
        <p>
          Diese kurze Szene geht genau dieser Frage nach. Der lokal gebaute
          2.5D-Prototyp ist bewusst wegwerfbar – kein Produktfundament und kein
          Versprechen einer bereits fertigen Spielwelt.
        </p>
      </section>

      <section className="detail-media page-shell">
        <div className="prototype-window">
          <div className="window-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>Die Spur des Wassers · Etappe A</p>
            <em>15 Sekunden · Ton einschalten</em>
          </div>
          <video
            controls
            playsInline
            preload="metadata"
            poster="../images/spur-des-wassers-etappe-a.png"
          >
            <source
              src="../video/spur-des-wassers-etappe-a.mp4"
              type="video/mp4"
            />
            <track
              default
              kind="captions"
              src="../video/spur-des-wassers-etappe-a.vtt"
              srcLang="de"
              label="Deutsch"
            />
            Dein Browser kann dieses Video nicht wiedergeben.
          </video>
        </div>
      </section>

      <section className="prototype-status page-shell">
        <article>
          <p className="status-label status-now">Heute belegt</p>
          <h2>Raum und Wahrnehmung</h2>
          <ul>
            {currentProof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <p className="status-label status-next">Als Nächstes</p>
          <h2>Entscheidung und Antwort</h2>
          <ul>
            {notYetBuilt.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="detail-statement">
        <div className="page-shell">
          <p className="eyebrow">Was hier tatsächlich geschieht</p>
          <blockquote>Du folgst keinem Pfeil. Du folgst einer Veränderung.</blockquote>
          <div className="detail-columns">
            <p>
              Am Anfang hörst du das Wasser nur leise und von der Seite. Mit
              jedem Schritt werden Klang und sichtbare Spuren deutlicher. Der
              umgenutzte Regler wird erst aus der Nähe lesbar.
            </p>
            <p>
              Dieser kleine Ablauf prüft den Kern von Monte OZ: Wahrnehmen,
              eine eigene Richtung wählen und eine verständliche Antwort des
              Ortes erfahren – ohne Belohnungslärm und Zeitdruck.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-cta page-shell">
        <div>
          <p className="eyebrow">Die Haltung dahinter</p>
          <h2>Warum Monte OZ Teilnahme statt Besitz verspricht.</h2>
        </div>
        <a className="button button-primary" href="../vision/">
          Die Vision lesen <span aria-hidden="true">→</span>
        </a>
      </section>
    </main>
  );
}
