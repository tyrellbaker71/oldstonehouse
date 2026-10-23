/* The Old Stone House Guesthouse
   ---------------------------------------------------------------
   EDIT HERE: everything the owner may need to change lives in the
   CONFIG block below. Nothing else in this file needs touching.
   --------------------------------------------------------------- */
const CONFIG = {
  businessName: "The Old Stone House Guesthouse",

  /* Contact numbers (local format; converted to 27… for WhatsApp).
     `defaultContact` is used by every enquiry button except the two
     number-specific buttons in the "Book your stay" section. */
  contacts: { primary: "0712607773", secondary: "0714749811" },
  defaultContact: "primary",
  email: "oldstonehouse36@outlook.com",

  /* Booking platform listing URLs. Leave "" until supplied; the button
     switches on automatically once a full https:// URL is added. */
  bookingLinks: {
    bookingCom: "https://www.booking.com/Share-ozJnhyo",
    lekkerSlaap: "https://www.lekkeslaap.co.za/akkommodasie/the-old-stone-house-91",
    airbnb: "https://www.airbnb.co.uk/rooms/1795618180566762064"
  },

  /* Social media URLs. Leave "" until supplied. */
  socialLinks: {
    facebook: "",
    instagram: "",
    tiktok: ""
  },

  /* Private direct-booking overnight rates (rand per night).
     This is the only place prices are stored. */
  accommodation: [
    {
      id: "nguni", name: "Nguni Luxury Lodge", rate: 1600, tone: "moss",
      description: "Our luxurious accommodation option offers a relaxing retreat, featuring an outdoor entertainment area and hot tub, perfect for unwinding after a busy day.",
      features: ["Outdoor entertainment area", "Hot tub", "Wood for the hot tub is available as an additional service (please enquire for the price)"]
    },
    {
      id: "southern", name: "Southern Cottage", rate: 1400, tone: "clay",
      description: "A cosy and charming cottage featuring an outdoor fire pit and fairy lights, ideal for guests looking for a peaceful and inviting stay.",
      features: ["Outdoor fire pit", "Fairy lights"]
    },
    {
      id: "stone", name: "Stone Cottage", rate: 950, tone: "slate",
      description: "A comfortable and affordable accommodation option for guests seeking excellent value and a welcoming environment.",
      features: []
    }
  ],

  /* Hero slider photographs (full-width, landscape works best, ~1800px wide).
     Add as many as you like: { src: "images/hero/front.jpg", alt: "Description" }
     With none, the hero shows a plain dark-green background. With one, no
     controls are shown; with two or more, the slider starts automatically.
     Autoplay is off for visitors who prefer reduced motion. */
  heroSlides: [
    { src: "images/hero/01.JPG", alt: "hero1" },
    { src: "images/hero/02.JPG", alt: "hero2" },
    { src: "images/hero/03.JPG", alt: "hero3" }
  ],
  heroInterval: 6000, /* milliseconds per slide */

  /* Photographs. Put files in /images and enter the path here, e.g.
     "images/accommodation/nguni-lodge.jpg". Empty = labelled placeholder.
     Always give a short, accurate description in `alt`. */
  images: {
    nguni:    { src: "images/accommodation/nguni1.jpg", alt: "Nguni Luxury Lodge" },
    southern: { src: "images/accommodation/southern1.jpg", alt: "Southern Cottage" },
    stone:    { src: "images/accommodation/stonecottage1.jpg", alt: "Stone Cottage" },
    lapa:     { src: "images/facilities/hottub.JPG", alt: "The communal lapa and entertainment area" },
    pool:     { src: "images/facilities/pool.JPG", alt: "The swimming pool" }
  },

  /* Team photographs: portrait photos work best (about 800 x 1000px).
     Put files in images/team/ and enter the path in `src`. Empty = placeholder. */
  staff: [
    { name: "Angelique Enslin and Jannes du Plessis", role: "Your hosts", src: "images/team/host.jpg", alt: "Angelique Enslin and Jannes du Plessis, the hosts" },
    { name: "Sinikiwe Mkhulisi", role: "House keeping", src: "images/team/cleaner.jpg", alt: "Sinikiwe Mkhulisi, cleaning staff" },
    { name: "Moses Lungu", role: "Maintenance and gardener", src: "images/team/gardener.jpg", alt: "Moses Lungu, maintenance and gardener" }
  ],

  /* Guest reviews: stars is a number from 1 to 5. */
  reviews: [
    { stars: 5, name: "Angie",
      title: "Beautiful furnishings, comfy luxurious accommodation, attentive hosts, convenient location",
      text: "Everything! We didn't want to leave. The pictures don't even do it justice. Book it, you won't be disappointed! This was the best B&B we stayed at in our travels of SA." },
    { stars: 5, name: "Khalipha",
      title: "My partner and I are definitely going to come back again to this wonderful place",
      text: "I liked everything about this place. The place is clean. The host was very welcoming and friendly. The hot tub was definitely the star of the show. My partner and I enjoyed the hot tub so much! Pictures are not doing justice for this place, this place is beautiful. I also like that we had privacy." },
    { stars: 5, name: "Eugene", title: "Fantastic", text: "Great host, great venue. What more could one want?" }
  ],

  /* Gallery: add { src: "images/gallery/file.jpg", alt: "Description" }
     to any list. Empty lists show placeholder tiles. */
  gallery: {
    "Nguni Luxury Lodge": [
      { src: "images/accommodation/nguni1.jpg", alt: "nguni 1" },
      { src: "images/accommodation/nguni2.jpg", alt: "nguni 2" },
      { src: "images/accommodation/nguni3.jpg", alt: "nguni 3" },
      { src: "images/accommodation/nguni4.jpg", alt: "nguni 4" },
      { src: "images/accommodation/nguni5.jpg", alt: "nguni 5" },
      { src: "images/accommodation/nguni6.jpg", alt: "nguni 6" },
      { src: "images/accommodation/nguni7.jpg", alt: "nguni 7" },
    ],
    "Southern Cottage": [
      { src: "images/accommodation/southern1.jpg", alt: "southern 1" },
      { src: "images/accommodation/southern2.jpg", alt: "southern 2" },
      { src: "images/accommodation/southern3.jpg", alt: "southern 3" },
      { src: "images/accommodation/southern4.jpg", alt: "southern 4" },
      { src: "images/accommodation/southern5.jpg", alt: "southern 5" },
      { src: "images/accommodation/southern6.jpg", alt: "southern 6" },

    ],
    "Stone Cottage": [
      { src: "images/accommodation/stonecottage1.jpg", alt: "Stone cottage 1" },
        { src: "images/accommodation/stonecottage2.jpg", alt: "Stone cottage 2" },
        { src: "images/accommodation/stonecottage3.jpg", alt: "Stone cottage 3" },
        { src: "images/accommodation/stonecottage4.jpeg", alt: "Stone cottage 4" },
    ],
    "Communal Facilities": [
      { src: "images/facilities/pool.JPG", alt: "pool" },
     ]
  },

  /* WhatsApp message templates. {unit} is replaced by the unit name. */
  messages: {
    general: "Good day, I would like to enquire about a stay at The Old Stone House Guesthouse. Please let me know about availability and rates.",
    unit: "Good day, I would like to enquire about {unit} at The Old Stone House Guesthouse. Please let me know the availability and current rate for my dates.",
    dayUse: "Good day, I would like to enquire about day-use accommodation at The Old Stone House Guesthouse. Please let me know which units are available, the available times and the rates.",
    corporate: "Good day, I would like to enquire about corporate accommodation at The Old Stone House Guesthouse. Please let me know the available options and how I can request a quotation for our accommodation requirements.",
    emailSubject: "Enquiry: The Old Stone House Guesthouse"
  }
};

/* ---------------- Helpers ---------------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const rand = n => "R" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const intl = n => "27" + n.replace(/\D/g, "").replace(/^0/, "");
const waUrl = (msg, which = CONFIG.defaultContact) =>
  `https://wa.me/${intl(CONFIG.contacts[which])}?text=${encodeURIComponent(msg)}`;
const mailUrl = msg =>
  `mailto:${CONFIG.email}?subject=${encodeURIComponent(CONFIG.messages.emailSubject)}&body=${encodeURIComponent(msg)}`;
const validUrl = u => /^https:\/\/\S+$/i.test((u || "").trim());
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };

/* ---------------- Photographs and placeholders ---------------- */
function fillPhoto(box, img, label) {
  box.textContent = "";
  if (img && img.src) {
    const i = new Image();
    i.src = img.src; i.alt = img.alt || label; i.loading = box.dataset.eager ? "eager" : "lazy";
    i.addEventListener("error", () => placeholder(box, label));
    box.append(i);
  } else placeholder(box, label);
}
function placeholder(box, label) {
  box.textContent = "";
  const p = el("div", "ph", `<span>Photograph to be added</span>`);
  p.setAttribute("role", "img");
  p.setAttribute("aria-label", `Photograph to be added: ${label}`);
  box.append(p);
}
$$("[data-slot]").forEach(b => fillPhoto(b, CONFIG.images[b.dataset.slot], b.dataset.label || ""));

/* ---------------- Hero slider ---------------- */
(function () {
  const box = $("#hero-slides"), slides = CONFIG.heroSlides || [];
  if (!slides.length) return;
  let nodes = [], i = 0, timer = null, paused = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pb = $("#hero-pause");
  const show = n => {
    if (!nodes.length) return;
    i = (n + nodes.length) % nodes.length;
    nodes.forEach((d, k) => { d.classList.toggle("is-active", k === i); d.setAttribute("aria-hidden", String(k !== i)); });
  };
  const stop = () => { clearInterval(timer); timer = null; };
  const go = () => { stop(); if (!paused && nodes.length > 1) timer = setInterval(() => show(i + 1), CONFIG.heroInterval); };
  const sync = () => { pb.setAttribute("aria-pressed", String(paused)); pb.setAttribute("aria-label", paused ? "Play slideshow" : "Pause slideshow"); };
  const refresh = () => { $("#hero-controls").hidden = nodes.length < 2; show(Math.min(i, nodes.length - 1)); go(); };

  slides.forEach((s, k) => {
    const d = el("div", "slide"); d.setAttribute("role", "group");
    d.setAttribute("aria-roledescription", "slide");
    d.setAttribute("aria-label", `${k + 1} of ${slides.length}`);
    const im = new Image(); im.alt = s.alt || ""; im.decoding = "async";
    /* A slide only joins the show once its photo has actually loaded, so a
       wrong file name skips that photo and never blanks the others. */
    im.addEventListener("load", () => { nodes.push(d); box.append(d); refresh(); });
    im.addEventListener("error", () => console.warn("Hero photo not found: " + s.src));
    d.append(im); im.src = s.src;
  });
  sync();
  pb.addEventListener("click", () => { paused = !paused; sync(); go(); });
  $("#hero-prev").addEventListener("click", () => { show(i - 1); go(); });
  $("#hero-next").addEventListener("click", () => { show(i + 1); go(); });
})();

/* ---------------- Accommodation (rendered from CONFIG) ---------------- */
const list = $("#accommodation-list");
CONFIG.accommodation.forEach((u, idx) => {
  const art = el("article", `unit unit--${u.tone}`);
  const photo = el("div", "photo"); photo.dataset.eager = "";
  fillPhoto(photo, CONFIG.images[u.id], u.name);
  const feats = u.features.length
    ? `<ul class="ticks">${u.features.map(f => `<li>${f}</li>`).join("")}</ul>`
    : `<p class="muted">Please enquire for the full list of features.</p>`;
  const body = el("div", "unit-body", `
    <h3>${u.name}</h3>
    <p class="rate"><strong>${rand(u.rate)}</strong> per night <span class="muted">private rate</span></p>
    <p>${u.description}</p>
    ${feats}
    <div class="actions">
      <a class="btn btn-primary" data-wa="unit" data-unit="${u.name}" href="#contact" target="_blank" rel="noopener noreferrer">Enquire about ${u.name}</a>
      <button class="btn btn-text" type="button" aria-expanded="false" aria-controls="det-${u.id}">View Details</button>
    </div>
    <div class="details" id="det-${u.id}" hidden>
      <p>Private direct-booking rate: ${rand(u.rate)} per night. Rates vary with season, availability and booking requirements, so please confirm before booking.</p>
      <p>Occupancy, bedding and other room details have not been listed here. Please enquire and we will gladly answer.</p>
    </div>`);
  if (idx % 2) art.classList.add("flip");
  art.append(photo, body);
  list.append(art);
});
list.addEventListener("click", e => {
  const b = e.target.closest(".btn-text"); if (!b) return;
  const open = b.getAttribute("aria-expanded") === "true";
  b.setAttribute("aria-expanded", String(!open));
  b.textContent = open ? "View Details" : "Hide Details";
  $("#" + b.getAttribute("aria-controls")).hidden = open;
});

/* ---------------- Team and reviews (rendered from CONFIG) ---------------- */
const staffBox = $("#staff-list");
CONFIG.staff.forEach(p => {
  const f = el("figure", "person"), photo = el("div", "photo");
  fillPhoto(photo, { src: p.src, alt: p.alt }, p.name);
  f.append(photo, el("figcaption", "", `<strong>${p.name}</strong><span>${p.role}</span>`));
  staffBox.append(f);
});
const star = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.500l2.900 6.200 6.800.8-5 4.700 1.300 6.700L12 17.500 6 20.900l1.300-6.700-5-4.700 6.800-.8L12 2.500Z"/></svg>';
const revBox = $("#review-list");
CONFIG.reviews.forEach(r => {
  const q = el("figure", "review");
  const n = Math.max(1, Math.min(5, r.stars));
  q.innerHTML = `<div class="stars" role="img" aria-label="${n} out of 5 stars">${star.repeat(n)}</div>
    <h3>${r.title}</h3><blockquote><p>${r.text}</p></blockquote><figcaption>${r.name}</figcaption>`;
  revBox.append(q);
});

/* ---------------- WhatsApp / email links ---------------- */
$$("[data-wa]").forEach(a => {
  const m = CONFIG.messages;
  const msg = a.dataset.wa === "unit" ? m.unit.replace("{unit}", a.dataset.unit) : m[a.dataset.wa];
  a.href = waUrl(msg, a.dataset.number || CONFIG.defaultContact);
  a.target = "_blank"; a.rel = "noopener noreferrer";
});
$$("[data-mail]").forEach(a => {
  a.href = mailUrl(CONFIG.messages[a.dataset.mail] || CONFIG.messages.general);
});
$$("[data-tel]").forEach(a => {
  const n = CONFIG.contacts[a.dataset.tel];
  a.href = "tel:+" + intl(n);
  if (a.dataset.show !== undefined) a.textContent = n.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
});
$$("[data-email]").forEach(a => { a.href = "mailto:" + CONFIG.email; a.textContent = CONFIG.email; });

/* ---------------- Booking platforms and social links ---------------- */
function enable(a, url, note) {
  if (validUrl(url)) {
    a.href = url.trim(); a.target = "_blank"; a.rel = "noopener noreferrer";
    a.removeAttribute("aria-disabled"); a.classList.remove("is-off");
    if (note) note.hidden = true;
  } else {
    a.removeAttribute("href"); a.setAttribute("aria-disabled", "true"); a.classList.add("is-off");
    if (note) note.hidden = false;
  }
}
$$("[data-platform]").forEach(a => enable(a, CONFIG.bookingLinks[a.dataset.platform], $(".platform-note", a.parentElement)));
$$("[data-social]").forEach(a => {
  enable(a, CONFIG.socialLinks[a.dataset.social]);
  if (a.classList.contains("is-off")) a.title = a.getAttribute("aria-label") + " page coming soon";
});

/* ---------------- Mobile navigation ---------------- */
const header = $(".site-header"), toggle = $("#nav-toggle"), nav = $("#site-nav");
function setNav(open) {
  header.classList.toggle("nav-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
toggle.addEventListener("click", () => setNav(toggle.getAttribute("aria-expanded") !== "true"));
nav.addEventListener("click", e => { if (e.target.closest("a")) setNav(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && header.classList.contains("nav-open")) { setNav(false); toggle.focus(); } });
matchMedia("(min-width: 62em)").addEventListener("change", () => setNav(false));

/* ---------------- Gallery and lightbox ---------------- */
const tabs = $("#gallery-tabs"), grid = $("#gallery-grid"), dlg = $("#lightbox");
let current = Object.keys(CONFIG.gallery)[0], shown = [], pos = 0;

Object.keys(CONFIG.gallery).forEach(cat => {
  const b = el("button", "tab", cat); b.type = "button"; b.dataset.cat = cat;
  tabs.append(b);
});
function drawGallery() {
  $$(".tab", tabs).forEach(t => t.setAttribute("aria-pressed", String(t.dataset.cat === current)));
  grid.textContent = ""; shown = CONFIG.gallery[current];
  if (!shown.length) {
    for (let i = 0; i < 3; i++) { const f = el("div", "tile"); placeholder(f, `${current}, photograph ${i + 1}`); grid.append(f); }
    return;
  }
  shown.forEach((g, i) => {
    const b = el("button", "tile"); b.type = "button";
    b.setAttribute("aria-label", `Enlarge photograph: ${g.alt}`);
    const im = new Image(); im.src = g.src; im.alt = g.alt; im.loading = "lazy";
    b.append(im); b.addEventListener("click", () => openBox(i)); grid.append(b);
  });
}
tabs.addEventListener("click", e => { const t = e.target.closest(".tab"); if (t) { current = t.dataset.cat; drawGallery(); } });
function showBox() {
  const g = shown[pos]; const im = $("img", dlg);
  im.src = g.src; im.alt = g.alt; im.hidden = false; $("figcaption", dlg).textContent = g.alt;
  $$(".lb-nav", dlg).forEach(b => b.hidden = shown.length < 2);
}
function openBox(i) { pos = i; showBox(); dlg.showModal(); }
function step(d) { pos = (pos + d + shown.length) % shown.length; showBox(); }
$("#lb-close").addEventListener("click", () => dlg.close());
$("#lb-prev").addEventListener("click", () => step(-1));
$("#lb-next").addEventListener("click", () => step(1));
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("keydown", e => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
drawGallery();

/* ---------------- Footer year ---------------- */
$("#year").textContent = new Date().getFullYear();
