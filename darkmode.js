const darkModeButton = document.querySelector("#darkmode-button");

darkModeButton.addEventListener("click", darkModeFunction);

function darkModeFunction()
{
  if (darkModeButton.classList.contains("active"))
  { // Toggle light mode
    darkModeButton.classList.remove("active");
    darkModeButton.textContent = "Dark Mode";
    document.documentElement.style.setProperty("--bg-colour", "var(--bg-colour-lightmode)");
    document.documentElement.style.setProperty("--cpu-choice-colour", "var(--cpu-choice-colour-lightmode)");
    document.documentElement.style.setProperty("--cpu-choice-colour-text", "var(--cpu-choice-colour-text-lightmode)");
  }
  else
  { // Toggle dark mode
    darkModeButton.classList.add("active");
    darkModeButton.textContent = "Light Mode";
    document.documentElement.style.setProperty("--bg-colour", "var(--bg-colour-darkmode)");
    document.documentElement.style.setProperty("--cpu-choice-colour", "var(--cpu-choice-colour-darkmode)");
    document.documentElement.style.setProperty("--cpu-choice-colour-text", "var(--cpu-choice-colour-text-darkmode)");

  }
}