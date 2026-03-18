/**
 * Project Details Script
 * Purpose: Dynamically load content for a single property based on the URL ID parameter.
 */

document.addEventListener('DOMContentLoaded', () => {

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

    /* --- Dynamic Project Rendering --- */
    const container = document.getElementById('project-detail-container');
    
    // Parse URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));

    if (!projectId || typeof allProjects === 'undefined') {
        container.innerHTML = `
            <div style="height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
                <h2>Project Not Found</h2>
                <p style="margin: 20px 0;">We couldn't locate the property you're looking for.</p>
                <a href="projects.html" class="btn btn-primary">Back to Projects</a>
            </div>
        `;
        return;
    }

    const project = allProjects.find(p => p.id === projectId);

    if (project) {
        document.title = `${project.name} - Govind Krupa`;
        
        container.innerHTML = `
            <!-- Large Hero Banner without Text Overlay -->
            <div style="width: 100%; height: 50vh; position: relative; overflow: hidden; background: #000;">
                ${project.video ? `
                    <video src="${project.video}" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>
                ` : `
                    <img src="${project.image}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover;">
                `}
            </div>

            <!-- Detail Layout -->
            <div class="container" style="margin-top: 40px; margin-bottom: 80px;">
                <div style="margin-bottom: 40px;">
                    <span class="property-badge" style="position: static; display: inline-block; margin-bottom: 10px; background-color: var(--primary); color: white; padding: 5px 15px; border-radius: 20px; font-weight: 600;">${project.propertyType || 'Property'}</span>
                    <h1 class="project-detail-title">${project.name}</h1>
                    <p style="color: #000; font-size: 1.2rem;"><i class="fas fa-map-marker-alt text-orange"></i> ${project.location}</p>
                </div>

                <div class="project-detail-layout">
                    <!-- Left: Description -->
                    <div class="project-description">
                        <h2 style="margin-bottom: 20px; font-size: 2rem;">Overview</h2>
                        <p style="font-size: 1.1rem; line-height: 1.8; color: #555;">${project.fullDescription || project.description}</p>
                        
                        <h3 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.5rem;">Key Amenities</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                            ${project.amenities.map(a => `
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <i class="fas fa-check-circle text-orange" style="font-size: 1.2rem;"></i>
                                    <span style="font-size: 1.1rem; color: #444;">${a}</span>
                                </div>
                            `).join('')}
                        </div>

                        ${project.nearbyLocations && project.nearbyLocations.length > 0 ? `
                        <h3 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.5rem;">Nearby Locations</h3>
                        <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                            ${project.nearbyLocations.map(loc => `
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <i class="fas fa-location-arrow text-orange" style="font-size: 1.2rem;"></i>
                                    <span style="font-size: 1.1rem; color: #444;">${loc}</span>
                                </div>
                            `).join('')}
                        </div>
                        ` : ''}
                    </div>

                    <!-- Right: Info Card -->
                    <div class="project-sidebar">
                        <div style="background: var(--light-bg); padding: 30px; border-radius: var(--radius); position: sticky; top: 100px;">
                            <h3 style="margin-bottom: 15px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Property Details</h3>
                            <div style="margin-bottom: 20px;">
                                <p style="color: #666; font-size: 0.9rem;">Price Range</p>
                                <p class="text-orange" style="font-size: 1.5rem; font-weight: 700;">${project.price}</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p style="color: #666; font-size: 0.9rem;">Property Type</p>
                                <p style="font-size: 1.1rem; font-weight: 600;">${project.propertyType}</p>
                            </div>
                            ${project.rera ? `
                            <div style="margin-bottom: 20px;">
                                <p style="color: #666; font-size: 0.9rem;">RERA No.</p>
                                <p style="font-size: 1.1rem; font-weight: 600;">${project.rera}</p>
                            </div>
                            ` : ''}
                            <div style="margin-bottom: 30px;">
                                <p style="color: #666; font-size: 0.9rem;">Status</p>
                                <p style="font-size: 1.1rem; font-weight: 600; color: #2e7d32;">${project.status || 'Available to Book'}</p>
                            </div>
                            <a href="https://wa.me/919545560674?text=${encodeURIComponent(`Hello!\n\nI’m interested in getting more details about the property I selected on your website.\n\n*Property Name/Location:* ${project.name} / ${project.location}\n*Configuration:* ${project.propertyType}\n\nPlease share complete details including price, amenities, location benefits, and availability.\n\nLooking forward to your response.\nThank you!`)}" target="_blank" class="btn btn-primary" style="display: flex; align-items: center; justify-content: center; gap: 10px;"><i class="fab fa-whatsapp" style="font-size: 1.2rem;"></i> WhatsApp Agent</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div style="height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
                <h2>Project Not Found</h2>
                <a href="projects.html" class="btn btn-primary" style="margin-top: 20px;">Back to Projects</a>
            </div>
        `;
    }

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
                    alert(`Thank you, ${name}! Your inquiry for ${project ? project.name : 'this property'} has been received. Our executive will call you at ${phone}.`);
                    contactForm.reset();
                    submitBtn.innerText = 'Book a Site Visit';
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
    }

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
