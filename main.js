const links = document.querySelectorAll(".link");
let name =
  document.getElementById("first_name").value +
  " " +
  document.getElementById("last_name").value;

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active")); // Remove from all
    link.classList.add("active"); // Add to clicked one
  });
});

function sendMail(event) {
  if (event) event.preventDefault();

  // Get the latest values from the form
  let name =
    document.getElementById("first_name").value +
    " " +
    document.getElementById("last_name").value;

  let parms = {
    name,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_dz2ansh", "template_y35hcge", parms)
    .then(function (res) {
      alert("Uspjesno, pruka poslana: ");
    })
    .catch(function (err) {
      alert("Greska, poruka nije poslana: ");
    });

  return false; // Prevent form from submitting
}

function toggleMenu() {
  const container = document.getElementById("hamburgerBtn_options_container");
  if (container.style.display === "none" || container.style.display === "") {
    container.style.display = "block";
    sun_moon.style.display = "none";
  } else {
    container.style.display = "none";
    sun_moon.style.display = "inline";
  }
}

// Detect system theme and set class on <html> and switch images
function applyThemeImages() {
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const headerBanner = document.getElementById("header_banner");
  const landingLogo = document.getElementById("landing_logo");
  const hamburgerBtn = document.getElementById("hamburgerID");

  if (isDark) {
    document.documentElement.classList.add("dark-theme");
    if (headerBanner)
      headerBanner.src = "./images/Banner-Transparent-White-Cropped.png";
    if (landingLogo)
      landingLogo.src = "./images/Logotype-Transparent-White.png";
    if (hamburgerBtn)
      hamburgerBtn.src = "./images/options button - dark theme.png";
  } else {
    document.documentElement.classList.remove("dark-theme");
    if (headerBanner)
      headerBanner.src = "./images/Banner-Transparent-Black-Cropped.png";
    if (landingLogo)
      landingLogo.src = "./images/Logotype-Transparent-NavyBlue.png";
    if (hamburgerBtn)
      hamburgerBtn.src = "./images/options button - light theme.png";
  }
}

// Run on load
applyThemeImages();

// Listen for system theme changes
if (window.matchMedia) {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", applyThemeImages);
}
