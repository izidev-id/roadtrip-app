const days = [
  { date: "2026-08-16", night: "Nuit 0", from: "Carnoux", to: "Lodève", kms: 245, duration: "3h04", sleep: "Aire municipale de Lodève, Parc Municipal (sécurisée, gratuite, entre centre-ville et Prémerlet)", todo: "Cirque de Navacelles (belvédère) + village de Saint-Guilhem-le-Désert (camping-car : parking à l'entrée, ruelles piétonnes) + Gorges de la Vis + vieux Lodève" },
  { date: "2026-08-17", night: "Nuit 1", from: "Lodève", to: "Rodez", kms: 121, duration: "1h31", sleep: "Aire municipale de Rodez, Gué de Salelles, bord de l'Aveyron (calme, gratuite, sentier pédestre)", todo: "Viaduc de Millau (aire de vue sur A75) + Causse du Larzac (grands espaces, brebis) + caves de Roquefort-sur-Soulzon + vieux Rodez et sa cathédrale" },
  { date: "2026-08-18", night: "Nuit 2", from: "Rodez", to: "Sarlat", kms: 164, duration: "2h03", sleep: "Parking Carrefour Market La Croix Rouge, Sarlat (gratuit, calme, 10-15 min à pied du centre) ou Aire Camping-Car Park Sarlat (payante, sécurisée, en ville)", todo: "Installation + visite vieille ville de Sarlat + marché + centre médiéval de nuit" },
  { date: "2026-08-19", night: "Nuit 3", from: "Sarlat", to: "Beynac-et-Cazenac", kms: 12, duration: "0h09", sleep: "HÔTEL (à réserver à Beynac-et-Cazenac ou Sarlat tout proche)", todo: "Canoë Dordogne + panorama Domme + château Beynac\nSarlat → La Roque-Gageac → Domme → Beynac-et-Cazenac" },
  { date: "2026-08-20", night: "Nuit 4", from: "Beynac-et-Cazenac", to: "Monpazier", kms: 38, duration: "0h29", sleep: "Aire municipale de Monpazier, derrière la caserne des pompiers (gratuite, calme, à 400 m de la bastide)", todo: "Bastides + abbaye de Cadouin + villages médiévaux\nBeynac → Belvès → Cadouin → Monpazier" },
  { date: "2026-08-21", night: "Nuit 5", from: "Monpazier", to: "Périgueux", kms: 81, duration: "1h01", sleep: "Aire de camping-car de Périgueux, bords de l'Isle (services, calme, proche centre historique)", todo: "Monpazier → Limeuil → Gouffre de Proumeyssac → Brive-la-Gaillarde\nConfluence Dordogne/Vézère + gouffre + route vers Corrèze" },
  { date: "2026-08-22", night: "Nuit 6", from: "Périgueux", to: "Brantome", kms: 74, duration: "0h56", sleep: "Aire municipale de Brantôme, au bord de la Dronne (calme, à deux pas de l'abbaye)", todo: "Collonges-la-Rouge, Turenne, Forêt de Hautefort" },
  { date: "2026-08-23", night: "Nuit 7", from: "Brantome", to: "Angouleme", kms: 58, duration: "0h44", sleep: "HÔTEL (à réserver à Angoulême)", todo: "Aubeterre-sur-Dronne (Plus Beaux Villages, église monolithe ; camping-car : parking en bas du village) + vieil Angoulême et ses remparts (cité de la BD)" },
  { date: "2026-08-24", night: "Nuit 8", from: "Angouleme", to: "Burie", kms: 64, duration: "0h48", sleep: "Petite aire calme à Burie, ou repli sur l'aire de Cognac au bord de la Charente (à vérifier sur park4night)", todo: "Cognac : vieille ville, quais de la Charente, maisons de négoce + village de Bourg-Charente" },
  { date: "2026-08-25", night: "Nuit 9", from: "Burie", to: "Ile de Ré", kms: 100, duration: "1h15", sleep: "Aire municipale de camping-car de Saint-Martin-de-Ré, rue du Rempart (payante ~11€, sécurisée, seule option légale la nuit sur l'île entre 23h et 7h)", todo: "Saintes (arènes romaines, abbaye aux Dames) + Rochefort (Corderie Royale, l'Hermione) + passage du pont de l'île de Ré (péage l'été)" },
  { date: "2026-08-26", night: "Nuit 10", from: "Ile de Ré", to: "La Rochelle", kms: 17, duration: "0h13", sleep: "Aire automatisée de Port-Neuf, La Rochelle (officielle, sécurisée, services complets, piste cyclable vers le centre)", todo: "Saint-Martin-de-Ré (citadelle Vauban, port fortifié) + Ars-en-Ré (clocher noir et blanc) + marais salants et ânes en culotte + marché de La Flotte" },
  { date: "2026-08-27", night: "Nuit 11", from: "La Rochelle", to: "La Rochelle", kms: 0, duration: "-", sleep: "HÔTEL (à réserver à La Rochelle)", todo: "Vieux-Port et ses tours (Saint-Nicolas, Chaîne, Lanterne) + rues à arcades + aquarium + remparts à vélo" },
  { date: "2026-08-28", night: "Nuit 12", from: "La Rochelle", to: "Saint Pierre d'Oléron", kms: 75, duration: "0h56", sleep: "Aire municipale de Saint-Pierre-d'Oléron (à vérifier services/tarifs sur park4night)", todo: "Île d'Aix ou vue sur Fort Boyard (Fouras) + Marennes, capitale de l'huître + pont de l'île d'Oléron + citadelle de Château-d'Oléron" },
  { date: "2026-08-29", night: "Nuit 13", from: "Saint Pierre d'Oléron", to: "Saint Pierre d'Oléron", kms: 0, duration: "-", sleep: "Aire côté La Cotinière ou phare de Chassiron pour varier (à vérifier sur park4night)", todo: "Phare de Chassiron et côte sauvage + port de pêche de La Cotinière + forêt et pistes cyclables de l'île + Fort Louvois à marée basse" },
  { date: "2026-08-30", night: "Nuit 14", from: "Saint Pierre d'Oléron", to: "Soulac", kms: 72, duration: "0h54", sleep: "Aire municipale de Soulac-sur-Mer, boulevard de l'Amélie (payante, calme, bord de plage)", todo: "Traversée en bac Royan - Le Verdon (camping-car : réserver, tarif spécifique) + front de mer Art déco de Royan + vue sur le phare de Cordouan + église Notre-Dame-de-la-Fin-des-Terres classée UNESCO à Soulac" },
  { date: "2026-08-31", night: "Nuit 15", from: "Soulac", to: "Lacanau", kms: 70, duration: "0h53", sleep: "HÔTEL (à réserver à Lacanau-Océan)", todo: "Pointe de Grave et estuaire de la Gironde + forêt de pins des Landes + lac d'Hourtin-Carcans, plus grand lac naturel de France" },
  { date: "2026-09-01", night: "Nuit 16", from: "Lacanau", to: "Biscarosse", kms: 95, duration: "1h11", sleep: "Aire de camping-car de Biscarrosse-Plage ou bord du lac (calme, à vérifier sur park4night)", todo: "Bassin d'Arcachon et villages ostréicoles (Cap Ferret, L'Herbe) + dune du Pilat (parking poids lourds/camping-car à prévoir) + étangs de Cazaux et Biscarrosse" },
  { date: "2026-09-02", night: "Nuit 17", from: "Biscarosse", to: "Mimizan", kms: 35, duration: "0h26", sleep: "Aire de camping-car de Mimizan-Plage", todo: "Musée de l'hydraviation à Biscarrosse + étang de Parentis et ses derricks + dunes et plage de Mimizan" },
  { date: "2026-09-03", night: "Nuit 18", from: "Mimizan", to: "Cap Breton", kms: 60, duration: "0h45", sleep: "Aire de camping-car de Capbreton, proche estacade (très demandée en été, vérifier dispo)", todo: "Phare rayé de Contis + courant d'Huchet en barquette (réserve naturelle) + lac de Léon + Vieux-Boucau" },
  { date: "2026-09-04", night: "Nuit 19", from: "Cap Breton", to: "Bayonne", kms: 20, duration: "0h15", sleep: "HÔTEL (à réserver à Bayonne)", todo: "Hossegor et ses villas années folles + le Gouf de Capbreton + vieux Bayonne (colombages, jambon, chocolat)" },
  { date: "2026-09-05", night: "Nuit 20", from: "Bayonne", to: "Biarritz", kms: 9, duration: "0h07", sleep: "Parking/aire calme en périphérie de Biarritz, ex. côté Milady (stationnement en centre très limité pour CC, vérifier park4night)", todo: "Corniche d'Anglet + Rocher de la Vierge et Grande Plage de Biarritz + villas basques" },
  { date: "2026-09-06", night: "Nuit 21", from: "Biarritz", to: "Saint jean de luz", kms: 15, duration: "0h11", sleep: "Aire de Ciboure / Saint-Jean-de-Luz (très demandée en été, vérifier disponibilité)", todo: "Guéthary, petit village basque perché + vieux port et maison Louis XIV à Saint-Jean-de-Luz" },
  { date: "2026-09-07", night: "Nuit 22", from: "Saint jean de luz", to: "Espelette", kms: 22, duration: "0h17", sleep: "Aire municipale d'Espelette, au pied du village (calme)", todo: "Ainhoa (Plus Beaux Villages de France ; camping-car : parking à l'entrée) + piments d'Espelette séchant sur les façades" },
  { date: "2026-09-08", night: "Nuit 23", from: "Espelette", to: "Saint jean Pied de port", kms: 28, duration: "0h21", sleep: "HÔTEL (à réserver à Saint-Jean-Pied-de-Port)", todo: "Petites routes du piémont basque + citadelle et remparts de Saint-Jean-Pied-de-Port, départ du chemin de Compostelle" },
  { date: "2026-09-09", night: "Nuit 24", from: "Saint jean Pied de port", to: "Pau", kms: 85, duration: "1h04", sleep: "Aire calme au bord du Gave de Pau (rue Amédée Roussille) ou Camping City Nature à Lescar (payant, sécurisé, services, 8 km du centre via voie verte)", todo: "Villages de Saint-Jean-le-Vieux et Ostabat + château Henri IV et boulevard des Pyrénées à Pau" },
  { date: "2026-09-10", night: "Nuit 25", from: "Pau", to: "Saint-Bertrand-de-Comminges", kms: 100, duration: "1h15", sleep: "Petite aire au pied de la cathédrale de Saint-Bertrand-de-Comminges (calme, à vérifier sur park4night)", todo: "Piémont pyrénéen, village de Nay (et détour possible par Lourdes) + arrivée à la cathédrale de Saint-Bertrand-de-Comminges" },
  { date: "2026-09-11", night: "Nuit 26", from: "Saint-Bertrand-de-Comminges", to: "Rieux-Volvestre", kms: 45, duration: "0h34", sleep: "Aire municipale de Rieux-Volvestre, bord de l'Arize (calme)", todo: "Grottes ornées de Gargas + Saint-Gaudens + campagne du Comminges + cathédrale de Rieux-Volvestre" },
  { date: "2026-09-12", night: "Nuit 27", from: "Rieux-Volvestre", to: "Toulouse", kms: 50, duration: "0h38", sleep: "HÔTEL (à réserver à Toulouse)", todo: "Villages de Carbonne et Cazères le long de la Garonne + arrivée sur la Ville Rose" },
  { date: "2026-09-13", night: "Nuit 28", from: "Toulouse", to: "Toulouse", kms: 0, duration: "-", sleep: "Aire de camping-car de Toulouse (ex. secteur Ramier, payante, sécurisée)", todo: "Capitole et place principale + basilique Saint-Sernin + balade le long du Canal du Midi + marché Victor Hugo" },
  { date: "2026-09-14", night: "Nuit 29", from: "Toulouse", to: "Narbonne", kms: 152, duration: "1h54", sleep: "Aire Camping-Car Park de Narbonne, bord du Canal de la Robine classé UNESCO (payante, sécurisée, à 1 km du centre) ou aire privée sécurisée chemin du Pech de l'Agnel, au calme entre les oliviers", todo: "Écluses du Canal du Midi à Castelnaudary (capitale du cassoulet) + cité médiévale de Carcassonne, incontournable (camping-car : parkings dédiés aux abords) + Narbonne : cathédrale et Halles" },
  { date: "2026-09-15", night: "Nuit 30", from: "Narbonne", to: "Carnoux", kms: 281, duration: "3h31", sleep: "Retour à la maison - pas de nuit", todo: "Étang de Thau et villages ostréicoles de Bouzigues/Mèze + Sète, la Venise du Languedoc + retour vers Carnoux" }
];

const wikiTitles = {
  "Lodève": "Lodève",
  "Rodez": "Rodez",
  "Sarlat": "Sarlat-la-Canéda",
  "Beynac-et-Cazenac": "Beynac-et-Cazenac",
  "Monpazier": "Monpazier",
  "Périgueux": "Périgueux",
  "Brantome": "Brantôme",
  "Angouleme": "Angoulême",
  "Burie": "Burie",
  "Ile de Ré": "Île de Ré",
  "La Rochelle": "La Rochelle",
  "Saint Pierre d'Oléron": "Saint-Pierre-d'Oléron",
  "Soulac": "Soulac-sur-Mer",
  "Lacanau": "Lacanau",
  "Biscarosse": "Biscarrosse",
  "Mimizan": "Mimizan",
  "Cap Breton": "Capbreton",
  "Bayonne": "Bayonne",
  "Biarritz": "Biarritz",
  "Saint jean de luz": "Saint-Jean-de-Luz",
  "Espelette": "Espelette",
  "Saint jean Pied de port": "Saint-Jean-Pied-de-Port",
  "Pau": "Pau",
  "Saint-Bertrand-de-Comminges": "Saint-Bertrand-de-Comminges",
  "Rieux-Volvestre": "Rieux-Volvestre",
  "Toulouse": "Toulouse",
  "Narbonne": "Narbonne",
  "Carnoux": "Carnoux-en-Provence"
};

const departments = {
  "Lodève": "Hérault (34)",
  "Rodez": "Aveyron (12)",
  "Sarlat": "Dordogne (24)",
  "Beynac-et-Cazenac": "Dordogne (24)",
  "Monpazier": "Dordogne (24)",
  "Périgueux": "Dordogne (24)",
  "Brantome": "Dordogne (24)",
  "Angouleme": "Charente (16)",
  "Burie": "Charente-Maritime (17)",
  "Ile de Ré": "Charente-Maritime (17)",
  "La Rochelle": "Charente-Maritime (17)",
  "Saint Pierre d'Oléron": "Charente-Maritime (17)",
  "Soulac": "Gironde (33)",
  "Lacanau": "Gironde (33)",
  "Biscarosse": "Landes (40)",
  "Mimizan": "Landes (40)",
  "Cap Breton": "Landes (40)",
  "Bayonne": "Pyrénées-Atlantiques (64)",
  "Biarritz": "Pyrénées-Atlantiques (64)",
  "Saint jean de luz": "Pyrénées-Atlantiques (64)",
  "Espelette": "Pyrénées-Atlantiques (64)",
  "Saint jean Pied de port": "Pyrénées-Atlantiques (64)",
  "Pau": "Pyrénées-Atlantiques (64)",
  "Saint-Bertrand-de-Comminges": "Haute-Garonne (31)",
  "Rieux-Volvestre": "Haute-Garonne (31)",
  "Toulouse": "Haute-Garonne (31)",
  "Narbonne": "Aude (11)",
  "Carnoux": "Bouches-du-Rhône (13)"
};

const state = {
  index: Number(localStorage.getItem("roadtrip-day") || 0)
};

const els = {
  hero: document.querySelector("#hero"),
  counter: document.querySelector("#counter"),
  date: document.querySelector("#date"),
  route: document.querySelector("#route"),
  department: document.querySelector("#department"),
  night: document.querySelector("#night"),
  kms: document.querySelector("#kms"),
  duration: document.querySelector("#duration"),
  sleep: document.querySelector("#sleep"),
  todo: document.querySelector("#todo"),
  prev: document.querySelector("#prevBtn"),
  next: document.querySelector("#nextBtn"),
  timeline: document.querySelector("#timeline"),
  card: document.querySelector("#dayCard")
};

const dateFormat = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

function splitTodo(text) {
  return text
    .split(/\n|\s\+\s/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function renderTimeline() {
  els.timeline.innerHTML = "";
  days.forEach((day, index) => {
    const button = document.createElement("button");
    button.className = "dot";
    button.type = "button";
    button.textContent = String(index + 1);
    button.title = `${day.night} - ${day.to}`;
    button.setAttribute("aria-label", `Afficher ${day.night}, destination ${day.to}`);
    button.addEventListener("click", () => showDay(index));
    els.timeline.append(button);
  });
}

function renderDay() {
  const day = days[state.index];
  const labelDate = dateFormat.format(new Date(`${day.date}T12:00:00`));

  document.title = `${day.to} - RoadTrip 2026`;
  els.counter.textContent = `${state.index + 1} / ${days.length}`;
  els.date.textContent = labelDate;
  els.route.textContent = `${day.from} → ${day.to}`;
  els.department.textContent = departments[day.to] || "";
  els.night.textContent = day.night;
  els.kms.textContent = day.kms === 0 ? "Sur place" : `${day.kms} km`;
  els.duration.textContent = day.duration === "-" ? "Pause" : day.duration;
  els.sleep.innerHTML = "";
  els.sleep.append(createExternalLink(day.sleep, googleMapsUrl(day.sleep, day.to)));
  els.todo.innerHTML = "";
  splitTodo(day.todo).forEach((item) => {
    const li = document.createElement("li");
    li.append(createExternalLink(item, googleImagesUrl(`${item} ${day.to} France`)));
    els.todo.append(li);
  });

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === state.index);
    dot.setAttribute("aria-current", index === state.index ? "step" : "false");
  });

  const activeDot = els.timeline.children[state.index];
  centerTimelineDot(activeDot);
  resetPageX();
  localStorage.setItem("roadtrip-day", String(state.index));
}

function centerTimelineDot(dot) {
  if (!dot) return;
  const left = dot.offsetLeft - (els.timeline.clientWidth - dot.offsetWidth) / 2;
  els.timeline.scrollTo({ left, behavior: "smooth" });
}

function resetPageX() {
  window.scrollTo({ left: 0, top: window.scrollY, behavior: "auto" });
  document.documentElement.scrollLeft = 0;
  document.body.scrollLeft = 0;
}

function createExternalLink(label, href) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  return link;
}

function googleImagesUrl(query) {
  return `https://www.google.com/search?${new URLSearchParams({ tbm: "isch", q: query })}`;
}

function googleMapsUrl(place, city) {
  return `https://www.google.com/maps/dir/?${new URLSearchParams({
    api: "1",
    destination: `${place} ${city} France`,
    travelmode: "driving"
  })}`;
}

function showDay(index) {
  state.index = (index + days.length) % days.length;
  renderDay();
}

function next() {
  showDay(state.index + 1);
}

function prev() {
  showDay(state.index - 1);
}

els.next.addEventListener("click", next);
els.prev.addEventListener("click", prev);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") next();
  if (event.key === "ArrowLeft") prev();
});

let touchStart = null;
els.hero.addEventListener("pointerdown", (event) => {
  touchStart = { x: event.clientX, y: event.clientY };
});

els.hero.addEventListener("pointerup", (event) => {
  if (!touchStart) return;
  const dx = event.clientX - touchStart.x;
  const dy = event.clientY - touchStart.y;
  touchStart = null;
  if (Math.abs(dx) < 55 || Math.abs(dx) < Math.abs(dy)) return;
  dx < 0 ? next() : prev();
});

renderTimeline();
showDay(Math.min(Math.max(state.index, 0), days.length - 1));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
