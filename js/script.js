/**
 * Real Estate Website Script
 * Purpose: UI Interactions, Dynamic Content, and Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Project Data (Imported from data.js) --- */
    const projects = typeof allProjects !== 'undefined' ? allProjects.slice(0, 3) : [];

    /* --- Sticky Header --- */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });

    /* --- Mobile Menu --- */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    /* --- Render Projects --- */
    const projectGrid = document.getElementById('project-grid');

    const renderProjects = () => {
        projectGrid.innerHTML = projects.map(project => `
            <div class="project-card reveal" onclick="window.location.href='project-details.html?id=${project.id}'">
                <div class="project-img">
                    <img src="${project.image}" alt="${project.name}">
                </div>
                <div class="project-info">
                    <p class="project-price">${project.price}</p>
                    <h3 class="project-name">${project.name}</h3>
                    <p class="project-loc"><i class="fas fa-map-marker-alt"></i> ${project.location}</p>
                    <p class="project-desc">${project.description}</p>
                    <button class="btn btn-outline" style="padding: 8px 20px; font-size: 0.85rem;">View Details</button>
                </div>
            </div>
        `).join('');
    };

    renderProjects();

    /* --- Modal Logic Removed --- */

    /* --- Form Validation --- */
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation (mostly handled by HTML5 required, but for JS feedback)
        if (name && email && message) {
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Mock submission feedback
            const submitBtn = contactForm.querySelector('button');
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Thank you, ${name}! Your message has been sent. We will contact you soon.`);
                contactForm.reset();
                submitBtn.innerText = 'Send Message';
                submitBtn.disabled = false;
            }, 1500);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    /* --- Scroll Reveal Animation --- */
    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        reveals.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealElements);
    revealElements(); // Initial check

    /* --- Back to Top --- */
    const backToTopBtn = document.getElementById('back-to-top');

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

});
