let currentLevel = null;
let punkte = parseInt(localStorage.getItem("punkte") || "0");
let streak = parseInt(localStorage.getItem("streak") || "0");

document.getElementById("punkte").textContent = punkte;
document.getElementById("streak").textContent = streak;

function updateStreak() {
  const today = new Date().toISOString().split("T")[0];
  const lastDate = localStorage.getItem("lastDate");
  if (lastDate !== today) {
    const diff = (new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24);
    streak = diff === 1 ? streak + 1 : 1;
    localStorage.setItem("streak", streak);
    document.getElementById("streak").textContent = streak;
    localStorage.setItem("lastDate", today);
  }
}

function renderLevels() {
  const container = document.getElementById("level-container");
  container.innerHTML = "";
  for (let i = 0; i < levels.length; i++) {
    const btn = document.createElement("div");
    btn.className = "level";
    btn.textContent = i + 1;
    const completed = localStorage.getItem("level" + i + "_done") === "true";
    const unlocked = i === 0 || localStorage.getItem("level" + (i - 1) + "_done") === "true";
    if (completed) btn.classList.add("completed");
    else if (!unlocked) btn.classList.add("locked");
    if (unlocked) {
      btn.addEventListener("click", () => startLevel(i));
    }
    container.appendChild(btn);
  }
}

function startLevel(index) {
  currentLevel = index;
  const level = levels[index];
  let current = 0;
  document.getElementById("quiz-container").style.display = "block";
  showFrage(level[current]);

  function showFrage(q) {
    document.getElementById("frage").textContent = q.frage;
    const container = document.getElementById("antworten");
    container.innerHTML = "";
    q.antworten.forEach(a => {
      const btn = document.createElement("button");
      btn.textContent = a;
      btn.onclick = () => {
        if (a === q.korrekt) {
          current++;
          if (q.audio) {
            const audio = document.getElementById("audio-player");
            audio.src = q.audio;
            audio.play();
          }
          if (current >= levels[index].length) {
            punkte += 10;
            localStorage.setItem("punkte", punkte);
            localStorage.setItem("level" + index + "_done", "true");
            document.getElementById("punkte").textContent = punkte;
            updateStreak();
            document.getElementById("quiz-container").style.display = "none";
            renderLevels();
          } else {
            showFrage(level[current]);
          }
        } else {
          alert("Leider falsch!");
        }
      };
      container.appendChild(btn);
    });
  }
}

updateStreak();
renderLevels();