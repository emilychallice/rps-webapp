const darkModeButton = document.querySelector("#darkmode-button");

darkModeButton.addEventListener("click", darkModeFunction);

function darkModeFunction()
{
  if (darkModeButton.classList.contains("active"))
  { // Toggle light mode
    darkModeButton.classList.remove("active");
    darkModeButton.textContent = "Dark Mode";
    document.documentElement.style.setProperty("--bg-colour", "var(--bg-colour-lightmode)");
  }
  else
  { // Toggle dark mode
    darkModeButton.classList.add("active");
    darkModeButton.textContent = "Light Mode";
    document.documentElement.style.setProperty("--bg-colour", "var(--bg-colour-darkmode)");
  }
}