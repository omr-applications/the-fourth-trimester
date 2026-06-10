const bookingConfig = {
  providerName: "Bookwhen",
  providerUrl: "https://bookwhen.com/",
  paymentNote: "Bookings for the 5 October to 14 December programme will appear here as soon as the payment link is connected.",
};

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

const bookingForm = document.querySelector("[data-booking-form]");
const summary = document.querySelector("[data-booking-summary]");
const providerLink = document.querySelector("[data-provider-link]");
const providerName = document.querySelector("[data-provider-name]");
const providerNote = document.querySelector("[data-provider-note]");

if (providerLink) {
  providerLink.href = bookingConfig.providerUrl;
}

if (providerName) {
  providerName.textContent = bookingConfig.providerName;
}

if (providerNote) {
  providerNote.textContent = bookingConfig.paymentNote;
}

if (bookingForm && summary) {
  const fields = Array.from(bookingForm.querySelectorAll("input, select, textarea"));

  const updateSummary = () => {
    const data = Object.fromEntries(new FormData(bookingForm).entries());
    const selectedProgramme = data.programme || "10-session programme";
    const selectedPlaces = data.places || "1";
    const selectedStart = data.startDate || "5 October to 14 December";
    const selectedAge = data.ageGroup || "0-3 months";

    summary.innerHTML = `
      <p><strong>Programme:</strong> ${selectedProgramme}</p>
      <p><strong>Age group:</strong> ${selectedAge}</p>
      <p><strong>Places:</strong> ${selectedPlaces}</p>
      <p><strong>Preferred start:</strong> ${selectedStart}</p>
      <p class="small">Payment and confirmation happen through the live booking provider once connected.</p>
    `;
  };

  fields.forEach((field) => field.addEventListener("input", updateSummary));
  updateSummary();

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.open(bookingConfig.providerUrl, "_blank", "noopener,noreferrer");
  });
}
