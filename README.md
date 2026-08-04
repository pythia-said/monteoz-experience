# Monte OZ — The Rebirth Showcase

Der öffentliche Showcase für **Monte OZ — The Rebirth**: ein ruhiges
Welterlebnis über Fürsorge, Neugier und den gemeinsamen Neuanfang nach einer
globalen Krise.

**Live:** [live-oz.github.io/monteoz-experience](https://live-oz.github.io/monteoz-experience/)

Die Website übersetzt die Gründungsdokumente und den ersten
Prototypen „Die Spur des Wassers“ in eine eigenständige, responsive
Präsentation. Sie zeigt bewusst den aktuellen Entwicklungsstand und behauptet
keine bereits fertige Spielwelt.

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

## Öffentliches Projektjournal

Das öffentliche Repository
[MonteOZ Experience](https://github.com/live-oz/monteoz-experience)
enthält den Showcase, die öffentlich lesbare Vision und den dokumentierten
Stand des Prototyps „Die Spur des Wassers“.

## Bildquellen

- Die Aufnahme und die Klänge des Prototyps stammen aus dem
  tatsächlich laufenden lokalen Erlebnisprototyp.
- Die Social-Preview wurde eigens für diesen Showcase mit OpenAI ImageGen
  erstellt.
