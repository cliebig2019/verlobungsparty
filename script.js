// Sanfte Scroll-Animation für bessere Benutzererfahrung
document.addEventListener("DOMContentLoaded", () => {
  // Füge sanfte Erscheinungs-Animation hinzu
  const sections = document.querySelectorAll(".food-section")

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "0"
        entry.target.style.transform = "translateY(20px)"

        setTimeout(() => {
          entry.target.style.transition = "opacity 0.6s ease, transform 0.6s ease"
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, 100)

        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  sections.forEach((section) => {
    observer.observe(section)
  })
})
