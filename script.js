const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

// 1️⃣ Show large logo
tl.to(".hero-logo", { opacity: 1, duration: 0.8 });

// 2️⃣ Small pause
tl.to({}, { duration: 0.6 }); // cleaner delay

// 3️⃣ Move to top center
tl.to(".hero-logo", { 
  fontSize: "3rem",
  top: "20px",
  left: "50%",
  xPercent: -50,
  yPercent: 0,
  duration: 1
});

// 4️⃣ Animate hero content sequentially
tl.to(".hero-title", { opacity: 1, y: 0, duration: 0.7 })
  .to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
  .to(".cta-btn", { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");

// 5️⃣ Animate bottom contact info
tl.to(".hero-contact", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");

const openBtn = document.getElementById("openGallery");
const lightbox = document.getElementById("lightbox");
const closeBtn = document.querySelector(".close-btn");

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

// Open lightbox
openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gsap.to(lightbox, { 
    autoAlpha: 1, 
    duration: 0.5 
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  gsap.to(lightbox, { 
    autoAlpha: 0, 
    duration: 0.2 
  });
});

// Show slide
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

// Next slide
nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Previous slide
prevBtn.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

const borderTl = gsap.timeline();

// 1️⃣ Animate borders (faster & smooth)
borderTl.fromTo(".left-border",
  { scaleY: 0, transformOrigin: "top" },
  { scaleY: 1, opacity: 1, duration: 1, ease: "power2.out" }
)

.fromTo(".right-border",
  { scaleY: 0, transformOrigin: "bottom" },
  { scaleY: 1, opacity: 1, duration: 1, ease: "power2.out" },
  "-=0.7" // overlap for smooth feel
)

// 2️⃣ Small pause
.to({}, { duration: 0.5 })

// 3️⃣ Hide borders smoothly
.to(".left-border", {
  scaleY: 0,
  transformOrigin: "top",
  duration: 0.5,
  ease: "power2.in"
})
.to(".right-border", {
  scaleY: 0,
  transformOrigin: "bottom",
  duration: 0.5,
  ease: "power2.in"
}, "-=0.4");