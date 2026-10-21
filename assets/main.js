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
    $("eyebrow").textContent = t(p.eyebrow);
    $("headline").textContent = t(p.headline);
    $("lead").textContent = t(p.lead);
    document.title = (t(p.name) ? t(p.name) + " · " : "") + "Portfolio";

    var cta = clear($("cta"));
    if ((S.projects || []).length) cta.appendChild(link("#projects", UI[lang].see_projects, "btn primary"));
    if (p.email) cta.appendChild(link("mailto:" + p.email, UI[lang].email, (S.projects || []).length ? "btn" : "btn primary"));
    if (p.github) cta.appendChild(link(p.github, UI[lang].github));
    if (p.cv) cta.appendChild(link(p.cv, UI[lang].cv));

    var hl = clear($("highlights"));
    (S.highlights || []).forEach(function (h) {
      hl.appendChild(el("div", { class: "hl" }, [el("div", { class: "num", text: h.num }), el("div", { class: "lbl", text: t(h.label) })]));
    });
    hl.hidden = !(S.highlights || []).length;
  }

  function renderAbout() {
    var a = S.about || {}, box = clear($("about-text")), facts = clear($("facts"));
    (a.paragraphs || []).forEach(function (p) { box.appendChild(el("p", { text: t(p) })); });
    (a.facts || []).forEach(function (f) {
      var v = f.href ? link(f.href, t(f.v), "") : el("span", { text: t(f.v) });
      facts.appendChild(el("li", null, [el("span", { class: "k", text: t(f.k) }), v]));
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
      var card = el("article", { class: "card" + (p.featured ? " featured" : "") });
      card.appendChild(el("div", { class: "card-top" }, [el("span", { class: "kind", text: t(p.kind) }), el("span", { class: "period", text: p.period || "" })]));
      card.appendChild(el("h3", { text: t(p.title) }));
      if (p.summary) card.appendChild(el("p", { class: "summary", text: t(p.summary) }));

      var dl = el("dl");
      [["problem", p.problem], ["role", p.role]].forEach(function (row) {
        if (!row[1]) return;
        var dd = el("dd");
        if (Array.isArray(row[1])) { var ul = el("ul"); row[1].forEach(function (x) { ul.appendChild(el("li", { text: t(x) })); }); dd.appendChild(ul); }
        else dd.textContent = t(row[1]);
        dl.appendChild(el("dt", { text: UI[lang][row[0]] })); dl.appendChild(dd);
      });
      if (dl.childNodes.length) card.appendChild(dl);

      if ((p.metrics || []).length) {
        var m = el("div", { class: "metrics", "aria-label": UI[lang].result });
        p.metrics.forEach(function (x) { m.appendChild(el("div", { class: "metric" }, [el("b", { text: x.value }), el("span", { text: t(x.label) })])); });
        card.appendChild(m);
      }
      if ((p.links || []).length) {
        var lk = el("div", { class: "links" });
        p.links.forEach(function (x) { lk.appendChild(link(x.href, t(x.label) + " ↗", "")); });
        card.appendChild(lk);
      }
      if ((p.tags || []).length) {
        var tg = el("div", { class: "tags" });
        p.tags.forEach(function (x) { tg.appendChild(el("span", { class: "tag", text: x })); });
        card.appendChild(tg);
      }
      box.appendChild(card);
    });
  }

  function renderSkills() {
    var list = S.skills || [], box = clear($("skill-list"));
    list.forEach(function (s) {
      var tg = el("div", { class: "tags" });
      (s.items || []).forEach(function (x) { tg.appendChild(el("span", { class: "tag", text: x })); });
      box.appendChild(el("div", { class: "skill" }, [el("h3", { text: t(s.group) }), tg]));
    });
    show("skills", list.length);
  }

  function renderTimeline() {
    var list = S.timeline || [], box = clear($("timeline-list"));
    list.forEach(function (x) {
      box.appendChild(el("li", null, [
        el("div", { class: "when", text: x.when || "" }),
        el("div", { class: "what", text: t(x.what) }),
        x.desc ? el("div", { class: "desc", text: t(x.desc) }) : null
      ]));
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
