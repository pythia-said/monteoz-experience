# Monte OZ — The Rebirth Showcase

Der öffentliche Showcase für **Monte OZ — The Rebirth**: ein ruhiges
Welterlebnis über Fürsorge, Neugier und den gemeinsamen Neuanfang nach einer
globalen Krise.

**Live:** [pythia-said.github.io/monteoz-expierence](https://pythia-said.github.io/monteoz-expierence/)

Die Website übersetzt die Gründungsdokumente und den ersten
Wasserfaden-Prototyp in eine eigenständige, responsive Präsentation. Sie zeigt
bewusst den aktuellen Entwicklungsstand und behauptet keine bereits fertige
Spielwelt.

## Lokal starten

Voraussetzung ist Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Die lokale Vorschau läuft anschließend unter `http://localhost:3000`.

## Prüfen

```bash
npm test
```

Der Test erstellt den Produktions-Build und prüft die zentralen Inhalte sowie
die Metadaten der vollständig statisch exportierten Website.

## Veröffentlichung

Jeder geprüfte Stand auf `main` wird automatisch über GitHub Actions als
GitHub-Pages-Website veröffentlicht. Der Workflow baut die statischen Dateien,
prüft sie und übergibt ausschließlich das Exportverzeichnis an GitHub Pages.

## Verbundene Repositories

- [Monte OZ — The Rebirth](https://github.com/pythia-said/MonteOZ_the_rebirth):
  Vision, Welt, Lore, Designprinzipien und Erlebnisprototypen
- [MonteOZ Experience](https://github.com/pythia-said/monteoz-expierence):
  Quellcode dieses Showcases

## Bildquellen

- Die Aufnahme des Wasserfaden-Prototyps stammt aus dem öffentlichen
  MonteOZ-Repository.
- Die Social-Preview wurde eigens für diesen Showcase mit OpenAI ImageGen
  erstellt.
