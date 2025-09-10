// Utility function for smooth scrolling to sections
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

// Run once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")
  const navbar = document.getElementById("navbar")
  const navLinks = document.querySelectorAll(".nav-link")

  // ============================
  // 1. Mobile menu toggle
  // ============================
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  }

  // Close menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })

  // ============================
  // 2. Navbar scroll effect
  // ============================
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // ============================
  // 3. Smooth scrolling
  // ============================
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // ============================
  // 4. Contact form handling
  // ============================
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const formData = new FormData(this)
      const name = formData.get("name")
      const email = formData.get("email")
      const subject = formData.get("subject")
      const message = formData.get("message")

      if (!name || !email || !subject || !message) {
        alert("Please fill in all required fields.")
        return
      }

      alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`)
      this.reset()
    })
  }

  // ============================
  // 5. Gallery item interactions
  // ============================
  const galleryItems = document.querySelectorAll(".gallery-item")
  galleryItems.forEach((item) => {
    const viewBtn = item.querySelector(".view-btn")
    if (viewBtn) {
      viewBtn.addEventListener("click", () => {
        const artTitle = item.querySelector("h3").textContent
        alert(
          `Viewing details for: ${artTitle}\n\nThis would typically open a detailed product page with more images, descriptions, and purchasing options.`
        )
      })
    }
  })

  // ============================
  // 6. Art type exploration
  // ============================
  const exploreButtons = document.querySelectorAll(".explore-btn")
  exploreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const typeTitle = this.parentElement.querySelector("h3").textContent
      alert(
        `Exploring ${typeTitle} collection...\n\nThis would typically navigate to a filtered gallery page showing all items in this category.`
      )
    })
  })

  // ============================
  // 7. Intersection Observer (animations on scroll)
  // ============================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })

  // ============================
  // 8. Image loading animation
  // ============================

  // ============================
  // 9. Button hover effect
  // ============================
  const buttons = document.querySelectorAll("button")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })
    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // ============================
  // 10. Hero parallax effect
  // ============================
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroImage = document.querySelector(".hero-image")
    if (heroImage) {
      heroImage.style.transform = `translateY(${scrolled * 0.1}px)`
    }
  })
})
