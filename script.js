// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll event listener for header shadow
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else if (currentScroll > lastScroll) {
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Form submission handling
const demoForm = document.getElementById('demo-form');
if (demoForm) {
    demoForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(demoForm);
        const data = Object.fromEntries(formData);
        
        // Get submit button
        const submitButton = demoForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        try {
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Send data to server
            const response = await fetch('http://localhost:3000/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            // Show success state
            submitButton.textContent = 'Request Sent!';
            submitButton.classList.add('success');
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success-message';
            successMessage.innerHTML = `
                <div class="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>We've received your request and will contact you within 24 hours.</p>
                <p>Please check your email for confirmation.</p>
            `;
            demoForm.appendChild(successMessage);
            
            // Reset form after delay
            setTimeout(() => {
                demoForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                submitButton.classList.remove('success');
                successMessage.remove();
            }, 5000);
            
        } catch (error) {
            console.error('Error:', error);
            
            // Show error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'form-error-message';
            errorMessage.innerHTML = `
                <div class="error-icon">!</div>
                <h3>Oops!</h3>
                <p>Something went wrong. Please try again or contact us directly.</p>
            `;
            demoForm.appendChild(errorMessage);
            
            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
            
            // Remove error message after delay
            setTimeout(() => {
                errorMessage.remove();
            }, 5000);
        }
    });
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .feature, .benefit-card, .form-container');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Add initial styles for animation
document.querySelectorAll('.card, .feature, .benefit-card, .form-container').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
// Initial check for elements in view
animateOnScroll(); 