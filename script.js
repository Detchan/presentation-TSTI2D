/* --- DONNÉES DES ÉTABLISSEMENTS --- */
  const places = [
  {id:1, name:"42 Le Havre", lat:49.4944, lon:0.1079, type:"dev", level:"bac+3", url:"https://www.42lehavre.fr"},
  {id:2, name:"IUT Le Havre – Informatique", lat:49.5048, lon:0.1127, type:"dev", level:"bac+3", url:"https://iut-lehavre.univ-lehavre.fr"},
  {id:3, name:"Université du Havre – Master Sécurité SI", lat:49.4944, lon:0.1079, type:"cyber", level:"bac+5", url:"https://www.univ-lehavre.fr"},
  {id:4, name:"CESI Rouen – Ingénieur Informatique", lat:49.4431, lon:1.0993, type:"dev", level:"bac+5", url:"https://ecole-ingenieurs.cesi.fr"},
  {id:5, name:"ESIGELEC Rouen – Cybersécurité", lat:49.3930, lon:1.0700, type:"cyber", level:"bac+5", url:"https://www.esigelec.fr"},
  {id:6, name:"IUT Rouen – Réseaux & Télécoms", lat:49.4431, lon:1.0993, type:"cyber", level:"bac+3", url:"https://iutrouen.univ-rouen.fr"},
  {id:7, name:"Université de Rouen – Master Informatique", lat:49.4431, lon:1.0993, type:"dev", level:"bac+5", url:"https://www.univ-rouen.fr"},
  {id:8, name:"EXIA CESI Caen – Développement", lat:49.1829, lon:-0.3707, type:"dev", level:"bac+5", url:"https://caen.cesi.fr"},
  {id:9, name:"IUT Caen – Informatique", lat:49.1829, lon:-0.3707, type:"dev", level:"bac+3", url:"https://iutcaen.unicaen.fr"},
  {id:10, name:"ENSICAEN – Génie Informatique + Cyber", lat:49.1837, lon:-0.3644, type:"cyber", level:"bac+5", url:"https://www.ensicaen.fr"},
  {id:11, name:"Normandigital School Caen", lat:49.1820, lon:-0.3700, type:"dev", level:"bac+3", url:"https://normandigital.fr"},
  {id:12, name:"Université Caen – Master Cyber", lat:49.1829, lon:-0.3707, type:"cyber", level:"bac+5", url:"https://www.unicaen.fr"},
  {id:13, name:"IUT Évreux – Informatique", lat:49.0240, lon:1.1508, type:"dev", level:"bac+3", url:"https://iutevreux.univ-rouen.fr"},
  {id:14, name:"Campus Sup Saint-Lô – BTS SIO", lat:49.1167, lon:-1.0833, type:"dev", level:"bac+2", url:"https://www.saint-lo.fr"},
  {id:15, name:"CFA Hubert Germain – Cybersécurité", lat:49.4431, lon:1.0993, type:"cyber", level:"bac+3", url:"https://www.cfa-normandie.fr"},
  {id:16, name:"42 Paris", lat:48.8966, lon:2.3185, type:"dev", level:"bac+3", url:"https://www.42.fr"},
  {id:17, name:"EPITA Paris – Cybersecurity", lat:48.8185, lon:2.3631, type:"cyber", level:"bac+5", url:"https://www.epita.fr"},
  {id:18, name:"Efrei Paris – Informatique & Cyber", lat:48.8146, lon:2.3679, type:"cyber", level:"bac+5", url:"https://www.efrei.fr"},
  {id:19, name:"IUT Paris – Informatique", lat:48.8462, lon:2.3545, type:"dev", level:"bac+3", url:"https://iutparis-seine.u-paris.fr"},
  {id:20, name:"Université Paris-Saclay – Cyber", lat:48.7090, lon:2.1710, type:"cyber", level:"bac+5", url:"https://www.universite-paris-saclay.fr"},
  {id:21, name:"IUT Rennes – Informatique", lat:48.1173, lon:-1.6778, type:"dev", level:"bac+3", url:"https://iutrennes.univ-rennes.fr"},
  {id:22, name:"ENSIBS Vannes – Cyberdéfense", lat:47.6582, lon:-2.7608, type:"cyber", level:"bac+5", url:"https://www-ensibs.univ-ubs.fr"},
  {id:23, name:"IUT Brest – Réseaux & Télécoms", lat:48.3904, lon:-4.4861, type:"cyber", level:"bac+3", url:"https://iut-brest.univ-brest.fr"},
  {id:24, name:"ENI École Informatique Rennes", lat:48.1173, lon:-1.6778, type:"dev", level:"bac+3", url:"https://www.eni-ecole.fr"},
  {id:25, name:"IUT Lille – Informatique", lat:50.6292, lon:3.0573, type:"dev", level:"bac+3", url:"https://iutlille.univ-lille.fr"},
  {id:26, name:"Université Lille – Cyber", lat:50.6292, lon:3.0573, type:"cyber", level:"bac+5", url:"https://www.univ-lille.fr"},
  {id:27, name:"IMT Lille Douai – Informatique", lat:50.3700, lon:3.0800, type:"dev", level:"bac+5", url:"https://imt-lille-douai.fr"},
  {id:28, name:"IUT Amiens – Informatique", lat:49.8920, lon:2.3000, type:"dev", level:"bac+3", url:"https://iut-amiens.u-picardie.fr"},
  {id:29, name:"IUT Chartres – Info", lat:48.4460, lon:1.4890, type:"dev", level:"bac+3", url:"https://www.iutchartres.univ-orleans.fr"},
  {id:30, name:"IUT Orléans – Réseaux", lat:47.9020, lon:1.9093, type:"cyber", level:"bac+3", url:"https://www.univ-orleans.fr"},
  {id:31, name:"Le Reacteur – École Dev Paris", lat:48.8708, lon:2.3785, type:"dev", level:"bac+3", url:"https://www.lereacteur.io"},
  {id:32, name:"Holberton School Paris", lat:48.8566, lon:2.3522, type:"dev", level:"bac+3", url:"https://www.holbertonschool.com"}
];

/* --- ICÔNES --- */
if (L.Icon.Default && L.Icon.Default.imagePath) {
    L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.9.4/dist/images/';
}
const iconDev = L.icon({ iconUrl: "image/icon-dev.png", iconSize: [34,34], iconAnchor:[17,34] });
const iconCyber = L.icon({ iconUrl: "image/icon-cyber.png", iconSize: [34,34], iconAnchor:[17,34] });
const iconMixed = L.icon({ iconUrl: "image/icon-mixed.png", iconSize: [34,34], iconAnchor:[17,34] });

/* --- CARTE --- */

let map;
let clusterGroup;
let isMapReady = false;

function getIcon(type) {
    if (type === "dev") return iconDev;
    if (type === "cyber") return iconCyber;
    return iconMixed; 
}

function initMap() {
    const mapElement = document.getElementById("map");
    if (!mapElement || typeof L === 'undefined' || typeof L.markerClusterGroup === 'undefined') {
        console.error("Leaflet ou l'élément carte non disponible.");
        return;
    }
    
    map = L.map("map").setView([48.9, 1], 7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19 }).addTo(map);

    clusterGroup = L.markerClusterGroup();
    map.addLayer(clusterGroup);
    isMapReady = true;
    
    setTimeout(() => {
        map.invalidateSize();
        addMarkers();
    }, 300); 
}

function addMarkers(levelFilter = "all") {
    if (!isMapReady) return;

    clusterGroup.clearLayers();

    places.forEach(p => {
        if (levelFilter !== "all" && p.level !== levelFilter) return;

        const icon = getIcon(p.type); 
        if (!icon) {
            console.warn(`Icône non définie pour le type: ${p.type}`);
            return;
        }

        const marker = L.marker([p.lat, p.lon], { icon: icon });

        marker.bindPopup(`
            <strong>${p.name}</strong><br>
            Spécialité : ${p.type.charAt(0).toUpperCase() + p.type.slice(1)}<br>
            Niveau : ${p.level.toUpperCase()}<br>
            <a href="${p.url}" target="_blank">Voir le site</a>
        `);

        clusterGroup.addLayer(marker);
    });
}

/* --- LIEN TABLEAU ↔ CARTE --- */
function updateMapByLevel(level) {
    addMarkers(level);
}


/* --- TABLE FORMATIONS --- */

const formationsTableData = [
  // Bac+2
  {level:"Bac+2", key:"bac+2", title:"BTS SIO – SLAM (Développement)", duration:"2 ans", note:"BTS SIO (SLAM) — exemple en lycées / CFA"},
  {level:"Bac+2", key:"bac+2", title:"BTS SIO – SISR (Réseaux & Sécurité)", duration:"2 ans", note:"Orientation réseaux/sécurité"},

  // Bac+3
  {level:"Bac+3", key:"bac+3", title:"BUT Informatique", duration:"3 ans", note:"IUT / BUT (ex-DUT)"},
  {level:"Bac+3", key:"bac+3", title:"Licence Informatique", duration:"3 ans", note:"Université (parcours général ou cyber)"},
  {level:"Bac+3", key:"bac+3", title:"Licence Professionnelle Développement Web", duration:"1 an (après bac+2)", note:"Licence pro spécialisée"},
  {level:"Bac+3", key:"bac+3", title:"Licence Professionnelle Cybersécurité / Cyberdéfense", duration:"1 an (après bac+2)", note:"Licence pro spécialisée"},
  {level:"Bac+3", key:"bac+3", title:"Bachelor Développeur Web / Full-Stack", duration:"3 ans", note:"Ecoles / privés (Le Reacteur, Holberton...)"},
  {level:"Bac+3", key:"bac+3", title:"Titre RNCP Développeur Web / Web Mobile", duration:"variable (1-3 ans)", note:"Certifications professionnelles"},

  // Bac+5
  {level:"Bac+5", key:"bac+5", title:"Cycle ingénieur Informatique (EX : CESI, ESIGELEC)", duration:"5 ans (incl. prépa)", note:"Écoles d'ingénieurs"},
  {level:"Bac+5", key:"bac+5", title:"Master Cybersécurité (Université / ENSICAEN / EPITA)", duration:"2 ans après licence", note:"Master spécialisé ou école d’ingénieur"},
  {level:"Bac+5", key:"bac+5", title:"Cycle ingénieur Cybersécurité (EPITA / ENSICAEN / ESIGELEC)", duration:"5 ans", note:"Parcours ingénieur spécialisé"},
  {level:"Bac+5", key:"bac+5", title:"Bachelor → Master (parcours long)", duration:"Bac+5 total", note:"Possibilité d'intégrer en licence puis master"}
];

function badgeFor(key){
  if(key === "bac+2") return `<span class="badge bac2">Bac+2</span>`;
  if(key === "bac+3") return `<span class="badge bac3">Bac+3</span>`;
  return `<span class="badge bac5">Bac+5</span>`;
}

function renderFormations(filter = "all", q = ""){
  const tbody = document.querySelector("#formationsTable tbody");
  if (!tbody) return; 

  tbody.innerHTML = "";
  const qtxt = q.trim().toLowerCase();

  formationsTableData.forEach(row => {
    if(filter !== "all" && row.key !== filter) return;
    if(qtxt && !(row.title.toLowerCase().includes(qtxt) || row.note.toLowerCase().includes(qtxt))) return;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${badgeFor(row.key)}</td>
      <td>${row.title}</td>
      <td>${row.duration}</td>
      <td>${row.note}</td>
    `;
    tbody.appendChild(tr);
  });
}

function exportToCsv(filename = "formations.csv"){
  const levelFilter = document.getElementById("levelFilter");
  const searchInput = document.getElementById("formationSearch");
  
  const currentFilter = levelFilter ? levelFilter.value : "all";
  const currentSearch = searchInput ? searchInput.value : "";

  const rows = [["Niveau","Intitulé","Durée indicative","Remarques"]];
  const q = currentFilter;
  const search = currentSearch.toLowerCase();

  formationsTableData.forEach(r => {
    if(q !== "all" && r.key !== q) return;
    if(search && !(r.title.toLowerCase().includes(search) || r.note.toLowerCase().includes(search))) return;
    rows.push([r.level, r.title, r.duration, r.note]);
  });

  const csvContent = rows.map(r => r.map(cell => `"${String(cell).replace(/"/g,'""')}"`).join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


/*** QUIZ ***/
const quizData = [
  {
    question: "Que signifie HTML ?",
    choices: [
      "HyperText Markup Language",
      "Hyper Transfer Mail Link",
      "Home Tool Modern Language"
    ],
    answer: 0
  },
  {
    question: "Quel est le rôle du CSS ?",
    choices: [
      "Gérer l'apparence visuelle d'un site",
      "Gérer une base de données",
      "Protéger le réseau"
    ],
    answer: 0
  },
  {
    question: "Quel métier identifie et exploite des failles de sécurité pour les corriger ?",
    choices: [
      "Data Scientist",
      "Pentester",
      "Chef de projet"
    ],
    answer: 1
  },
  {
    question: "Quel langage est principalement utilisé côté client (front-end) ?",
    choices: [
      "Python",
      "JavaScript",
      "SQL"
    ],
    answer: 1
  },
  {
    question: "Quel est l'objectif d'un pare-feu (firewall) ?",
    choices: [
      "Accélérer Internet",
      "Bloquer ou autoriser le trafic réseau",
      "Créer un site web"
    ],
    answer: 1
  }
];

function startQuiz() {
  const container = document.getElementById("quiz-container");
  if (!container) return;
  
  let index = 0;
  let score = 0;

  function showQuestion() {
    if (index >= quizData.length) {
        showResult();
        return;
    }
    const q = quizData[index];

    container.innerHTML = `
      <h3>${q.question}</h3>
      <div class="quiz-choices">
        ${q.choices
          .map(
            (c, i) =>
              `<button class="quiz-choice" data-id="${i}">${c}</button>`
          )
          .join("")}
      </div>
      <p class="quiz-feedback"></p>
    `;

    document.querySelectorAll(".quiz-choice").forEach((btn) => {
      btn.addEventListener("click", function() {
        const fb = document.querySelector(".quiz-feedback");
        
        // Désactiver tous les boutons après le clic
        document.querySelectorAll(".quiz-choice").forEach(b => b.disabled = true);
        
        if (Number(this.dataset.id) === q.answer) {
          fb.textContent = "✔️ Bonne réponse !";
          fb.style.color = "green";
          this.style.background = '#dcfce7'; 
          score++;
        } else {
          fb.textContent = "❌ Mauvaise réponse. La bonne réponse est : " + q.choices[q.answer];
          fb.style.color = "red";
          this.style.background = '#fee2e2'; 
          document.querySelector(`.quiz-choice[data-id="${q.answer}"]`).style.border = '2px solid green';
        }

        setTimeout(() => {
          index++;
          showQuestion();
        }, 1500);
      });
    });
  }

  function showResult() {
    let message = "";
    if (score === quizData.length) message = "🔥 Parfait, félicitations !";
    else if (score >= quizData.length / 2) message = "👏 Bien joué, de bonnes connaissances !";
    else message = "💡 Continuez à explorer les métiers pour améliorer votre score.";

    container.innerHTML = `
      <h3>🎉 Quiz terminé !</h3>
      <p>Score : <strong>${score} / ${quizData.length}</strong></p>
      <p>${message}</p>
      <button id="retry" style="margin-top: 15px;">Rejouer</button>
    `;

    document.getElementById("retry").onclick = startQuiz;
  }

  showQuestion();
}


/*** MINI-JEU : "CLASSE-LES !" ***/
const items = [
  { text: "HTML", category: "Développement" },
  { text: "Firewall", category: "Cybersécurité" },
  { text: "JavaScript", category: "Développement" },
  { text: "Phishing", category: "Cybersécurité" }
];

const categories = ["Développement", "Cybersécurité"];

function initGame() {
    const dragBox = document.querySelector(".draggables");
    const targetBox = document.querySelector(".targets");
    if (!dragBox || !targetBox) return;

    dragBox.innerHTML = "";
    targetBox.innerHTML = "";

    let correctCount = 0; // Compteur pour les éléments bien placés
    let activeDraggable = null;
    let initialX, initialY, currentX, currentY;

    // Zones cibles
    categories.forEach(cat => {
        const zone = document.createElement("div");
        zone.className = "dropzone";
        zone.dataset.cat = cat;
        zone.innerHTML = `<h4>${cat}</h4>`;
        targetBox.appendChild(zone);
        zone.addEventListener("dragover", e => e.preventDefault()); // Nécessaire pour le drag-and-drop classique
    });

    // Éléments à trier
    items.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "draggable";
        div.draggable = true;
        div.textContent = item.text;
        div.dataset.id = index;
        div.dataset.cat = item.category;

        dragBox.appendChild(div);

        // --- Événements souris (PC) ---
        div.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", div.dataset.id);
            div.classList.add("dragging");
        });
        div.addEventListener("dragend", () => div.classList.remove("dragging"));


        // --- Événements TOUCHER (Mobile) ---
        let originalParent = dragBox; 
        
        div.addEventListener("touchstart", e => {
            e.preventDefault();
            activeDraggable = div;
            originalParent = div.parentElement;

            const touch = e.touches[0];
            initialX = touch.clientX;
            initialY = touch.clientY;

            // Préparation du style pour le déplacement
            div.classList.add("dragging");
            div.style.position = 'fixed';
            div.style.zIndex = 1000;
            // Positionnement initial
            const rect = div.getBoundingClientRect();
            div.style.left = rect.left + 'px';
            div.style.top = rect.top + 'px';
        });

        div.addEventListener("touchmove", e => {
            if (!activeDraggable || activeDraggable !== div) return;
            e.preventDefault();

            const touch = e.touches[0];
            currentX = touch.clientX;
            currentY = touch.clientY;
            
            // Calcul du déplacement
            const dx = currentX - initialX;
            const dy = currentY - initialY;
            
            // Appliquer le déplacement
            div.style.left = (parseFloat(div.style.left) + dx) + 'px';
            div.style.top = (parseFloat(div.style.top) + dy) + 'px';
            
            // Mise à jour des coordonnées initiales pour le prochain mouvement
            initialX = currentX;
            initialY = currentY;
        });

        div.addEventListener("touchend", e => {
            if (!activeDraggable || activeDraggable !== div) return;

            activeDraggable = null;
            div.classList.remove("dragging");

            const finalTouch = e.changedTouches[0];
            let dropped = false;
            
            // Vérification de la zone de drop
            document.querySelectorAll(".dropzone").forEach(zone => {
                const rect = zone.getBoundingClientRect();

                // Si le point de relâchement est dans la zone
                if (finalTouch.clientX >= rect.left && 
                    finalTouch.clientX <= rect.right && 
                    finalTouch.clientY >= rect.top && 
                    finalTouch.clientY <= rect.bottom) {
                    
                    dropped = true;
                    // Vérification de la bonne catégorie
                    if (item.category === zone.dataset.cat) {
                        if(originalParent.classList.contains('draggables') || originalParent.classList.contains('dropzone')) {
                            correctCount++;
                        }
                        zone.appendChild(div);
                        zone.classList.add("success");
                        setTimeout(() => zone.classList.remove("success"), 300);

                        if (correctCount === items.length) {
                            setTimeout(() => {
                                alert("🎉 Bravo ! Tu as tout bien classé !");
                                initGame();
                            }, 400);
                        }
                    } else {
                        zone.classList.add("error");
                        setTimeout(() => zone.classList.remove("error"), 300);
                        // Fait semblant de ne pas avoir bougé et passe au reset
                    }
                }
            });
            
            // Reset du style et retour à l'état initial si non droppé dans une zone valide
            div.style.position = '';
            div.style.zIndex = '';
            div.style.left = '';
            div.style.top = '';

            // Si le drop était incorrect ou n'a pas eu lieu sur une zone, retour à la zone d'origine
            if (!dropped || item.category !== originalParent.dataset.cat && originalParent.classList.contains('dropzone')) {
                 originalParent.appendChild(div);
            }
        });
    });
    
    // Gestion du drop souris
    document.querySelectorAll(".dropzone").forEach(zone => {
        zone.addEventListener("drop", e => {
            e.preventDefault();
            const id = e.dataTransfer.getData("text/plain");
            
            if(id === "" || id === null || isNaN(Number(id))) return;
            
            const item = items[Number(id)];
            const dragged = document.querySelector(`.draggable[data-id='${id}']`);
            
            if (!item || !dragged) return; 

            if (item.category === zone.dataset.cat) {
                if (dragged.parentElement.classList.contains('draggables')) {
                     correctCount++;
                }
                zone.appendChild(dragged);
                zone.classList.add("success");
                setTimeout(() => zone.classList.remove("success"), 300);

                if (correctCount === items.length) {
                    setTimeout(() => {
                        alert("🎉 Bravo ! Tu as tout bien classé !");
                        initGame(); 
                    }, 500);
                }

            } else {
                zone.classList.add("error");
                setTimeout(() => zone.classList.remove("error"), 300);
            }
        });
    });
}


/* --- INITIALISATION GLOBALE--- */

function initApp() {
    // Initialisation des composants dynamiques
    initMap(); 
    startQuiz();
    initGame();
    renderFormations(); 

    // Récupération des éléments du DOM
    const levelFilter = document.getElementById("levelFilter");
    const searchInput = document.getElementById("formationSearch");
    const exportBtn = document.getElementById("exportCsv");
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Ajout des écouteurs d'événements (Tableau & Carte)
    if (levelFilter && searchInput && exportBtn) {
        const updateAll = () => {
            const currentLevel = levelFilter.value;
            const currentSearch = searchInput.value;
            
            renderFormations(currentLevel, currentSearch);
            updateMapByLevel(currentLevel); 
        };

        levelFilter.addEventListener("change", updateAll);
        searchInput.addEventListener("input", updateAll);
        exportBtn.addEventListener("click", exportToCsv);
    }
    
    // Menu mobile
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
        
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Ferme le menu après un clic sur un lien
                navMenu.classList.remove('show'); 
            });
        });
    }

}


// Point d'entrée : Exécuter l'initialisation après que le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', initApp);

