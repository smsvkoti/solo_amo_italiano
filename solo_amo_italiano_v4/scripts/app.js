
document.addEventListener("DOMContentLoaded", () => {
    const levelMap = document.getElementById("level-map");
    const sections = ["saluti", "famiglia", "quotidiano"];
    sections.forEach(section => {
        const heading = document.createElement("h2");
        heading.textContent = section.charAt(0).toUpperCase() + section.slice(1);
        levelMap.appendChild(heading);
        for (let i = 1; i <= 10; i++) {
            const level = document.createElement("div");
            level.className = "level";
            level.textContent = "🔒";
            levelMap.appendChild(level);
        }
    });
});
