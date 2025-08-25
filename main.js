function sendMail(event) {
  if (event) event.preventDefault();

  // Get the latest values from the form
  let name = document.getElementById("name").value;

  let parms = {
    name,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_dz2ansh", "template_y35hcge", parms)
    .then(function (res) {
      alert("Pruka poslana: ");
    })
    .catch(function (err) {
      alert("Greska, poruka nije poslana: ");
    });

  return false; // Prevent form from submitting
}
