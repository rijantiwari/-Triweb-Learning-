document.addEventListener("DOMContentLoaded", function () {
  const dobInput = document.getElementById("dob");
  const ageInput = document.getElementById("age");
  const submitBtn = document.getElementById("submit-btn");
  const form = document.getElementById("registration-form");

  dobInput.addEventListener("change", function () {
    const dob = new Date(this.value);
    const today = new Date();
    const age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
    ageInput.value = age;
  });

  form.addEventListener("submit", function (e) {
    const emailInput = document.getElementById("email");
    const contactInput = document.getElementById("contact");
    const emailError = document.getElementById("email-error");
    const contactError = document.getElementById("contact-error");

    if (!emailInput.validity.valid) {
      e.preventDefault();
      emailError.textContent = "Please enter a valid email address.";
    } else {
      emailError.textContent = "";
    }

    if (
      contactInput.value.length !== 10 ||
      !/^\d{10}$/.test(contactInput.value)
    ) {
      e.preventDefault();
      contactError.textContent = "Contact number should be exactly 10 digits.";
    } else {
      contactError.textContent = "";
    }
  });
});
