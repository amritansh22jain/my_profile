document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear()
  
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    const navList = document.querySelector(".nav-list")
  
    if (mobileMenuBtn && navList) {
      mobileMenuBtn.addEventListener("click", () => {
        navList.classList.toggle("active")
        mobileMenuBtn.classList.toggle("active")
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
  
        // Close mobile menu if open
        if (navList && navList.classList.contains("active")) {
          navList.classList.remove("active")
          mobileMenuBtn.classList.remove("active")
        }
      })
    })
  
    // Project filtering
    const tabBtns = document.querySelectorAll(".tab-btn")
    const projectCards = document.querySelectorAll(".project-card")
  
    if (tabBtns.length && projectCards.length) {
      tabBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          // Remove active class from all buttons
          tabBtns.forEach((b) => b.classList.remove("active"))
          // Add active class to clicked button
          this.classList.add("active")
  
          const filter = this.getAttribute("data-filter")
  
          projectCards.forEach((card) => {
            if (filter === "all") {
              card.style.display = "block"
            } else {
              const categories = card.getAttribute("data-category").split(" ")
              if (categories.includes(filter)) {
                card.style.display = "block"
              } else {
                card.style.display = "none"
              }
            }
          })
        })
      })
    }
  
    // Form submission
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form data
        const formData = new FormData(contactForm)
        const formValues = Object.fromEntries(formData.entries())
  
        // Here you would typically send the form data to a server
        // For GitHub Pages, you might use a service like Formspree
  
        // For now, just log the data and show a success message
        console.log("Form submitted:", formValues)
  
        // Show success message
        alert("Thank you for your message! I will get back to you soon.")
  
        // Reset form
        contactForm.reset()
      })
    }
  })
  