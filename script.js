/**
 * PLACEMENT KEEPERS PEOPLE PULSE PVT LTD - Interaction Logic & Database Controller
 * Pure Vanilla JS supporting dynamic data rendering via LocalStorage and Google Sheets integrations.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DATA SEEDING & DATABASE MANAGEMENT
  // ==========================================
  
  // Default Company Profile Gallery Seed Data
  const defaultGalleryItems = [
    {
      id: "g1",
      title: "Collaborative Workspaces",
      category: "office",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "g2",
      title: "Executive Meetups",
      category: "events",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "g3",
      title: "Talent Sourcing Teams",
      category: "team",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "g4",
      title: "Quality Assurance Standards",
      category: "achievements",
      img: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "g5",
      title: "Tech Recruitment Lounge",
      category: "office",
      img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "g6",
      title: "Corporate Strategy Sessions",
      category: "events",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Default Company Profile Blog Seed Data
  const defaultBlogArticles = [
    {
      id: "1",
      title: "Navigating IT Staffing: Augmentation vs. Direct Hiring",
      category: "IT Insights",
      meta: "Published May 25, 2026 • By Tech Sourcing Team",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      desc: "With tech landscapes moving at rapid speeds, how does your company decide between temporary IT staff augmentation and onboarding permanent software engineering profiles? We analyze costs, scale, flexibility, and onboarding friction parameters to help IT leaders make optimal workforce structuring decisions.",
      content: `
        <p>In the highly dynamic technology ecosystems of 2026, software development leaders face a persistent challenge: balancing rapid deployment timelines with team cost optimization. The decision between temporary IT staff augmentation and standard full-time permanent recruitment is crucial.</p>
        
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin: 24px 0 12px 0; color: var(--primary);">Understanding IT Staff Augmentation</h4>
        <p>IT Staff Augmentation allows organizations to inject specialized technical talent (such as senior cloud engineers, full-stack React developers, or cybersecurity analysts) directly into active internal sprint teams. The candidates remain on the agency's structured payroll, mitigating onboarding compliance liabilities and corporate risk. This model is exceptionally effective for bridging specific project-based gaps, executing temporary product scaling cycles, and accelerating critical sprint deadlines.</p>
        
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin: 24px 0 12px 0; color: var(--primary);">The Merits of Direct Permanent Recruitment</h4>
        <p>Direct hiring focuses on locating, vetting, and onboarding long-term talents into your organization's core workforce culture. While the initial turnaround time is longer (often 3 to 6 weeks) and administrative setup is more intensive, permanent hiring builds critical internal IP, establishes long-term project knowledge bases, and binds candidates strongly to your company's core values.</p>
        
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin: 24px 0 12px 0; color: var(--primary);">Determining the Optimal Path</h4>
        <p>A simple framework for engineering managers is to evaluate two core metrics: <strong>Project Horizon</strong> and <strong>Operational Specialization</strong>.</p>
        <ul>
          <li><strong>Staff Augmentation is best when:</strong> The development cycle is short-term (3 to 9 months), the required skill set is extremely niche (e.g., Rust developers or specialized AI model training experts), or rapid team scaling is required under tight deadlines.</li>
          <li><strong>Direct Hire is best when:</strong> Sourcing key technical leaders, building proprietary core platforms, or scaling standard long-term DevOps and product management teams.</li>
        </ul>
        <p>At Placement Keepers People Pulse, our specialized IT recruiters operate a robust pre-screened database of top technical candidates in Bangalore and nationwide, ensuring we can support either strategic model under exceptionally tight 48-hour matching SLA cycles.</p>
      `
    },
    {
      id: "2",
      title: "Why Bangalore Leads in Automobile & Tech Engineering Sourcing",
      category: "Engineering",
      meta: "Published May 18, 2026 • By Engineering Sourcing Team",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      desc: "Bangalore continues to hold its ground as India's silicon power hub. Our team dives into what is attracting international and local hardware designers, electronic assembly leaders, and R&D automobile tech centers to invest in Karnataka's highly advanced technical workforce.",
      content: `
        <p>Bangalore, Karnataka, has long held the title of India's Silicon Valley. However, in 2026, a significant shift has placed the city at the center of another major industrial revolution: advanced automotive engineering and electronic manufacturing services (EMS) recruitment.</p>
        
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin: 24px 0 12px 0; color: var(--primary);">The Hardware and Software Convergence</h4>
        <p>Modern automobiles are no longer just mechanical systems; they are sophisticated computers on wheels. The rise of electric vehicles (EVs), connected car telematics, advanced driver-assistance systems (ADAS), and sensor arrays has converged mechanical engineering directly with software engineering. Bangalore is uniquely positioned to lead this space due to its density of software developers, firmware experts, and traditional mechanical engineering talent.</p>
        
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin: 24px 0 12px 0; color: var(--primary);">The Role of Local Tech Hubs and Global R&D Centers</h4>
        <p>With hundreds of global research laboratories, international automotive R&D bases, and world-class technical universities (like IISc and multiple national engineering campuses) calling Bangalore home, the local talent ecosystem provides a continuous stream of highly qualified, specialized talent. Sourcing process-level engineers, CAD designers, structural analysts, and EV battery chemists is exceptionally viable in the Karnataka corridor.</p>
        
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin: 24px 0 12px 0; color: var(--primary);">Streamlining Sourcing Challenges</h4>
        <p>Despite the high density of professionals, locating qualified engineering profiles presents complex screening hurdles for companies operating outside of local networks. Navigating specialized skill alignments, salary variables, and competition requires recruitment partners with deep-seated local insights.</p>
        <p>Placement Keepers People Pulse leverages decades of specialized automotive and engineering recruitment experience, bridging the gap between global enterprises and top engineering candidates via structured campus drives and customized direct search methods.</p>
      `
    },
    {
      id: "3",
      title: "Shoring Up Payroll & Compliance in Modern Manufacturing",
      category: "Management",
      meta: "Published May 10, 2026 • By Operations Team",
      img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      desc: "Statutory guidelines, employee welfare, tax filings, and local labour provisions present heavy administrative loads for manufacturing units. Learn how outsourcing global payroll management and third-party contract staffing mitigates risks and guarantees 100% compliant operational cycles.",
      content: `
        <p>In high-capacity manufacturing plants, operational efficiency relies on a reliable and focused workforce. However, managing payroll processing, labor compliance, statutory filings, and tax structures presents a heavy administrative load that can distract leadership from core business goals.</p>
        
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin: 24px 0 12px 0; color: var(--primary);">The Complexities of Industrial Labor Compliance</h4>
        <p>Manufacturing plants operate under complex, heavily scrutinized statutory frameworks. Sourcing staff, tracking shift schedules, ensuring minimum wage adjustments, and managing statutory benefits (like EPF, ESIC, Professional Tax, and gratuity payouts) demand highly dedicated, specialized administrative expertise. Non-compliance can lead to severe regulatory delays, penalties, and operational disruption.</p>
        
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin: 24px 0 12px 0; color: var(--primary);">How Outsourced Payroll & Compliance Mitigates Corporate Risk</h4>
        <p>By outsourcing payroll management and contract staffing to a structured human resource enterprise, manufacturing firms can transfer administrative overhead and compliance liabilities to dedicated professionals. Strategic benefits include:</p>
        <ul>
          <li><strong>Guaranteed Statutory Compliance:</strong> Ensuring all filings, contract records, and benefit disbursements comply with current state and central labor laws.</li>
          <li><strong>Operational Risk Mitigation:</strong> Transferring employment liabilities, workplace safety compliance, and labor relation overheads to the primary agency.</li>
          <li><strong>Streamlined Administrative Cost structures:</strong> Standardizing monthly personnel expenditures into predictable, unified service invoices.</li>
        </ul>
        
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin: 24px 0 12px 0; color: var(--primary);">Focusing on Plant Productivity</h4>
        <p>With administrative burdens removed, factory managers can dedicate resources to process optimization, supply chain integration, quality assurance parameters, and driving overall daily production outputs.</p>
        <p>Placement Keepers People Pulse operates as a fully licensed contract staffing partner, ensuring seamless monthly payroll workflows, thorough statutory adherence, and zero operational friction for major manufacturing divisions in Bangalore and neighboring industrial hubs.</p>
      `
    }
  ];

  // Database Seeding Logic
  const initializeDatabase = () => {
    if (!localStorage.getItem('gallery_items')) {
      localStorage.setItem('gallery_items', JSON.stringify(defaultGalleryItems));
    }
    if (!localStorage.getItem('blog_articles')) {
      localStorage.setItem('blog_articles', JSON.stringify(defaultBlogArticles));
    }
    if (!localStorage.getItem('contact_submissions')) {
      localStorage.setItem('contact_submissions', JSON.stringify([]));
    }
  };
  initializeDatabase();

  // ==========================================
  // 2. THEME SWITCHER (LIGHT / DARK MODE)
  // ==========================================
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const activeTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', activeTheme);
  });

  // ==========================================
  // 3. STICKY HEADER & MOBILE NAV
  // ==========================================
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentActive = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 150)) {
        currentActive = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentActive}`) {
        link.classList.add('active');
      }
    });
  });

  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('nav-menu');

  if (menuBtn && navMenu) {
    const toggleMenu = () => {
      menuBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    };
    menuBtn.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 4. ABOUT US TAB CONTROLLER
  // ==========================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tabPanes.forEach(pane => {
        pane.classList.remove('active');
        if (pane.getAttribute('id') === targetTab) {
          pane.classList.add('active');
        }
      });
    });
  });

  // ==========================================
  // 5. INTERSECTION OBSERVER FOR SCROLL REVEALS
  // ==========================================
  const initializeScrollReveals = () => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -20px 0px'
    });
    revealElements.forEach(el => revealObserver.observe(el));
  };

  // ==========================================
  // 6. DYNAMIC STATS COUNTER UP
  // ==========================================
  const statsSection = document.querySelector('.stats-section');
  const statNumbers = document.querySelectorAll('.stat-number');
  let countersAnimated = false;

  const animateCounters = () => {
    statNumbers.forEach(stat => {
      const targetVal = parseInt(stat.getAttribute('data-target'), 10);
      const suffix = targetVal === 2000 ? '+' : (targetVal === 95 ? '%' : (targetVal === 48 ? ' Hrs' : '+ Years'));
      
      let currentVal = 0;
      const duration = 1500;
      const steps = 60;
      const increment = targetVal / steps;
      const stepTime = duration / steps;

      const counterInterval = setInterval(() => {
        currentVal += increment;
        if (currentVal >= targetVal) {
          stat.textContent = targetVal + suffix;
          clearInterval(counterInterval);
        } else {
          stat.textContent = Math.floor(currentVal) + suffix;
        }
      }, stepTime);
    });
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        animateCounters();
        countersAnimated = true;
      }
    });
  }, { threshold: 0.3 });

  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // ==========================================
  // 7. DYNAMIC RENDERING - GALLERY & LIGHTBOX (SHEETS SYNC)
  // ==========================================
  const galleryGrid = document.querySelector('.gallery-grid');
  
  // Lightbox Selectors
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let activeGalleryList = [];
  let currentImageIdx = 0;

  const renderGallery = () => {
    if (!galleryGrid) return;
    
    const displayGallery = (items) => {
      galleryGrid.innerHTML = '';
      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gallery-item';
        card.setAttribute('data-category', item.category);
        card.innerHTML = `
          <img src="${item.img}" alt="${item.title}" loading="lazy">
          <div class="gallery-overlay">
            <h4 class="gallery-title">${item.title}</h4>
            <span class="gallery-tag">${item.category === 'office' ? 'Office & Culture' : (item.category === 'events' ? 'Corporate Events' : (item.category === 'team' ? 'Team Bonding' : 'Achievements'))}</span>
          </div>
        `;
        galleryGrid.appendChild(card);
      });

      // Initialize Event Listeners on freshly rendered cards
      const galleryItems = document.querySelectorAll('.gallery-item');
      const filterBtns = document.querySelectorAll('.filter-btn');

      // Filter Trigger
      filterBtns.forEach(btn => {
        btn.replaceWith(btn.cloneNode(true)); // Clear previous listeners
      });
      
      const refreshedFilterBtns = document.querySelectorAll('.filter-btn');
      refreshedFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter');
          refreshedFilterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          galleryItems.forEach(item => {
            const itemCat = item.getAttribute('data-category');
            if (filter === 'all' || itemCat === filter) {
              item.style.display = 'block';
              setTimeout(() => item.style.opacity = '1', 50);
            } else {
              item.style.opacity = '0';
              setTimeout(() => item.style.display = 'none', 300);
            }
          });
        });
      });

      // Update active list for carousel
      const updateActiveGalleryList = () => {
        activeGalleryList = [];
        galleryItems.forEach(item => {
          if (item.style.display !== 'none') {
            activeGalleryList.push(item);
          }
        });
      };

      // Open Lightbox callback
      const openLightbox = (idx) => {
        currentImageIdx = idx;
        const activeItem = activeGalleryList[currentImageIdx];
        const imgUrl = activeItem.querySelector('img').getAttribute('src');
        const title = activeItem.querySelector('.gallery-title').textContent;
        const category = activeItem.querySelector('.gallery-tag').textContent;

        lightboxImg.setAttribute('src', imgUrl);
        lightboxTitle.textContent = title;
        lightboxCategory.textContent = category;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      };

      galleryItems.forEach(item => {
        item.addEventListener('click', () => {
          updateActiveGalleryList();
          const idx = activeGalleryList.indexOf(item);
          if (idx !== -1) {
            openLightbox(idx);
          }
        });
      });
    };

    // Check Google Sheets active config
    const googleSheetsUrl = localStorage.getItem('google_sheets_url');

    if (googleSheetsUrl && googleSheetsUrl.trim() !== '') {
      fetch(`${googleSheetsUrl}?action=get_gallery`)
        .then(response => response.json())
        .then(remoteGallery => {
          if (Array.isArray(remoteGallery) && remoteGallery.length > 0) {
            localStorage.setItem('gallery_items', JSON.stringify(remoteGallery));
            displayGallery(remoteGallery);
          } else {
            const localGallery = JSON.parse(localStorage.getItem('gallery_items')) || [];
            displayGallery(localGallery);
          }
        })
        .catch(err => {
          console.warn('Could not fetch remote gallery from Sheet 3. Using local cache:', err);
          const localGallery = JSON.parse(localStorage.getItem('gallery_items')) || [];
          displayGallery(localGallery);
        });
    } else {
      const localGallery = JSON.parse(localStorage.getItem('gallery_items')) || [];
      displayGallery(localGallery);
    }
  };
  renderGallery();

  // Global Lightbox Controls
  if (lightbox) {
    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    const navigateLightbox = (direction) => {
      if (activeGalleryList.length === 0) return;
      if (direction === 'next') {
        currentImageIdx = (currentImageIdx + 1) % activeGalleryList.length;
      } else {
        currentImageIdx = (currentImageIdx - 1 + activeGalleryList.length) % activeGalleryList.length;
      }
      const activeItem = activeGalleryList[currentImageIdx];
      const imgUrl = activeItem.querySelector('img').getAttribute('src');
      const title = activeItem.querySelector('.gallery-title').textContent;
      const category = activeItem.querySelector('.gallery-tag').textContent;

      lightboxImg.setAttribute('src', imgUrl);
      lightboxTitle.textContent = title;
      lightboxCategory.textContent = category;
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', () => navigateLightbox('next'));
    lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    });
  }

  // ==========================================
  // 8. DYNAMIC RENDERING - BLOG INSIGHTS (SHEETS SYNC)
  // ==========================================
  const blogGrid = document.querySelector('.blog-grid');
  
  // Blog Modal Selectors
  const blogModal = document.getElementById('blogModal');
  const blogModalClose = document.getElementById('blogModalClose');
  const blogModalImg = document.getElementById('blogModalImg');
  const blogModalCategory = document.getElementById('blogModalCategory');
  const blogModalTitle = document.getElementById('blogModalTitle');
  const blogModalMeta = document.getElementById('blogModalMeta');
  const blogModalContent = document.getElementById('blogModalContent');

  const renderBlog = () => {
    if (!blogGrid) return;
    
    const displayArticles = (articles) => {
      blogGrid.innerHTML = '';
      articles.forEach(article => {
        const card = document.createElement('article');
        card.className = 'blog-card glass-panel reveal reveal-slide-up';
        card.setAttribute('data-id', article.id);
        card.innerHTML = `
          <div class="blog-img-box">
            <img src="${article.img}" alt="${article.title}" loading="lazy">
            <span class="blog-category-badge">${article.category}</span>
          </div>
          <div class="blog-body">
            <div class="blog-meta">
              <span>${article.meta.split('•')[0] || 'Published Recently'}</span>
              <span>•</span>
              <span>By Sourcing Team</span>
            </div>
            <h3 class="blog-card-title">${article.title}</h3>
            <p class="blog-card-desc">${article.desc}</p>
            <button class="blog-card-btn">
              Read Full Article
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        `;
        blogGrid.appendChild(card);
      });

      // Modal click triggers
      const blogCards = document.querySelectorAll('.blog-card');
      
      const openBlogModal = (articleId) => {
        const storedArticles = JSON.parse(localStorage.getItem('blog_articles')) || [];
        const article = storedArticles.find(a => a.id === articleId);
        if (!article) return;

        blogModalImg.setAttribute('src', article.img);
        blogModalCategory.textContent = article.category;
        blogModalTitle.textContent = article.title;
        blogModalMeta.textContent = article.meta;
        blogModalContent.innerHTML = article.content;

        blogModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      };

      blogCards.forEach(card => {
        const readMoreBtn = card.querySelector('.blog-card-btn');
        const titleLink = card.querySelector('.blog-card-title');
        const articleId = card.getAttribute('data-id');

        const handleOpen = () => openBlogModal(articleId);
        readMoreBtn.addEventListener('click', handleOpen);
        titleLink.addEventListener('click', handleOpen);
      });
      
      initializeScrollReveals();
    };

    // Load URL from localstorage
    const googleSheetsUrl = localStorage.getItem('google_sheets_url');

    if (googleSheetsUrl && googleSheetsUrl.trim() !== '') {
      // Fetch dynamic articles list from Sheet 2 via GET Webhook
      fetch(`${googleSheetsUrl}?action=get_articles`)
        .then(response => response.json())
        .then(remoteArticles => {
          if (Array.isArray(remoteArticles) && remoteArticles.length > 0) {
            localStorage.setItem('blog_articles', JSON.stringify(remoteArticles));
            displayArticles(remoteArticles);
          } else {
            const localArticles = JSON.parse(localStorage.getItem('blog_articles')) || [];
            displayArticles(localArticles);
          }
        })
        .catch(err => {
          console.warn('Could not fetch remote articles from Sheet 2. Using local cache:', err);
          const localArticles = JSON.parse(localStorage.getItem('blog_articles')) || [];
          displayArticles(localArticles);
        });
    } else {
      const localArticles = JSON.parse(localStorage.getItem('blog_articles')) || [];
      displayArticles(localArticles);
    }
  };
  renderBlog();

  // Global Blog Modal Controls
  if (blogModal) {
    const closeBlogModal = () => {
      blogModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    blogModalClose.addEventListener('click', closeBlogModal);
    blogModal.addEventListener('click', (e) => {
      if (e.target === blogModal) closeBlogModal();
    });
  }

  // ==========================================
  // 9. CONTACT FORM VALIDATION & INTEGRATION
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const formToast = document.getElementById('formToast');

  if (contactForm) {
    const setFieldError = (field, message) => {
      let errEl = field.parentNode.querySelector('.form-error-msg');
      if (!errEl) {
        errEl = document.createElement('span');
        errEl.className = 'form-error-msg';
        errEl.style.cssText = 'color: #ef4444; font-size: 0.75rem; font-weight: 500; display: block; margin-top: 4px;';
        field.parentNode.appendChild(errEl);
      }
      errEl.textContent = message;
      field.style.borderColor = '#ef4444';
    };

    const clearFieldError = (field) => {
      const errEl = field.parentNode.querySelector('.form-error-msg');
      if (errEl) errEl.remove();
      field.style.borderColor = '';
    };

    const formInputs = contactForm.querySelectorAll('.form-control');
    formInputs.forEach(input => {
      input.addEventListener('input', () => clearFieldError(input));
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      // Validation
      const nameInput = document.getElementById('formName');
      if (nameInput.value.trim() === '') {
        setFieldError(nameInput, 'Full Name is required.');
        hasError = true;
      } else {
        clearFieldError(nameInput);
      }

      const emailInput = document.getElementById('formEmail');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === '') {
        setFieldError(emailInput, 'Corporate Email is required.');
        hasError = true;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        setFieldError(emailInput, 'Please enter a valid corporate email.');
        hasError = true;
      } else {
        clearFieldError(emailInput);
      }

      const phoneInput = document.getElementById('formPhone');
      const phoneRegex = /^\+?[0-9\s\-()]{10,15}$/;
      if (phoneInput.value.trim() === '') {
        setFieldError(phoneInput, 'Phone Number is required.');
        hasError = true;
      } else if (!phoneRegex.test(phoneInput.value.trim())) {
        setFieldError(phoneInput, 'Please enter a valid phone number (10-15 digits).');
        hasError = true;
      } else {
        clearFieldError(phoneInput);
      }

      const msgInput = document.getElementById('formMsg');
      if (msgInput.value.trim() === '') {
        setFieldError(msgInput, 'Please tell us about your hiring requirements.');
        hasError = true;
      } else {
        clearFieldError(msgInput);
      }

      if (hasError) return;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const origBtnText = submitBtn.innerHTML;

      submitBtn.innerHTML = `
        Sending...
        <svg style="width:20px; height:20px; animation: spin 1s linear infinite;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.9"></path>
        </svg>
      `;
      submitBtn.setAttribute('disabled', 'disabled');

      if (!document.getElementById('spinStyle')) {
        const style = document.createElement('style');
        style.id = 'spinStyle';
        style.innerHTML = '@keyframes spin { 100% { transform: rotate(360deg); } }';
        document.head.appendChild(style);
      }

      // 1. Save locally for Admin dashboard logs
      const submissions = JSON.parse(localStorage.getItem('contact_submissions')) || [];
      const newSubmission = {
        id: "lead_" + Date.now(),
        date: new Date().toLocaleDateString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        service: document.getElementById('formService').value,
        message: msgInput.value.trim()
      };
      submissions.unshift(newSubmission);
      localStorage.setItem('contact_submissions', JSON.stringify(submissions));

      // 2. Dispatch to Google Sheets Webhook with action tag
      const googleSheetsUrl = localStorage.getItem('google_sheets_url');
      let sheetDispatch = Promise.resolve();

      if (googleSheetsUrl && googleSheetsUrl.trim() !== '') {
        sheetDispatch = fetch(googleSheetsUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain'
          },
          body: JSON.stringify({
            action: 'add_lead',
            id: newSubmission.id,
            name: newSubmission.name,
            email: newSubmission.email,
            phone: newSubmission.phone,
            service: newSubmission.service,
            message: newSubmission.message
          })
        }).catch(err => {
          console.error('Google Sheets dispatch failed:', err);
        });
      }

      // Finish dispatch
      sheetDispatch.finally(() => {
        setTimeout(() => {
          submitBtn.innerHTML = origBtnText;
          submitBtn.removeAttribute('disabled');
          contactForm.reset();

          formToast.classList.add('active');
          setTimeout(() => {
            formToast.classList.remove('active');
          }, 5000);
        }, 1200);
      });
    });
  }

  // ==========================================
  // 10. SCROLL TO TOP DYNAMIC BUTTON
  // ==========================================
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================
  // 11. INDUSTRIES TABBED SLIDESHOW CONTROLLER
  // ==========================================
  const industriesData = [
    {
      title: "Manufacturing Industries",
      desc: "Sourcing highly skilled operators, supervisors, quality inspectors, process engineers, and plant managers for automated factories and production units.",
      badge: "ISO 9001 Vetted Talent",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"></path></svg>`
    },
    {
      title: "Automobile Sector",
      desc: "Recruiting expert technical designers, product assembly specialists, tool design experts, mechanics, and maintenance crew for heavy automotive units.",
      badge: "Heavy Tech SLA Matching",
      img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
    },
    {
      title: "Logistics & Transport",
      desc: "Staffing warehouse systems, logistics coordination, fleet operators, material managers, supply chain analysts, and distribution crew.",
      badge: "Supply Chain Precision",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V15a1 1 0 01-1 1h-1m-6 0a2 2 0 002-2h2a2 2 0 002 2m0 0V9a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>`
    },
    {
      title: "Engineering Services",
      desc: "Sourcing precise mechanical, civil, electrical, CAD/CAM drafting, and R&D engineers to support industrial infrastructure development projects.",
      badge: "Core Engineering Domain",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`
    },
    {
      title: "IT & Software Engineering",
      desc: "Placing top-tier developers, system architects, QA engineers, cybersecurity experts, IT support managers, and product owners.",
      badge: "Slick Tech Recruiters",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`
    },
    {
      title: "BPO Services & Sales Support",
      desc: "Staffing call centers, back-office administration, billing departments, technical helpdesks, and customer relationship operations.",
      badge: "Mass Scale Call Centers",
      img: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=800&q=80",
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
    }
  ];

  const tabItems = document.querySelectorAll('.industry-tab-item');
  const spotlightCard = document.getElementById('industrySpotlightCard');
  let activeSlideIdx = 0;
  let slideTimer = null;
  const slideDuration = 5000; // 5 seconds
  let isPaused = false;

  const renderActiveSpotlight = (index) => {
    if (!spotlightCard) return;
    const data = industriesData[index];

    // Fade effect out
    spotlightCard.style.opacity = '0';
    spotlightCard.style.transform = 'translateY(10px) scale(0.98)';

    setTimeout(() => {
      spotlightCard.innerHTML = `
        <div class="spotlight-details">
          <div class="spotlight-icon-box">${data.icon}</div>
          <h3 class="spotlight-title">${data.title}</h3>
          <p class="spotlight-desc">${data.desc}</p>
          <a href="#contact" class="spotlight-cta btn btn-primary" style="padding: 12px 24px;">
            Partner with us
            <svg style="width: 18px; height: 18px; margin-left: 6px; vertical-align: middle;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="spotlight-visual">
          <img src="${data.img}" alt="${data.title}">
          <span class="spotlight-visual-badge">${data.badge}</span>
        </div>
      `;

      // Fade effect in
      spotlightCard.style.opacity = '1';
      spotlightCard.style.transform = 'translateY(0) scale(1)';
    }, 200);

    // Manage tab states
    tabItems.forEach((tab, idx) => {
      const progressBar = tab.querySelector('.timer-progress');
      if (idx === index) {
        tab.classList.add('active');
        if (progressBar) {
          progressBar.style.transition = 'none';
          progressBar.style.width = '0%';
          // Force layout reflow
          void progressBar.offsetWidth;
          
          if (!isPaused) {
            progressBar.style.transition = `width ${slideDuration}ms linear`;
            progressBar.style.width = '100%';
          } else {
            progressBar.style.width = '100%';
          }
        }
      } else {
        tab.classList.remove('active');
        if (progressBar) {
          progressBar.style.transition = 'none';
          progressBar.style.width = '0%';
        }
      }
    });
  };

  const startSlideShow = () => {
    if (isPaused) return;
    if (slideTimer) clearInterval(slideTimer);
    
    slideTimer = setInterval(() => {
      activeSlideIdx = (activeSlideIdx + 1) % industriesData.length;
      renderActiveSpotlight(activeSlideIdx);
    }, slideDuration);
  };

  // Add click listeners to tab buttons
  tabItems.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Clear timers
      if (slideTimer) clearInterval(slideTimer);
      isPaused = true; // Stay on the clicked slide as per user request
      activeSlideIdx = index;
      renderActiveSpotlight(activeSlideIdx);
    });
  });

  // Initialize
  if (tabItems.length > 0) {
    renderActiveSpotlight(0);
    startSlideShow();
  }

  // ==========================================
  // 12. SERVICES SPOTLIGHT CONTROLLER
  // ==========================================
  const servicesData = [
    {
      title: "Permanent Staffing / Direct Hire",
      desc: "End-to-end recruitment solutions to source, screen, and place high-caliber professionals for full-time executive roles within your core organization. Let our recruitment experts handle the full vetting, interviewing, and negotiation cycles.",
      badge: "Full-Time Executive Search",
      cta: "Get Sourcing Info",
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`
    },
    {
      title: "Contract Staffing & Support",
      desc: "Flexible, agile staffing models designed to augment your teams temporarily during project spikes, seasonal demands, or specialized workflows. Mitigate risk and scale personnel dynamically as operations require.",
      badge: "Flexible Staff Augmentation",
      cta: "Explore Flexible Plans",
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`
    },
    {
      title: "Bulk & Volume Hiring",
      desc: "Rapidly build production-ready staff or customer support teams. Perfect for factory launches, industrial expansions, BPO centers, and scale-ups where speed, quantity, and consistent quality are critical.",
      badge: "Mass Scale Placement SLA",
      cta: "Request Mass Pricing",
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`
    },
    {
      title: "IT Staff Augmentation",
      desc: "Plug specialized technical gaps. Get immediate access to software engineering, cloud architecture, system admin, and digital transformation talent. Ensure your sprints stay on track with fully vetted engineers.",
      badge: "IT Talent Delivery SLA",
      cta: "View IT Capabilities",
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`
    },
    {
      title: "Payroll & Compliance Management",
      desc: "Eliminate administrative burdens. We manage structured payroll processing, statutory benefits, tax filings, and full compliance under local laws so your core managers can focus on building products.",
      badge: "100% Audit Proof Operations",
      cta: "Outsource Payroll Setup",
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`
    },
    {
      title: "Internships & Campus Placement",
      desc: "Connecting fresh, highly-trained engineering and business talent with industry-leading corporations, building long-term talent succession lines and nurturing the next generation of business leaders.",
      badge: "Industry Readiness Programs",
      cta: "Campus Partner Program",
      icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`
    }
  ];

  const serviceTabItems = document.querySelectorAll('.service-list-item');
  const serviceSpotlightCard = document.getElementById('serviceSpotlightCard');
  let activeServiceIdx = 0;
  let serviceSlideTimer = null;
  const serviceSlideDuration = 5000; // 5 seconds
  let isServicePaused = false;

  const renderActiveService = (index) => {
    if (!serviceSpotlightCard) return;
    const data = servicesData[index];

    // Fade effect out
    serviceSpotlightCard.style.opacity = '0';
    serviceSpotlightCard.style.transform = 'translateY(10px) scale(0.98)';

    setTimeout(() => {
      serviceSpotlightCard.innerHTML = `
        <div class="service-spotlight-details">
          <div class="service-spotlight-icon-box">${data.icon}</div>
          <h3 class="service-spotlight-title">${data.title}</h3>
          <p class="service-spotlight-desc">${data.desc}</p>
          <a href="#contact" class="service-spotlight-cta btn btn-primary" style="padding: 12px 24px;">
            ${data.cta}
            <svg style="width: 18px; height: 18px; margin-left: 6px; vertical-align: middle;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      `;

      // Fade effect in
      serviceSpotlightCard.style.opacity = '1';
      serviceSpotlightCard.style.transform = 'translateY(0) scale(1)';
    }, 200);

    // Manage tab states
    serviceTabItems.forEach((tab, idx) => {
      const progressBar = tab.querySelector('.timer-progress');
      if (idx === index) {
        tab.classList.add('active');
        if (progressBar) {
          progressBar.style.transition = 'none';
          progressBar.style.width = '0%';
          // Force layout reflow
          void progressBar.offsetWidth;
          
          if (!isServicePaused) {
            progressBar.style.transition = `width ${serviceSlideDuration}ms linear`;
            progressBar.style.width = '100%';
          } else {
            progressBar.style.width = '100%';
          }
        }
      } else {
        tab.classList.remove('active');
        if (progressBar) {
          progressBar.style.transition = 'none';
          progressBar.style.width = '0%';
        }
      }
    });
  };

  const startServiceSlideShow = () => {
    if (isServicePaused) return;
    if (serviceSlideTimer) clearInterval(serviceSlideTimer);
    
    serviceSlideTimer = setInterval(() => {
      activeServiceIdx = (activeServiceIdx + 1) % servicesData.length;
      renderActiveService(activeServiceIdx);
    }, serviceSlideDuration);
  };

  // Add click listeners to tab buttons
  serviceTabItems.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Clear timers
      if (serviceSlideTimer) clearInterval(serviceSlideTimer);
      isServicePaused = true; // Stay on the clicked slide as per user request
      activeServiceIdx = index;
      renderActiveService(activeServiceIdx);
    });
  });

  // Initialize
  if (serviceTabItems.length > 0) {
    renderActiveService(0);
    startServiceSlideShow();
  }

});
