let fragen = [];
let aktuelleFrage = 0;
let leben = 3;
let punkte = 0;

async function ladeVokabeln() {
    const res = await fetch('vokabeln.json');
    fragen = await res.json();
    aktuelleFrage = 0;
    leben = 3;
    punkte = 0;
    zeigeFrage();
}

function zeigeFrage() {
    if (leben <= 0 || aktuelleFrage >= fragen.length) {
        document.getElementById('frage').innerText = 'Spiel beendet! Punkte: ' + punkte;
        document.getElementById('antworten').innerHTML = '';
        return;
    }

    const frage = fragen[aktuelleFrage];
    document.getElementById('frage').innerText = `Was heißt "${frage.de}" auf Italienisch?`;

    const antwortenDiv = document.getElementById('antworten');
    antwortenDiv.innerHTML = '';

    const richtigeAntwort = frage.it;
    const antwortMoeglichkeiten = [richtigeAntwort, ...frage.falsch].sort(() => 0.5 - Math.random());

    antwortMoeglichkeiten.forEach(antwort => {
        const btn = document.createElement('button');
        btn.innerText = antwort;
        btn.onclick = () => pruefeAntwort(antwort === richtigeAntwort);
        antwortenDiv.appendChild(btn);
    });

    document.getElementById('leben').innerText = 'Leben: ' + leben;
    document.getElementById('punkte').innerText = 'Punkte: ' + punkte;
}

function pruefeAntwort(richtig) {
    if (richtig) {
        punkte += 10;
    } else {
        leben -= 1;
    }
    aktuelleFrage++;
    zeigeFrage();
}

function neustarten() {
    ladeVokabeln();
}

window.onload = ladeVokabeln;

function login() {
  const name = document.getElementById("username").value.trim();
  if (name) {
    localStorage.setItem("nutzername", name);
    localStorage.setItem("punkte", "0");  // Startwert
    showSpielbereich();
  }
}

function logout() {
  localStorage.clear();
  location.reload();
}

function showSpielbereich() {
  const name = localStorage.getItem("nutzername");
  const punkte = localStorage.getItem("punkte") || 0;

  if (name) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("spiel-container").style.display = "block";
    document.getElementById("nutzername").textContent = name;
    document.getElementById("punkte").textContent = punkte;
  }
}

// Punkte aktualisieren (z. B. nach richtiger Antwort)
function punkteErhöhen(wert) {
  let punkte = parseInt(localStorage.getItem("punkte") || "0");
  punkte += wert;
  localStorage.setItem("punkte", punkte);
  document.getElementById("punkte").textContent = punkte;
}

window.onload = showSpielbereich;
