(function () {
  const paginas = [
    { href: "index.html", label: "Início" },
    { href: "EnsaiosMecanicos.html", label: "Ensaios Mecânicos" },
    { href: "NR12.html", label: "NR-12" },
  ];

  const atual =
    decodeURIComponent(location.pathname.split("/").pop()) || "index.html";
  const style = document.createElement("style");
  style.textContent = `
    .site-nav {
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      gap: 4px;
      padding: env(safe-area-inset-top, 0px) 24px 0;
      background: var(--card);
      border-bottom: 1px solid var(--line);
      box-shadow: 0 2px 8px var(--shadow);
      overflow-x: auto;
    }
    .site-nav a {
      color: var(--ink-soft);
      text-decoration: none;
      font-size: 14px;
      padding: 14px 16px;
      white-space: nowrap;
      border-bottom: 3px solid transparent;
      transition: color .12s ease, background .12s ease;
    }
    .site-nav a:hover {
      color: var(--ink);
      background: var(--paper-2);
    }
    .site-nav a.ativo {
      color: var(--ink);
      font-weight: 600;
      border-bottom-color: var(--amber-2);
    }
    .site-nav a:focus-visible {
      outline: 2px solid var(--navy-2);
      outline-offset: -2px;
    }
  `;
  document.head.appendChild(style);

  const nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.setAttribute("aria-label", "Navegação principal");
  paginas.forEach((p) => {
    const a = document.createElement("a");
    a.href = p.href;
    a.textContent = p.label;
    if (p.href === atual) {
      a.className = "ativo";
      a.setAttribute("aria-current", "page");
    }
    nav.appendChild(a);
  });

  // insere o menu exatamente onde o <script> está (antes do header)
  document.currentScript.insertAdjacentElement("afterend", nav);
})();
