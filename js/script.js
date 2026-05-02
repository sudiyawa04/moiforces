/**
 * MOI FORCES ACADEMY - MAIN JAVASCRIPT
 * Interactive features and functionality
 */

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeHeroBackgroundCleanup();
    initializeHeroSlider();
    initializeAnimatedCounters();
    initializeScrollEffects();
    initializeBackToTop();
    initializeAOS();
    initializeLazyLoading();
});

// ===== HERO BACKGROUND CLEANUP =====
function initializeHeroBackgroundCleanup() {
    const heroSections = document.querySelectorAll('.page-hero[style*="linear-gradient"]');
    heroSections.forEach((heroSection) => {
        const inlineStyle = heroSection.getAttribute('style');
        if (!inlineStyle) return;

        const cleanedStyle = inlineStyle
            .replace(/linear-gradient\([^)]*\)\s*,\s*/gi, '')
            .replace(/,\s*linear-gradient\([^)]*\)/gi, '');

        heroSection.setAttribute('style', cleanedStyle);
    });
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const header = document.getElementById('header');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Sticky header on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.setAttribute('aria-expanded', 
                navMenu.classList.contains('active'));
            
            // Animate hamburger
            const hamburgers = mobileMenuToggle.querySelectorAll('.hamburger');
            hamburgers.forEach((line, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) line.style.transform = 'rotate(45deg) translateY(10px)';
                    if (index === 1) line.style.opacity = '0';
                    if (index === 2) line.style.transform = 'rotate(-45deg) translateY(-10px)';
                } else {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                }
            });
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                const hamburgers = mobileMenuToggle.querySelectorAll('.hamburger');
                hamburgers.forEach(line => {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                });
            }
        }
    });
    
    // Mobile dropdown functionality
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.nav-link');
            link.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu after click
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// ===== HERO SLIDER =====
function initializeHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.querySelector('.slider-control.prev');
    const nextBtn = document.querySelector('.slider-control.next');
    const indicators = document.querySelectorAll('.indicator');
    const SLIDE_DURATION_MS = 9000;
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    function extractBackgroundUrl(slide) {
        const inlineBg = slide.style.backgroundImage || window.getComputedStyle(slide).backgroundImage;
        const matched = inlineBg.match(/url\(["']?(.*?)["']?\)/i);
        return matched ? matched[1] : null;
    }

    function preloadHeroSlideImages() {
        const preloadPromises = [];

        slides.forEach((slide) => {
            const bgUrl = extractBackgroundUrl(slide);
            if (!bgUrl) return;

            preloadPromises.push(new Promise((resolve) => {
                const img = new Image();
                img.decoding = 'async';
                img.loading = 'eager';
                const timeoutId = window.setTimeout(() => resolve(false), 4000);
                img.onload = () => {
                    window.clearTimeout(timeoutId);
                    resolve(true);
                };
                img.onerror = () => {
                    window.clearTimeout(timeoutId);
                    resolve(false);
                };
                img.src = bgUrl;
            }));
        });

        return Promise.allSettled(preloadPromises);
    }
    
    // Show specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.remove('active');
            if (i === index) {
                indicator.classList.add('active');
            }
        });
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    
    let autoPlayInterval;

    function startAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, SLIDE_DURATION_MS);
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoPlay();
        });
    }
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            startAutoPlay();
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            startAutoPlay();
        }
        if (e.key === 'ArrowRight') {
            nextSlide();
            startAutoPlay();
        }
    });

    // Warm hero images to reduce lag when transitioning to later slides.
    preloadHeroSlideImages().finally(() => {
        startAutoPlay();
    });
    
    // Pause on hover
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        
        heroSlider.addEventListener('mouseleave', () => {
            startAutoPlay();
        });
    }
    
    // Pause on visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(autoPlayInterval);
        } else {
            startAutoPlay();
        }
    });
}

// ===== ANIMATED COUNTERS =====
function initializeAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Animation speed
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / speed;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('[data-aos]');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => revealObserver.observe(element));
}

// ===== BACK TO TOP BUTTON =====
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== AOS (Animate On Scroll) INITIALIZATION =====
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        // Force page-hero-content to be visible BEFORE AOS initializes
        const heroContent = document.querySelectorAll('.page-hero-content, .page-hero-content *');
        heroContent.forEach(element => {
            element.setAttribute('data-aos-disable', 'true');
            element.style.opacity = '1';
            element.style.transform = 'none';
            element.style.visibility = 'visible';
        });
        
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            delay: 0,
        });
        
        // Ensure page-hero-content stays visible AFTER AOS initializes
        setTimeout(() => {
            heroContent.forEach(element => {
                element.classList.add('aos-animate');
                element.style.opacity = '1';
                element.style.transform = 'none';
                element.style.visibility = 'visible';
            });
        }, 100);
    }
}

// ===== LAZY LOADING IMAGES =====
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== FORM VALIDATION =====
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            showError(input, 'This field is required');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            showError(input, 'Please enter a valid email address');
            isValid = false;
        } else if (input.type === 'tel' && !isValidPhone(input.value)) {
            showError(input, 'Please enter a valid phone number');
            isValid = false;
        } else {
            clearError(input);
        }
    });
    
    return isValid;
}

function showError(input, message) {
    const formGroup = input.closest('.form-group') || input.parentElement;
    const existingError = formGroup.querySelector('.error-message');
    
    if (existingError) {
        existingError.textContent = message;
    } else {
        const error = document.createElement('span');
        error.className = 'error-message';
        error.textContent = message;
        error.style.color = 'var(--secondary-color)';
        error.style.fontSize = '0.875rem';
        error.style.marginTop = '0.25rem';
        error.style.display = 'block';
        formGroup.appendChild(error);
    }
    
    input.classList.add('error');
}

function clearError(input) {
    const formGroup = input.closest('.form-group') || input.parentElement;
    const error = formGroup.querySelector('.error-message');
    if (error) error.remove();
    input.classList.remove('error');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
}

// ===== CONTACT FORM HANDLING =====
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm(contactForm)) {
            return;
        }
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Collect form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
            // Replace with your actual form submission endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                showNotification('success', 'Thank you! Your message has been sent successfully.');
                contactForm.reset();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            showNotification('error', 'Sorry, there was an error sending your message. Please try again later.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(type, message) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? 'var(--primary-color)' : 'var(--secondary-color)'};
        color: white;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== GALLERY LIGHTBOX =====
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length === 0) return;
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
}

function openLightbox(index) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay"></div>
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close lightbox">
                <i class="fas fa-times"></i>
            </button>
            <button class="lightbox-prev" aria-label="Previous image">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="lightbox-next" aria-label="Next image">
                <i class="fas fa-chevron-right"></i>
            </button>
            <img class="lightbox-image" src="" alt="">
        </div>
    `;
    
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    const close = () => {
        lightbox.remove();
        document.body.style.overflow = '';
    };
    
    lightbox.querySelector('.lightbox-close').addEventListener('click', close);
    lightbox.querySelector('.lightbox-overlay').addEventListener('click', close);
}

// ===== SEARCH FUNCTIONALITY =====
function initializeSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchModal = document.getElementById('searchModal');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');
    
    if (!searchToggle || !searchModal) return;
    
    searchToggle.addEventListener('click', () => {
        searchModal.classList.add('active');
        searchInput.focus();
    });
    
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchModal.classList.remove('active');
        });
    }
    
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
        }
    });
}

// ===== MODAL SYSTEM =====
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== ACCORDION =====
function initializeAccordions() {
    const accordions = document.querySelectorAll('.accordion-header');
    
    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            const isActive = item.classList.contains('active');
            
            // Close all accordions
            document.querySelectorAll('.accordion-item').forEach(acc => {
                acc.classList.remove('active');
                acc.querySelector('.accordion-content').style.maxHeight = null;
            });
            
            // Open clicked accordion if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

// ===== TABS =====
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabGroup = button.closest('.tabs');
            const targetId = button.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabGroup.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            tabGroup.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== UTILITY FUNCTIONS =====
// Smooth scroll to element
function scrollToElement(elementId, offset = 80) {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===== EXPORT FUNCTIONS FOR PAGE-SPECIFIC USE =====
window.MFA = {
    validateForm,
    showNotification,
    openModal,
    closeModal,
    scrollToElement,
    isInViewport
};

// Initialize contact form when available
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeContactForm);
} else {
    initializeContactForm();
}

console.log('MFA Website Initialized Successfully!');
