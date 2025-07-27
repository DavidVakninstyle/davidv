const content = {
  home: `<h1>ברוך הבא לאתר שלי</h1><p>עיצובים מקצועיים שמבוססים על תוצאה.</p>`,
  portfolio: `<div class="grid">
      <div class="project-box">עבודה 1</div>
      <div class="project-box">עבודה 2</div>
      <div class="project-box">עבודה 3</div>
      <div class="project-box">עבודה 4</div>
    </div>`,
  services: `<h2>השירותים שלי</h2><ul><li>עיצוב לוגואים</li><li>מיתוג לעסקים</li><li>מודעות שיווקיות</li></ul>`,
  contact: `<h2>צור קשר</h2><p>ניתן לפנות אליי דרך וואטסאפ או מייל.</p>`
};

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = link.getAttribute("data-section");
    document.getElementById("content-container").innerHTML = content[section];
  });
});

// נטען את דף הבית כברירת מחדל
document.getElementById("content-container").innerHTML = content.home;

