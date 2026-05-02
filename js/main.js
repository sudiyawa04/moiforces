// Main JavaScript for MOI Forces Academy Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initAnimations();
    initCounters();
    initContactForm();
    initBackToTop();
    initMobileMenu();
    initSmoothScrolling();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) {
        return;
    }

    const updateNavbarState = function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    updateNavbarState();
    window.addEventListener('scroll', updateNavbarState);
}

// Scroll effects and animations
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.stat-item, .program-card, .facility-item, .news-card');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize animations
function initAnimations() {
    // Add custom animation classes
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.8s ease forwards;
        }
        
        .stat-item, .program-card, .facility-item, .news-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }
        
        .stat-item.animate-in, .program-card.animate-in, 
        .facility-item.animate-in, .news-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Counter animation for statistics
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let count = 0;
                const increment = target / speed;

                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        counter.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCount();
                observer.unobserve(counter);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (validateContactForm(data)) {
                // Show loading state
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.innerHTML = '<span class="loading"></span> Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission (replace with actual implementation)
                setTimeout(() => {
                    showNotification('Message sent successfully!', 'success');
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
}

// Form validation
function validateContactForm(data) {
    let isValid = true;
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            showFieldError(input, 'This field is required');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            showFieldError(input, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearFieldError(input);
        }
    });
    
    return isValid;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show field error
function showFieldError(field, message) {
    field.classList.add('is-invalid');
    let errorDiv = field.nextElementSibling;
    
    if (!errorDiv || !errorDiv.classList.contains('invalid-feedback')) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback';
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    }
    
    errorDiv.textContent = message;
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('is-invalid');
    const errorDiv = field.nextElementSibling;
    
    if (errorDiv && errorDiv.classList.contains('invalid-feedback')) {
        errorDiv.remove();
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed`;
    notification.style.cssText = `
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideInRight 0.5s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 5000);
    
    // Add notification animations
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Back to top button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility functions
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

// Add scroll spy functionality
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    
    const observerOptions = {
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section link
                const currentLink = document.querySelector(`.navbar-nav .nav-link[href="#${targetId}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// Initialize scroll spy after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollSpy();
});

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Search functionality (if search is added)
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput && searchResults) {
        const debouncedSearch = debounce(performSearch, 300);
        
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            if (query.length > 2) {
                debouncedSearch(query);
            } else {
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
            }
        });
    }
}

function performSearch(query) {
    // Implement search functionality here
    // This could search through page content, news articles, etc.
    console.log('Searching for:', query);
}

// Theme toggle (if dark mode is added)
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Print functionality
function initPrint() {
    const printButtons = document.querySelectorAll('.print-btn');
    
    printButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            window.print();
        });
    });
}

// Cookie consent (if needed)
function initCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');
    
    if (cookieConsent && acceptCookies) {
        if (!localStorage.getItem('cookiesAccepted')) {
            cookieConsent.style.display = 'block';
        }
        
        acceptCookies.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.style.display = 'none';
        });
    }
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Monitor page load time
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Log errors to analytics service if needed
});

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    initSearch();
    initThemeToggle();
    initPrint();
    initCookieConsent();
    initPerformanceMonitoring();
});
