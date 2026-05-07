// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  // Highlight active nav link based on current page
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // Workout filter pills
  const pills = document.querySelectorAll(".pill");
  const cards = document.querySelectorAll(".video-card");
  if (pills.length && cards.length) {
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        pills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        const filter = pill.dataset.filter;
        cards.forEach((card) => {
          const cat = card.dataset.category || "";
          card.style.display =
            filter === "all" || cat.includes(filter) ? "" : "none";
        });
      });
    });
  }

  // Intake form — submits to Formspree via fetch and shows inline success
  const form = document.querySelector("#intake-form");
  if (form) {
    const success = document.querySelector(".form-success");
    const error = document.querySelector(".form-error");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (success) success.classList.remove("show");
      if (error) error.classList.remove("show");

      // Basic required-field check
      const required = form.querySelectorAll("[required]");
      for (const f of required) {
        if (!f.value.trim()) {
          f.focus();
          return;
        }
      }

      const action = form.getAttribute("action") || "";
      // If Formspree hasn't been configured yet, fall back to mailto
      if (action.includes("YOUR_FORM_ID") || !action) {
        const data = new FormData(form);
        const lines = [];
        data.forEach((v, k) => {
          if (k.startsWith("_")) return;
          lines.push(`${k}: ${v}`);
        });
        window.location.href =
          "mailto:trevsp27@gmail.com" +
          "?subject=" + encodeURIComponent("New coaching application — Sara Spinosa") +
          "&body=" + encodeURIComponent(lines.join("\n"));
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }

      try {
        const res = await fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          if (success) {
            success.classList.add("show");
            success.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          form.reset();
        } else {
          if (error) error.classList.add("show");
        }
      } catch (err) {
        if (error) error.classList.add("show");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    });
  }

  // Set footer year
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
