// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 50;
  navbar.classList.toggle('scrolled', scrolled);
  backToTop.classList.toggle('visible', window.scrollY > 400);
});

// ===== Mobile Menu Toggle =====
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
  mobileToggle.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Close mobile menu when clicking a link
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileToggle.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

// ===== Mobile Dropdown Toggle =====
document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
  dropdown.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    }
  });
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ===== Scroll Animations =====
function initScrollAnimations() {
  const elements = document.querySelectorAll(
    '.card, .product-card, .timeline-item, .info-card, .foreign-card, .about-card, .section-grid, .fee-table-wrapper'
  );

  elements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

initScrollAnimations();

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Please fill in all required fields.';
    formStatus.className = 'form-status error';
    return;
  }

  // Simulate form submission
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  setTimeout(() => {
    formStatus.textContent = 'Thank you! Your message has been sent. We will get back to you shortly.';
    formStatus.className = 'form-status success';
    contactForm.reset();
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';

    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }, 5000);
  }, 1500);
});

// ===== Product Detail Modals =====
const modalData = {
  skincare: {
    title: 'Skincare Products',
    desc: 'We help you register all types of skincare products with NPRA Malaysia. Our expert team handles the entire notification process so you can focus on your business.',
    products: [
      'Moisturisers &amp; hydrating creams',
      'Face serums &amp; essences',
      'Sunscreens &amp; UV protection',
      'Facial cleansers &amp; face wash',
      'Toners &amp; micellar water',
      'Anti-aging &amp; whitening creams',
      'Eye creams &amp; under-eye treatments',
      'Face masks &amp; peeling products',
      'Acne treatment creams &amp; gels',
      'Lip balms &amp; lip care'
    ],
    docs: [
      'Product formulation &amp; ingredient list (INCI names)',
      'Certificate of Analysis (COA)',
      'GMP / ISO 22716 certificate from manufacturer',
      'Product label design (front &amp; back)',
      'Safety assessment report',
      'Company registration documents (SSM)'
    ]
  },
  haircare: {
    title: 'Haircare Products',
    desc: 'From shampoos to hair colouring products, we handle NPRA registration for all haircare items. Fast approval with our experienced team.',
    products: [
      'Shampoos &amp; conditioners',
      'Hair treatment masks &amp; serums',
      'Hair oils &amp; leave-in treatments',
      'Hair colouring &amp; dye products',
      'Hair styling gels, wax &amp; sprays',
      'Anti-dandruff treatments',
      'Hair growth &amp; scalp treatments',
      'Hair straightening &amp; perm products',
      'Dry shampoos',
      'Hair perfumes &amp; mists'
    ],
    docs: [
      'Product formulation &amp; ingredient list (INCI names)',
      'Certificate of Analysis (COA)',
      'GMP / ISO 22716 certificate from manufacturer',
      'Product label design (front &amp; back)',
      'Safety assessment report',
      'Company registration documents (SSM)'
    ]
  },
  colour: {
    title: 'Cosmetics',
    desc: 'We register all types of cosmetics and makeup products with NPRA. Professional handling from application to approval.',
    products: [
      'Foundations &amp; BB/CC creams',
      'Face powders &amp; setting sprays',
      'Blushers &amp; bronzers',
      'Lipsticks, lip glosses &amp; lip liners',
      'Eye shadows &amp; eye liners',
      'Mascaras &amp; false lashes (with glue)',
      'Nail polish &amp; nail care products',
      'Concealers &amp; primers',
      'Highlighters &amp; contour kits',
      'Makeup removers'
    ],
    docs: [
      'Product formulation &amp; ingredient list (INCI names)',
      'Certificate of Analysis (COA)',
      'GMP / ISO 22716 certificate from manufacturer',
      'Product label design (front &amp; back)',
      'Heavy metals &amp; microbiology test report',
      'Company registration documents (SSM)'
    ]
  },
  personal: {
    title: 'Personal Care Products',
    desc: 'We handle NPRA registration for all personal care and hygiene products. Get your products to market quickly with our expert service.',
    products: [
      'Perfumes &amp; fragrances (EDT, EDP)',
      'Deodorants &amp; antiperspirants',
      'Body lotions &amp; body butters',
      'Shower gels &amp; body wash',
      'Bath salts &amp; bath bombs',
      'Hand creams &amp; hand sanitisers',
      'Toothpaste &amp; mouthwash',
      'Baby care products (lotion, shampoo)',
      'Intimate care products',
      'Foot care creams &amp; sprays'
    ],
    docs: [
      'Product formulation &amp; ingredient list (INCI names)',
      'Certificate of Analysis (COA)',
      'GMP / ISO 22716 certificate from manufacturer',
      'Product label design (front &amp; back)',
      'Safety assessment report',
      'Company registration documents (SSM)'
    ]
  }
};

function openModal(type) {
  const data = modalData[type];
  if (!data) return;

  const productsHTML = data.products.map(p => `<li><i class="fas fa-check-circle"></i> ${p}</li>`).join('');
  const docsHTML = data.docs.map(d => `<li><i class="fas fa-file-alt"></i> ${d}</li>`).join('');

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-header">
      <h2>${data.title}</h2>
      <p>NPRA Cosmetic Registration Service</p>
    </div>
    <div class="modal-body">
      <p>${data.desc}</p>
      <div class="modal-info">
        <div class="modal-info-item">
          <span class="label">Consultant Fee</span>
          <span class="value">RM 800</span>
        </div>
        <div class="modal-info-item">
          <span class="label">NPRA Fee</span>
          <span class="value">RM 50</span>
        </div>
        <div class="modal-info-item">
          <span class="label">Processing</span>
          <span class="value">FAST</span>
        </div>
      </div>
      <h3><i class="fas fa-list" style="margin-right:8px;color:var(--primary)"></i>Products We Register</h3>
      <ul class="modal-list">${productsHTML}</ul>
      <h3><i class="fas fa-folder-open" style="margin-right:8px;color:var(--accent)"></i>Documents Required</h3>
      <ul class="modal-list">${docsHTML}</ul>
    </div>
    <div class="modal-footer">
      <a href="#contact" class="btn btn-primary" onclick="closeModal()"><i class="fas fa-paper-plane"></i> Get Free Consultation</a>
      <a href="https://wa.me/60102062070?text=Hi%20AA%20Alive%2C%20I%27m%20interested%20in%20NPRA%20Cosmetic%20Registration.%0A%0APlease%20select%20a%20service%3A%0A1%EF%B8%8F%E2%83%A3%20New%20Cosmetic%20Product%20Registration%0A2%EF%B8%8F%E2%83%A3%20Registration%20Renewal%0A3%EF%B8%8F%E2%83%A3%20Product%20Variation%0A4%EF%B8%8F%E2%83%A3%20Other%0A%0APlease%20reply%20with%20your%20choice%20(1-4)." class="btn btn-outline" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== Smooth scroll for all anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
