document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const company = document.getElementById("company").value.trim();
    const message = document.getElementById("message").value.trim();
    const body = `Name: ${name}\nCompany: ${company}\n\nRequirement:\n${message}`;
    window.location.href = `mailto:ar2.consultancy1@gmail.com?subject=${encodeURIComponent("AR2 Consultation Enquiry")}&body=${encodeURIComponent(body)}`;
  });
});