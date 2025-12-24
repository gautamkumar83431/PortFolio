
 /* Project Read More */
document.querySelectorAll(".read-more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const moreText = btn.previousElementSibling.querySelector(".more-text");
    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      btn.innerText = "Read More";
    } else {
      moreText.style.display = "inline";
      btn.innerText = "Read Less";
    }
  });
});

/* Scroll Animation */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(60px)";
  sec.style.transition = "0.8s ease";
});
/* ===============================
   RUN AFTER PAGE LOAD
================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     MOBILE NAVBAR AUTO-CLOSE
  ================================ */
  const menuLinks = document.querySelectorAll("#menu a");
  const checkbox = document.querySelector("#menuToggle input");

  if (checkbox) {
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        checkbox.checked = false; // close menu after click
      });
    });
  }

  /* ===============================
     TYPING TEXT ANIMATION
  ================================ */
  const texts = ["Web Developer", "UI/UX Designer", "MERN Developer"];
  let textIndex = 0;
  let charIndex = 0;
  const speed = 120;
  const target = document.getElementById("changingText");

  if (target) {
    target.textContent = "";

    function typeEffect() {
      if (charIndex < texts[textIndex].length) {
        target.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
      } else {
        setTimeout(eraseEffect, 1500);
      }
    }

    function eraseEffect() {
      if (charIndex > 0) {
        target.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, speed / 2);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, speed);
      }
    }

    typeEffect();
  }

});
