import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports the Monte OZ showcase for GitHub Pages", async () => {
  const html = await readFile(
    new URL("../out/index.html", import.meta.url),
    "utf8",
  );
  const visionHtml = await readFile(
    new URL("../out/vision/index.html", import.meta.url),
    "utf8",
  );
  const sceneHtml = await readFile(
    new URL("../out/spur-des-wassers/index.html", import.meta.url),
    "utf8",
  );
  const exportedHtml = `${html}${visionHtml}${sceneHtml}`;

  assert.match(html, /<html[^>]*lang="de"/i);
  assert.match(html, /<title>Monte OZ — The Rebirth<\/title>/i);
  assert.match(html, /Ein kleiner Hügel\./);
  assert.match(html, /Dem Wasser folgen/);
  assert.match(html, /Folge dem Wasser\. Oder warte\./);
  assert.match(html, /Die Spur des Wassers · Etappe A/);
  assert.match(html, /Die ersten zehn Minuten/);
  assert.match(html, /Irgendwo tropft Wasser\./);
  assert.match(html, /Was wird sichtbar, wenn du wartest\?/);
  assert.match(html, /Wahrnehmen/);
  assert.match(html, /Stay Curious\./i);
  assert.match(
    html,
    /https:\/\/pythia-said\.github\.io\/monteoz-experience\/og\.png/,
  );
  assert.match(
    html,
    /\/monteoz-experience\/_next\/static\//,
  );
  assert.doesNotMatch(html, /MonteOZ_the_rebirth|monteoz-expierence/);
  assert.doesNotMatch(
    exportedHtml,
    /Ein leises Tropfen|Questmarker|Wasserfaden|Wasser zur alten Schale|Kräutermulde/,
  );
  assert.doesNotMatch(
    html,
    /codex-preview|Your site is taking shape|react-loading-skeleton/i,
  );

  await Promise.all([
    access(new URL("../out/.nojekyll", import.meta.url)),
    access(
      new URL(
        "../out/images/spur-des-wassers-etappe-a.png",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../out/video/spur-des-wassers-etappe-a.mp4",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../out/video/spur-des-wassers-etappe-a.vtt",
        import.meta.url,
      ),
    ),
    access(new URL("../out/vision/index.html", import.meta.url)),
    access(new URL("../out/spur-des-wassers/index.html", import.meta.url)),
    access(new URL("../out/og.png", import.meta.url)),
  ]);
});
