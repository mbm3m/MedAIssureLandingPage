// Language toggle functionality
const langToggle = document.getElementById('langToggle');
const html = document.documentElement;

// Language content mapping
const translations = {
    ar: {
        title: "MedAI - الموافقات الطبية التأمينية",
        startNow: "ابدأ الآن",
        startSaving: "ابدأ التوفير اليوم",
        heroTitle: "ودّع رفض المطالبات التأمينية!",
        heroText: "ربع المطالبات تُرفض بسبب أخطاء أو احتيال في المستندات. باستخدام التحقق الذكي، قلّل الرفض، ووفّر الوقت، وامنح مرضاك تجربة أفضل.",
        toggleButton: "English",
        
        // Problem Section
        problemTitle: "تحديات شائعة",
        slowApprovals: {
            title: "الموافقات البطيئة",
            text: "ينتظر المرضى لأسابيع لتلقي العلاج بسبب التأخير في الموافقات اليدوية"
        },
        formErrors: {
            title: "أخطاء النماذج",
            text: "أخطاء بسيطة تؤدي إلى رفض المطالبات وإعادة التقديم بشكل متكرر"
        },
        policyComplexity: {
            title: "تعقيد السياسات",
            text: "تغيّر متطلبات التأمين باستمرار، مما يجعل الالتزام بها أمرًا صعبًا"
        },

        // Solution Section
        solutionTitle: "كيف نساعد",
        smartReview: {
            title: "مراجعة ذكية للمستندات",
            text: "تحقق تلقائي من المستندات الطبية في ثوانٍ"
        },
        instantValidation: {
            title: "تحقق فوري من السياسات",
            text: "تحقق من متطلبات التأمين في الوقت الفعلي قبل الإرسال"
        },
        automatedWorkflow: {
            title: "سير عمل مؤتمت",
            text: "توجيه الموافقات إلى الأشخاص المناسبين في الوقت المناسب"
        },

        // Benefits Section
        benefitsTitle: "من نخدم",
        hospitals: {
            title: "للمستشفيات والأطباء",
            benefits: [
                "تقليل التكاليف الإدارية بشكل كبير",
                "الحصول على موافقات علاج أسرع",
                "تقليل وقت الأعمال الورقية"
            ]
        },
        insurance: {
            title: "لشركات التأمين",
            benefits: [
                "تسريع معالجة المطالبات",
                "تقليل أخطاء المعالجة",
                "تحسين العلاقة مع مقدمي الرعاية"
            ]
        },
        patients: {
            title: "للمرضى",
            benefits: [
                "بدء العلاج بشكل أسرع",
                "رفض أقل للمطالبات",
                "تقديرات واضحة للتكاليف"
            ]
        },

        // Contact Form Section
        contactTitle: "ابدأ التوفير اليوم",
        contactSubtitle: "احصل على عرض توضيحي مخصص وحساب للعائد على الاستثمار لمنظمتك",
        formLabels: {
            name: "الاسم الكامل",
            email: "البريد الإلكتروني المهني",
            organization: "اسم المؤسسة",
            role: "اختر دورك",
            roleOptions: {
                executive: "تنفيذي",
                doctor: "طبيب",
                administrator: "مسؤول",
                insurance: "مختص تأمين",
                other: "أخرى"
            },
            message: "حدثنا عن التحديات التي تواجهها"
        },
        submitButton: "اطلب عرضًا توضيحيًا",

        // CTA Section
        ctaTitle: "هل أنت مستعد لتحويل الموافقات التأمينية؟",

        // Footer
        footer: {
            company: "الشركة",
            about: "من نحن",
            careers: "الوظائف",
            contact: "اتصل بنا",
            resources: "الموارد",
            blog: "المدونة",
            docs: "التوثيق",
            support: "الدعم",
            legal: "القانوني",
            privacy: "سياسة الخصوصية",
            terms: "شروط الاستخدام"
        }
    },
    en: {
        title: "MedAI - Medical Insurance Approvals",
        startNow: "Start Now",
        startSaving: "Start Saving Today",
        heroTitle: "Say Goodbye to Insurance Claim Rejections!",
        heroText: "A quarter of claims are rejected due to errors or fraud in documents. Using smart verification, reduce rejections, save time, and give your patients a better experience.",
        toggleButton: "العربية",
        
        // Problem Section
        problemTitle: "Common Challenges",
        slowApprovals: {
            title: "Slow Approvals",
            text: "Patients wait weeks for treatment due to manual approval delays"
        },
        formErrors: {
            title: "Form Errors",
            text: "Simple mistakes lead to claim rejections and repeated submissions"
        },
        policyComplexity: {
            title: "Policy Complexity",
            text: "Insurance requirements constantly change, making compliance difficult"
        },

        // Solution Section
        solutionTitle: "How We Help",
        smartReview: {
            title: "Smart Document Review",
            text: "Automatically verify medical documents in seconds"
        },
        instantValidation: {
            title: "Instant Policy Validation",
            text: "Verify insurance requirements in real-time before submission"
        },
        automatedWorkflow: {
            title: "Automated Workflow",
            text: "Route approvals to the right people at the right time"
        },

        // Benefits Section
        benefitsTitle: "Who We Serve",
        hospitals: {
            title: "For Hospitals & Doctors",
            benefits: [
                "Significantly reduce administrative costs",
                "Get faster treatment approvals",
                "Reduce paperwork time"
            ]
        },
        insurance: {
            title: "For Insurance Companies",
            benefits: [
                "Accelerate claims processing",
                "Reduce processing errors",
                "Improve provider relationships"
            ]
        },
        patients: {
            title: "For Patients",
            benefits: [
                "Start treatment faster",
                "Fewer claim rejections",
                "Clear cost estimates"
            ]
        },

        // Contact Form Section
        contactTitle: "Start Saving Today",
        contactSubtitle: "Get a customized demo and ROI calculation for your organization",
        formLabels: {
            name: "Full Name",
            email: "Professional Email",
            organization: "Organization Name",
            role: "Select Your Role",
            roleOptions: {
                executive: "Executive",
                doctor: "Doctor",
                administrator: "Administrator",
                insurance: "Insurance Specialist",
                other: "Other"
            },
            message: "Tell us about your challenges"
        },
        submitButton: "Request Demo",

        // CTA Section
        ctaTitle: "Ready to Transform Insurance Approvals?",

        // Footer
        footer: {
            company: "Company",
            about: "About Us",
            careers: "Careers",
            contact: "Contact",
            resources: "Resources",
            blog: "Blog",
            docs: "Documentation",
            support: "Support",
            legal: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms of Use"
        }
    }
};

// Function to update content based on language
function updateContent(lang) {
    const t = translations[lang];
    
    // Update basic elements
    document.title = t.title;
    document.querySelector('.nav-links .btn-primary').textContent = t.startNow;
    document.querySelector('.hero h1').textContent = t.heroTitle;
    document.querySelector('.hero p').textContent = t.heroText;
    document.querySelector('.hero .btn-primary').textContent = t.startSaving;
    langToggle.textContent = t.toggleButton;

    // Update Problem Section
    document.querySelector('.problem h2').textContent = t.problemTitle;
    const problemCards = document.querySelectorAll('.problem .card');
    problemCards[0].querySelector('h3').textContent = t.slowApprovals.title;
    problemCards[0].querySelector('p').textContent = t.slowApprovals.text;
    problemCards[1].querySelector('h3').textContent = t.formErrors.title;
    problemCards[1].querySelector('p').textContent = t.formErrors.text;
    problemCards[2].querySelector('h3').textContent = t.policyComplexity.title;
    problemCards[2].querySelector('p').textContent = t.policyComplexity.text;

    // Update Solution Section
    document.querySelector('.solution h2').textContent = t.solutionTitle;
    const solutionFeatures = document.querySelectorAll('.solution .feature');
    solutionFeatures[0].querySelector('h3').textContent = t.smartReview.title;
    solutionFeatures[0].querySelector('p').textContent = t.smartReview.text;
    solutionFeatures[1].querySelector('h3').textContent = t.instantValidation.title;
    solutionFeatures[1].querySelector('p').textContent = t.instantValidation.text;
    solutionFeatures[2].querySelector('h3').textContent = t.automatedWorkflow.title;
    solutionFeatures[2].querySelector('p').textContent = t.automatedWorkflow.text;

    // Update Benefits Section
    document.querySelector('.benefits h2').textContent = t.benefitsTitle;
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards[0].querySelector('h3').textContent = t.hospitals.title;
    benefitCards[1].querySelector('h3').textContent = t.insurance.title;
    benefitCards[2].querySelector('h3').textContent = t.patients.title;
    
    // Update benefit lists
    const hospitalBenefits = benefitCards[0].querySelectorAll('li');
    const insuranceBenefits = benefitCards[1].querySelectorAll('li');
    const patientBenefits = benefitCards[2].querySelectorAll('li');
    
    t.hospitals.benefits.forEach((benefit, i) => {
        hospitalBenefits[i].textContent = benefit;
    });
    t.insurance.benefits.forEach((benefit, i) => {
        insuranceBenefits[i].textContent = benefit;
    });
    t.patients.benefits.forEach((benefit, i) => {
        patientBenefits[i].textContent = benefit;
    });

    // Update Contact Form Section
    document.querySelector('.contact-form h2').textContent = t.contactTitle;
    document.querySelector('.contact-form p').textContent = t.contactSubtitle;
    
    // Update form labels and placeholders
    const form = document.getElementById('demo-form');
    form.querySelector('#name').placeholder = t.formLabels.name;
    form.querySelector('#email').placeholder = t.formLabels.email;
    form.querySelector('#organization').placeholder = t.formLabels.organization;
    form.querySelector('#role').placeholder = t.formLabels.role;
    form.querySelector('#message').placeholder = t.formLabels.message;
    
    // Update role options
    const roleSelect = form.querySelector('#role');
    roleSelect.innerHTML = `
        <option value="">${t.formLabels.role}</option>
        <option value="executive">${t.formLabels.roleOptions.executive}</option>
        <option value="doctor">${t.formLabels.roleOptions.doctor}</option>
        <option value="administrator">${t.formLabels.roleOptions.administrator}</option>
        <option value="insurance">${t.formLabels.roleOptions.insurance}</option>
        <option value="other">${t.formLabels.roleOptions.other}</option>
    `;
    
    form.querySelector('button[type="submit"]').textContent = t.submitButton;

    // Update CTA Section
    document.querySelector('.cta h2').textContent = t.ctaTitle;

    // Update Footer
    const footerColumns = document.querySelectorAll('.footer-column');
    footerColumns[0].querySelector('h4').textContent = t.footer.company;
    footerColumns[0].querySelectorAll('a')[0].textContent = t.footer.about;
    footerColumns[0].querySelectorAll('a')[1].textContent = t.footer.careers;
    footerColumns[0].querySelectorAll('a')[2].textContent = t.footer.contact;
    
    footerColumns[1].querySelector('h4').textContent = t.footer.resources;
    footerColumns[1].querySelectorAll('a')[0].textContent = t.footer.blog;
    footerColumns[1].querySelectorAll('a')[1].textContent = t.footer.docs;
    footerColumns[1].querySelectorAll('a')[2].textContent = t.footer.support;
    
    footerColumns[2].querySelector('h4').textContent = t.footer.legal;
    footerColumns[2].querySelectorAll('a')[0].textContent = t.footer.privacy;
    footerColumns[2].querySelectorAll('a')[1].textContent = t.footer.terms;
}

// Toggle language
langToggle.addEventListener('click', () => {
    const currentLang = html.getAttribute('data-lang');
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    
    html.setAttribute('data-lang', newLang);
    html.setAttribute('lang', newLang);
    html.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    
    updateContent(newLang);
});

// Initialize content
updateContent('ar');

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

// Enhanced animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // When element comes into view (with offset)
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

// Initialize animation classes
const initializeAnimations = () => {
    // Add animation classes to elements
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    const problemCards = document.querySelectorAll('.problem .card');
    const solutionFeatures = document.querySelectorAll('.solution .feature');
    const solutionImage = document.querySelector('.solution-image');
    const benefitCards = document.querySelectorAll('.benefits .benefit-card');
    const formContainer = document.querySelector('.form-container');
    const ctaSection = document.querySelector('.cta');

    // Hero section (immediate animation)
    if (heroContent) {
        heroContent.classList.add('animate-on-scroll', 'slide-in-left');
        heroContent.classList.add('animate'); // Immediate animation
    }
    if (heroImage) {
        heroImage.classList.add('animate-on-scroll', 'slide-in-right');
        heroImage.classList.add('animate'); // Immediate animation
    }

    // Problem cards (staggered animation)
    problemCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll', 'fade-in-up');
        card.style.transitionDelay = `${index * 0.2}s`;
    });

    // Solution features (staggered animation)
    solutionFeatures.forEach((feature, index) => {
        feature.classList.add('animate-on-scroll', 'fade-in-left');
        feature.style.transitionDelay = `${index * 0.2}s`;
    });

    // Solution image
    if (solutionImage) {
        solutionImage.classList.add('animate-on-scroll', 'fade-in-right');
    }

    // Benefit cards (staggered animation)
    benefitCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll', 'fade-in-up');
        card.style.transitionDelay = `${index * 0.2}s`;
    });

    // Form container
    if (formContainer) {
        formContainer.classList.add('animate-on-scroll', 'fade-in-up');
    }

    // CTA section
    if (ctaSection) {
        ctaSection.classList.add('animate-on-scroll', 'fade-in-up');
    }
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAnimations);

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial check for elements in view
animateOnScroll(); 