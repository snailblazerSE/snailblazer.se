document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("nav-toggle");
const header = document.querySelector(".site-header");

navToggle.addEventListener("click", () => {
  const open = header.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const form = document.querySelector(".kontakt-form");
const formNote = document.getElementById("form-note");

if (form) {
  form.addEventListener("submit", async (e) => {
    if (form.action.includes("YOUR_FORM_ID")) return;
    e.preventDefault();
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        formNote.hidden = false;
      } else {
        formNote.textContent = "Något gick fel. Mejla oss gärna direkt istället.";
        formNote.hidden = false;
      }
    } catch (err) {
      formNote.textContent = "Något gick fel. Mejla oss gärna direkt istället.";
      formNote.hidden = false;
    }
  });
}
