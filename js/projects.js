/**
 * Projects Page Script
 * Purpose: Render Indian real estate listings and handle interactions.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Data is now loaded globally from data.js --- */

    /* --- Mobile Menu & Sticky Header (Reused logic) --- */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }

    /* --- Render Projects Grid --- */
    const fullProjectGrid = document.getElementById('full-project-grid');

    if (fullProjectGrid) {
        if (typeof allProjects !== 'undefined') {
            fullProjectGrid.innerHTML = allProjects.map(project => `
                <div class="project-card reveal" style="transform: translateY(30px); opacity: 0;" onclick="window.location.href='project-details.html?id=${project.id}'">
                    <div class="project-img">
                        <span class="property-badge">${project.propertyType}</span>
                        <img src="${project.image}" alt="${project.name}" loading="lazy">
                    </div>
                    <div class="project-info">
                        <p class="project-price">${project.price}</p>
                        <h3 class="project-name">${project.name}</h3>
                        <p class="project-loc"><i class="fas fa-map-marker-alt text-orange"></i> ${project.location}</p>
                        <p class="project-desc">${project.description}</p>
                        <button class="btn btn-outline" style="padding: 8px 20px; font-size: 0.85rem; width: 100%;">View Details</button>
                    </div>
                </div>
            `).join('');
        }
    }

    /* --- Modal Logic Removed --- */

    /* --- Form Validation --- */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            
            if (name && phone) {
                const submitBtn = contactForm.querySelector('button');
                submitBtn.innerText = 'Booking...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    alert(`Thank you, ${name}! Your site visit request has been received. Our executive will call you at ${phone} to confirm the schedule.`);
                    contactForm.reset();
                    submitBtn.innerText = 'Book a Site Visit';
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
    }

    /* --- Scroll Reveal Animation --- */
    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        reveals.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener('scroll', revealElements);
    setTimeout(revealElements, 100); // Initial check after a slight delay to ensure DOM paints

    /* --- Back to Top --- */
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
