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

const toggleBtn = document.getElementById("theme-toggle");

const imageLogo = document.getElementById("landing_logo");
const imageBanner = document.getElementById("header_banner");
const sun_moon = document.getElementById("sun-moon");
const hamburgerBtn = document.getElementById("hamburgerID");

// Load theme from storage
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.classList.toggle(
  "dark-theme",
  currentTheme === "dark"
);

toggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  if (isDark) {
    imageLogo.src = "./images/Logotype-Transparent-White.png";
    imageBanner.src = "./images/Banner-Transparent-White-Cropped.png";
    sun_moon.src = "./images/light theme button.png";
    hamburgerBtn.src = "./images/options button - dark theme.png";
  } else {
    imageLogo.src = "./images/Logotype-Transparent-NavyBlue.png";
    imageBanner.src = "./images/Banner-Transparent-Black-Cropped.png";
    sun_moon.src = "./images/dark theme button.png";
    hamburgerBtn.src = "./images/options button - light theme.png";
  }
});

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
