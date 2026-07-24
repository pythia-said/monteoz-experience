import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://monteoz.example/", {
      headers: {
        accept: "text/html",
        host: "monteoz.example",
        "x-forwarded-host": "monteoz.example",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the Monte OZ showcase", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="de"/i);
  assert.match(html, /<title>Monte OZ — The Rebirth<\/title>/i);
  assert.match(html, /Ein kleiner Hügel\./);
  assert.match(html, /Wahrnehmen/);
  assert.match(html, /Wasserfaden/);
  assert.match(html, /Stay Curious\./i);
  assert.match(html, /https:\/\/monteoz\.example\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});
