/* Shared behaviour. Deliberately tiny and deferred.
   Nothing here is required for the page to be readable, navigable, translated
   or animated — the entrance animation is pure CSS on purpose. */

(function () {
  "use strict";

  var STORE_KEY = "preferred-lang";

  function safeGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }

  function safeSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }

  /* --- Language preference -------------------------------------------- */
  /* Every language has a real crawlable URL (/, /en/, /ar/) and the switcher
     is plain links. We only remember an explicit choice, and only send a
     returning visitor from the Turkish root to their language — never from
     /en/ or /ar/, and never for a crawler, which has nothing stored. */

  var current = document.documentElement.getAttribute("data-lang") || "tr";

  document.querySelectorAll("[data-lang-link]").forEach(function (link) {
    link.addEventListener("click", function () {
      safeSet(STORE_KEY, link.getAttribute("data-lang-link"));
    });
  });

  if (current === "tr") {
    var preferred = safeGet(STORE_KEY);
    var path = window.location.pathname.replace(/\/index\.html$/, "/");

    if ((preferred === "en" || preferred === "ar") && (path === "/" || path === "")) {
      window.location.replace("/" + preferred + "/" + window.location.hash);
      return;
    }
  }

  /* --- Mobile navigation ---------------------------------------------- */

  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  if (toggle && nav) {
    var closeNav = function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        toggle.focus();
      }
    });
  }

  /* --- Header state ---------------------------------------------------- */

  var header = document.querySelector("[data-header]");

  if (header) {
    var sync = function () { header.classList.toggle("is-scrolled", window.scrollY > 6); };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
  }

  /* --- Footer year ------------------------------------------------------ */

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
