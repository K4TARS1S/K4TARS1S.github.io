/* ══════════════════════════════════════════
   STLKPRO — SIDEBAR CENTRALE
   Modifie uniquement ce fichier pour mettre
   à jour la sidebar sur TOUTES les pages.
   ══════════════════════════════════════════ */

const STLKPRO = {

  // ── PERSONNES ──────────────────────────
  // { nom, fichier }
  personnes: [
    { nom: "Valentin", fichier: "valentin.html" },
    { nom: "Ptolémée", fichier: "ptolemee.html" },
    // Ajoute une personne ici :
    // { nom: "Prénom", fichier: "prenom.html" },
  ],

  // ── ARTICLES ───────────────────────────
  // { titre, fichier }
  articles: [
    { titre: "Ptolémée et Miku ?!", fichier: "03_05_26.html" },
    { titre: "Il aime les furrys", fichier: "02_05_26.html" },
    // Ajoute un article ici :
    // { titre: "Titre de l'article", fichier: "mon-article.html" },
  ],

};

// ── INJECTION AUTOMATIQUE ──────────────────
(function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const sidebarHTML = `
    <a href="index.html" class="sidebar-logo">STLKPRO</a>

    <div class="sidebar-section">
      <div class="sidebar-section-title">✦ Personnes</div>
      ${STLKPRO.personnes.map(p => `
        <a href="${p.fichier}" class="sidebar-link${currentPage === p.fichier ? ' active' : ''}">
          <span class="link-icon">♥</span> ${p.nom}
        </a>
      `).join('')}
    </div>

    <div class="sidebar-sep"></div>

    <div class="sidebar-section">
      <div class="sidebar-section-title">✦ Articles</div>
      ${STLKPRO.articles.map(a => `
        <a href="${a.fichier}" class="sidebar-link${currentPage === a.fichier ? ' active' : ''}">
          <span class="link-icon">📰</span> ${a.titre}
        </a>
      `).join('')}
    </div>

    <div class="sidebar-deco">♥ STLKPRO ♥</div>
  `;

  const nav = document.querySelector('nav.sidebar');
  if (nav) nav.innerHTML = sidebarHTML;
})();
