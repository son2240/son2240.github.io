(function () {
  "use strict";

  var UI = {
    ko: {
      skip: "본문으로 건너뛰기", nav_about: "소개", nav_projects: "프로젝트", nav_skills: "기술",
      nav_timeline: "이력", nav_contact: "연락",
      projects_sub: "문제 · 내 역할 · 결과 중심으로 정리했습니다.",
      contact_text: "채용 · 연구 · 협업 제안은 이메일로 편하게 연락 주세요.",
      footer: "GitHub Pages 로 호스팅", all: "전체",
      problem: "문제", role: "내 역할", result: "결과", demo: "링크",
      email: "이메일 보내기", github: "GitHub", cv: "이력서 (PDF)", linkedin: "LinkedIn",
      see_projects: "프로젝트 보기", lang_aria: "Switch to English", theme_aria: "다크 모드 전환"
    },
    en: {
      skip: "Skip to content", nav_about: "About", nav_projects: "Projects", nav_skills: "Skills",
      nav_timeline: "Experience", nav_contact: "Contact",
      projects_sub: "Each project is framed by the problem, my role, and the outcome.",
      contact_text: "For hiring, research, or collaboration, feel free to reach out by email.",
      footer: "Hosted on GitHub Pages", all: "All",
      problem: "Problem", role: "My role", result: "Outcome", demo: "Link",
      email: "Send email", github: "GitHub", cv: "Resume (PDF)", linkedin: "LinkedIn",
      see_projects: "See projects", lang_aria: "한국어로 보기", theme_aria: "Toggle dark mode"
    }
  };

  var S = window.SITE || {};
  if (/[?&]demo\b/.test(location.search) && window.SITE_DEMO) {
    for (var key in window.SITE_DEMO) S[key] = window.SITE_DEMO[key];
  }
  var lang = document.documentElement.lang === "en" ? "en" : "ko";
  var filter = "all";

  function t(v) { if (v == null) return ""; if (typeof v === "string") return v; return v[lang] || v.ko || ""; }
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) for (var a in attrs) {
      if (a === "text") n.textContent = attrs[a];
      else if (a === "class") n.className = attrs[a];
      else n.setAttribute(a, attrs[a]);
    }
    (kids || []).forEach(function (k) { if (k) n.appendChild(typeof k === "string" ? document.createTextNode(k) : k); });
    return n;
  }
  // Rich text: content strings may carry a few inline tags (bold, italic, styled spans)
  // written by the site editor. Only this allow-list survives; everything else becomes text.
  var RICH_TAGS = { B: 1, STRONG: 1, I: 1, EM: 1, U: 1, BR: 1, SPAN: 1, SMALL: 1, MARK: 1, A: 1 };
  var RICH_CSS = /^(font-size|font-family|font-weight|font-style|color|background-color|text-decoration|letter-spacing)$/;
  function safe(html) {
    var tpl = document.createElement("template");
    tpl.innerHTML = html;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (c) {
        if (c.nodeType === 3) return;
        if (c.nodeType !== 1 || !RICH_TAGS[c.tagName]) { node.replaceChild(document.createTextNode(c.textContent), c); return; }
        Array.prototype.slice.call(c.attributes).forEach(function (a) {
          if (a.name === "style") {
            var keep = a.value.split(";").filter(function (d) {
              var k = d.split(":")[0].trim().toLowerCase();
              return RICH_CSS.test(k) && !/url\(|expression/i.test(d);
            }).join(";");
            if (keep) c.setAttribute("style", keep); else c.removeAttribute("style");
          } else if (!(c.tagName === "A" && a.name === "href" && /^(https?:|mailto:)/i.test(a.value))) {
            c.removeAttribute(a.name);
          }
        });
        walk(c);
      });
    })(tpl.content);
    return tpl.content;
  }
  // bind(): put a content value into a node and mark where it came from (data-se-path),
  // so the visual editor can write in-place edits back to content.js.
  function bind(n, v, path) {
    var s = t(v);
    if (/<[a-z]/i.test(s)) { clear(n); n.appendChild(safe(s)); } else n.textContent = s;
    if (path) n.setAttribute("data-se-path", path);
    return n;
  }
  function item(n, list, i) { n.setAttribute("data-se-list", list); n.setAttribute("data-se-index", String(i)); return n; }
  function $(id) { return document.getElementById(id); }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); return n; }
  function show(id, on) { $(id).hidden = !on; var a = document.querySelector('.nav a[href="#' + id + '"]'); if (a) a.hidden = !on; }
  function link(href, label, cls) {
    var ext = /^https?:/.test(href);
    var n = el("a", { href: href, class: cls == null ? "btn" : cls, text: label });
    if (ext) { n.target = "_blank"; n.rel = "noopener"; }
    return n;
  }

  function renderHero() {
    var p = S.profile || {};
    $("brand").textContent = t(p.name) || "son2240";
    $("foot-name").textContent = t(p.name);
    var av = $("avatar");
    if (p.photo && p.photo.src) { av.src = p.photo.src; av.alt = t(p.photo.alt) || t(p.name); av.hidden = false; }
    else av.hidden = true;
    bind($("eyebrow"), p.eyebrow, "profile.eyebrow");
    bind($("headline"), p.headline, "profile.headline");
    bind($("lead"), p.lead, "profile.lead");
    document.title = (t(p.name) ? t(p.name) + " · " : "") + "Portfolio";

    var cta = clear($("cta"));
    if ((S.projects || []).length) cta.appendChild(link("#projects", UI[lang].see_projects, "btn primary"));
    if (p.email) cta.appendChild(link("mailto:" + p.email, UI[lang].email, (S.projects || []).length ? "btn" : "btn primary"));
    if (p.github) cta.appendChild(link(p.github, UI[lang].github));
    if (p.cv) cta.appendChild(link(p.cv, UI[lang].cv));

    var hl = clear($("highlights"));
    (S.highlights || []).forEach(function (h, i) {
      hl.appendChild(item(el("div", { class: "hl" }, [bind(el("div", { class: "num" }), h.num, "highlights." + i + ".num"),
        bind(el("div", { class: "lbl" }), h.label, "highlights." + i + ".label")]), "highlights", i));
    });
    hl.hidden = !(S.highlights || []).length;
  }

  function renderAbout() {
    var a = S.about || {}, box = clear($("about-text")), facts = clear($("facts"));
    (a.paragraphs || []).forEach(function (p, i) { box.appendChild(item(bind(el("p"), p, "about.paragraphs." + i), "about.paragraphs", i)); });
    (a.facts || []).forEach(function (f, i) {
      var v = f.href ? link(f.href, t(f.v), "") : bind(el("span"), f.v, "about.facts." + i + ".v");
      facts.appendChild(item(el("li", null, [bind(el("span", { class: "k" }), f.k, "about.facts." + i + ".k"), v]), "about.facts", i));
    });
    show("about", (a.paragraphs || []).length || (a.facts || []).length);
  }

  function renderProjects() {
    var list = S.projects || [];
    show("projects", list.length);
    if (!list.length) return;

    var kinds = [];
    list.forEach(function (p) { var k = t(p.kind); if (k && kinds.indexOf(k) < 0) kinds.push(k); });
    var fbox = clear($("filters"));
    if (kinds.length > 1) {
      [["all", UI[lang].all]].concat(kinds.map(function (k) { return [k, k]; })).forEach(function (pair) {
        var b = el("button", { type: "button", class: "chip", "aria-pressed": String(filter === pair[0]), text: pair[1] });
        b.addEventListener("click", function () { filter = pair[0]; renderProjects(); });
        fbox.appendChild(b);
      });
    }
    fbox.hidden = kinds.length < 2;

    var box = clear($("project-list"));
    list.filter(function (p) { return filter === "all" || t(p.kind) === filter; }).forEach(function (p) {
      var i = list.indexOf(p), P = "projects." + i + ".";
      var card = item(el("article", { class: "card" + (p.featured ? " featured" : "") }), "projects", i);
      if (p.image && p.image.src) {
        card.appendChild(el("img", { class: "card-img", src: p.image.src, alt: t(p.image.alt), loading: "lazy" }));
      }
      card.appendChild(el("div", { class: "card-top" }, [bind(el("span", { class: "kind" }), p.kind, P + "kind"),
        bind(el("span", { class: "period" }), p.period || "", P + "period")]));
      card.appendChild(bind(el("h3"), p.title, P + "title"));
      if (p.summary) card.appendChild(bind(el("p", { class: "summary" }), p.summary, P + "summary"));

      var dl = el("dl");
      [["problem", p.problem], ["role", p.role]].forEach(function (row) {
        if (!row[1]) return;
        var dd = el("dd");
        if (Array.isArray(row[1])) {
          var ul = el("ul");
          row[1].forEach(function (x, j) { ul.appendChild(item(bind(el("li"), x, P + row[0] + "." + j), P + row[0], j)); });
          dd.appendChild(ul);
        } else bind(dd, row[1], P + row[0]);
        dl.appendChild(el("dt", { text: UI[lang][row[0]] })); dl.appendChild(dd);
      });
      if (dl.childNodes.length) card.appendChild(dl);

      if ((p.metrics || []).length) {
        var m = el("div", { class: "metrics", "aria-label": UI[lang].result });
        p.metrics.forEach(function (x, j) {
          m.appendChild(item(el("div", { class: "metric" }, [bind(el("b"), x.value, P + "metrics." + j + ".value"),
            bind(el("span"), x.label, P + "metrics." + j + ".label")]), P + "metrics", j));
        });
        card.appendChild(m);
      }
      if ((p.links || []).length) {
        var lk = el("div", { class: "links" });
        p.links.forEach(function (x) { lk.appendChild(link(x.href, t(x.label) + " ↗", "")); });
        card.appendChild(lk);
      }
      if ((p.tags || []).length) {
        var tg = el("div", { class: "tags" });
        p.tags.forEach(function (x, j) { tg.appendChild(item(bind(el("span", { class: "tag" }), x, P + "tags." + j), P + "tags", j)); });
        card.appendChild(tg);
      }
      box.appendChild(card);
    });
  }

  function renderSkills() {
    var list = S.skills || [], box = clear($("skill-list"));
    list.forEach(function (s, i) {
      var tg = el("div", { class: "tags" });
      (s.items || []).forEach(function (x, j) { tg.appendChild(item(bind(el("span", { class: "tag" }), x, "skills." + i + ".items." + j), "skills." + i + ".items", j)); });
      box.appendChild(item(el("div", { class: "skill" }, [bind(el("h3"), s.group, "skills." + i + ".group"), tg]), "skills", i));
    });
    show("skills", list.length);
  }

  function renderTimeline() {
    var list = S.timeline || [], box = clear($("timeline-list"));
    list.forEach(function (x, i) {
      box.appendChild(item(el("li", null, [
        bind(el("div", { class: "when" }), x.when || "", "timeline." + i + ".when"),
        bind(el("div", { class: "what" }), x.what, "timeline." + i + ".what"),
        x.desc ? bind(el("div", { class: "desc" }), x.desc, "timeline." + i + ".desc") : null
      ]), "timeline", i));
    });
    show("timeline", list.length);
  }

  function renderContact() {
    var p = S.profile || {}, box = clear($("contact-cta"));
    if (p.email) box.appendChild(link("mailto:" + p.email, p.email, "btn primary"));
    if (p.github) box.appendChild(link(p.github, UI[lang].github));
    if (p.linkedin) box.appendChild(link(p.linkedin, UI[lang].linkedin));
    if (p.cv) box.appendChild(link(p.cv, UI[lang].cv));
  }

  function renderUI() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = UI[lang][n.dataset.i18n]; });
    var lb = $("lang-btn"); lb.textContent = lang === "ko" ? "EN" : "KO"; lb.setAttribute("aria-label", UI[lang].lang_aria);
    $("theme-btn").setAttribute("aria-label", UI[lang].theme_aria);
  }

  function renderAll() { renderUI(); renderHero(); renderAbout(); renderProjects(); renderSkills(); renderTimeline(); renderContact(); }

  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  $("lang-btn").addEventListener("click", function () { lang = lang === "ko" ? "en" : "ko"; filter = "all"; save("lang", lang); renderAll(); });
  $("theme-btn").addEventListener("click", function () {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark"; save("theme", root.dataset.theme);
  });
  $("year").textContent = new Date().getFullYear();
  renderAll();
})();
