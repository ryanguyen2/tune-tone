//dark mode function
const darkModeSwitch = document.getElementById("checkbox");
const currentMode = localStorage.getItem("mode") ? localStorage.getItem("mode") : null;
const projectImg = document.querySelectorAll(".project-card-image img");

if (currentMode) {
    document.documentElement.setAttribute("mode", currentMode);

    if (currentMode === "dark") {
        darkModeSwitch.checked = true;
        projectImg.forEach(a => a.style.filter = "brightness(0.85)");
    }
}

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("mode", "dark");
        localStorage.setItem("mode", "dark");
        projectImg.forEach(a => a.style.filter = "brightness(0.85)");
    } else {
        document.documentElement.setAttribute("mode", "light");
        localStorage.setItem("mode", "light");
        projectImg.forEach(a => a.style.filter = "brightness(1)");
    }
}

darkModeSwitch.addEventListener("change", switchMode, false);