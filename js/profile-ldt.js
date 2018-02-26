"use strict";
// In case everything else fails, we want the error
window.addEventListener("error", ev => {
  console.error(ev.error, ev.message, ev);
});

// this is only set in a build, not at all in the dev environment
require.config({
  shim: {
    shortcut: {
      exports: "shortcut",
    },
    highlight: {
      exports: "hljs",
    },
  },
  paths: {
    "handlebars.runtime": "deps/handlebars",
    "deps/highlight": "https://www.w3.org/Tools/respec/respec-highlight",
  },
  deps: ["deps/hyperhtml", "deps/url-search-params"],
});

define(
  [
    // order is significant
    "deps/domReady",
    "core/base-runner",
    "core/ui",
    "core/l10n",
//    "w3c/defaults",
    "core/aria",
    "core/style",
    "w3c/style", // Need to change this to LDT specific
    "w3c/l10n",  // Need to change this to LDT specific
    "core/github",
    "core/data-include",
    "core/markdown",
    "ldt/headers",
    "w3c/abstract",
    "w3c/conformance",
    "core/data-transform",
    "core/inlines",
    "core/dfn",
//    "w3c/rfc2119",
    "core/examples",
    "core/issues-notes",
    "core/requirements",
    "core/best-practices",
    "core/figures",
//    "core/webidl",
    "core/data-cite",
    "core/biblio",
//    "core/webidl-index",
    "core/link-to-dfn",
    "core/contrib",
    "core/fix-headers",
    "core/structure",
    "w3c/informative", // Need to change this to LDT specific
    "w3c/permalinks",
    "core/id-headers",
    "core/location-hash",
    "ui/save-html",
    "ui/search-specref",
    "ui/dfn-list",
    "ui/about-respec",
    "core/seo",
    "w3c/seo", // Need to change this to LDT specific
    "core/highlight",
//    "core/webidl-clipboard",
//    "core/data-tests",
    "core/list-sorter",
    "w3c/jsonld",
    /*Linter must be the last thing to run*/
    "core/linter",
  ],
  (domReady, runner, { ui }, ...plugins) => {
    ui.show();
    domReady(async () => {
      try {
        await runner.runAll(plugins);
        await document.respecIsReady;
      } catch (err) {
        console.error(err);
      } finally {
        ui.enable();
      }
    });
  }
);