/**
 * PLACEMENT KEEPERS PEOPLE PULSE PVT LTD - Interaction Logic & Database Controller
 * Pure Vanilla JS supporting dynamic data rendering via LocalStorage and Google Sheets integrations.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DATA SEEDING & DATABASE MANAGEMENT
  // ==========================================
  
  // Default Company Profile Gallery Seed Data
  const defaultGalleryItems = [];

  // Default Company Profile Blog Seed Data
  const defaultBlogArticles = [];

  // Default Job Openings Data
  const defaultJobOpenings = [];

  // Database Seeding Logic
  const initializeDatabase = () => {
    if (!localStorage.getItem('google_sheets_url')) {
      localStorage.setItem('google_sheets_url', 'https://script.google.com/macros/s/AKfycbw9ArPAa6kEl21qg3ak63E6K5fAe58WvJuGVxngCI9p1ExEDSWSrxLNX6dAamnBBeLO0Q/exec');
    }
    if (!localStorage.getItem('gallery_items')) {
      localStorage.setItem('gallery_items', JSON.stringify(defaultGalleryItems));
    }
    if (!localStorage.getItem('blog_articles')) {
      localStorage.setItem('blog_articles', JSON.stringify(defaultBlogArticles));
    }
    if (!localStorage.getItem('contact_submissions')) {
      localStorage.setItem('contact_submissions', JSON.stringify([]));
    }
    if (!localStorage.getItem('job_openings')) {
      localStorage.setItem('job_openings', JSON.stringify(defaultJobOpenings));
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
      link.addEventListener('click', (e) => {
        // If it's a mobile screen and it is a dropdown trigger, toggle the dropdown accordion instead of closing the menu
        if (window.innerWidth <= 992 && link.classList.contains('dropdown-trigger')) {
          e.preventDefault();
          const parentItem = link.closest('.nav-item');
          if (parentItem) {
            // Toggle active state for this dropdown
            parentItem.classList.toggle('active');
            
            // Close other dropdowns
            document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
              if (item !== parentItem) {
                item.classList.remove('active');
              }
            });
          }
        } else {
          // Normal link clicked: close mobile menu
          menuBtn.classList.remove('active');
          navMenu.classList.remove('active');
        }
      });
    });

    // Close mobile menu when a dropdown-item is clicked
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Collapse all mobile dropdown accordions
        document.querySelectorAll('.nav-item.has-dropdown').forEach(d => {
          d.classList.remove('active');
        });
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
      if (!items || items.length === 0) {
        galleryGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px; color: var(--text-muted);">
            <svg style="width: 48px; height: 48px; margin-bottom: 16px; color: var(--text-muted); opacity: 0.6;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-main);">No gallery items found</h3>
            <p style="font-size: 0.9rem; margin-top: 8px;">Our workspace and event gallery is currently being updated. Please check back later.</p>
          </div>
        `;
        return;
      }
      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gallery-item';
        card.setAttribute('data-category', item.category);
        card.innerHTML = `
          <img src="${item.img || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'}" alt="${item.title}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80';">
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
          if (Array.isArray(remoteGallery)) {
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
      if (!articles || articles.length === 0) {
        blogGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px; color: var(--text-muted);">
            <svg style="width: 48px; height: 48px; margin-bottom: 16px; color: var(--text-muted); opacity: 0.6;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
            <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-main);">No corporate updates found</h3>
            <p style="font-size: 0.9rem; margin-top: 8px;">Our blog and industry insights directory is currently empty. Check back soon for new articles.</p>
          </div>
        `;
        initializeScrollReveals();
        return;
      }
      articles.forEach(article => {
        const card = document.createElement('article');
        card.className = 'blog-card glass-panel reveal reveal-slide-up';
        card.setAttribute('data-id', article.id);
        card.innerHTML = `
          <div class="blog-img-box">
            <img src="${article.img || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'}" alt="${article.title}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80';">
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

        blogModalImg.setAttribute('src', article.img || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80');
        blogModalImg.onerror = () => { blogModalImg.src = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'; };
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
          if (Array.isArray(remoteArticles)) {
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
          <div style="display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap;">
            <a href="industry-details.html?id=${index}" class="spotlight-cta btn btn-primary" style="padding: 12px 24px;">
              View Details
              <svg style="width: 18px; height: 18px; margin-left: 6px; vertical-align: middle;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
            <a href="#contact" class="spotlight-cta btn btn-secondary" style="padding: 12px 24px;">
              Partner with Us
            </a>
          </div>
        </div>
        <a href="industry-details.html?id=${index}" class="spotlight-visual" style="display: block;">
          <img src="${data.img}" alt="${data.title}">
          <span class="spotlight-visual-badge">${data.badge}</span>
        </a>
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
      window.location.href = `industry-details.html?id=${index}`;
    });
  });

  // Initialize
  if (tabItems.length > 0) {
    renderActiveSpotlight(0);
    startSlideShow();
  }



  // ==========================================
  // 13. CAREERS (CURRENT OPENINGS) RENDERER
  // ==========================================
  const jobsGrid = document.getElementById('jobsGrid');
  const jobSearch = document.getElementById('jobSearch');
  const jobLocationFilter = document.getElementById('jobLocationFilter');
  const jobApplyModal = document.getElementById('jobApplyModal');
  const jobApplyModalClose = document.getElementById('jobApplyModalClose');
  const jobModalCloseBtn = document.getElementById('jobModalCloseBtn');

  const renderJobs = () => {
    if (!jobsGrid) return;

    const storedJobs = JSON.parse(localStorage.getItem('job_openings')) || [];
    const activeJobs = storedJobs.filter(job => job.active);

    // Populate Location Dropdown based on active jobs
    const locations = ['all', ...new Set(activeJobs.map(job => job.location))];
    const currentSelectedLocation = jobLocationFilter.value || 'all';
    
    jobLocationFilter.innerHTML = '';
    locations.forEach(loc => {
      const opt = document.createElement('option');
      opt.value = loc;
      opt.textContent = loc === 'all' ? 'All Locations' : loc;
      if (loc === currentSelectedLocation) {
        opt.selected = true;
      }
      jobLocationFilter.appendChild(opt);
    });

    const displayJobs = (filteredJobs) => {
      jobsGrid.innerHTML = '';
      if (filteredJobs.length === 0) {
        jobsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px; color: var(--text-muted);">
            <svg style="width: 48px; height: 48px; margin-bottom: 16px; color: var(--text-muted); opacity: 0.6;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-main);">No active job openings found</h3>
            <p style="font-size: 0.9rem; margin-top: 8px;">Please try modifying your search term or location filter.</p>
          </div>
        `;
        if (typeof initializeScrollReveals === 'function') {
          initializeScrollReveals();
        }
        return;
      }

      filteredJobs.forEach(job => {
        const vacanciesNum = parseInt(job.vacancies, 10) || 1;
        const vacanciesClass = vacanciesNum === 1 ? 'job-vacancies low' : 'job-vacancies';
        const vacanciesText = vacanciesNum === 1 ? '<span>Only 1</span> vacancy left' : `<span>${vacanciesNum}</span> vacancies`;

        const card = document.createElement('div');
        card.className = 'job-card glass-panel reveal reveal-slide-up';
        card.innerHTML = `
          <div class="job-card-header">
            <h3 class="job-title">${job.title}</h3>
            <div class="job-company">
              <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              ${job.company}
            </div>
            <div class="job-location">
              <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              ${job.location}
            </div>
          </div>
          <div class="job-details-pills">
            <span class="job-pill job-pill-primary">${job.experience}</span>
            <span class="job-pill">${job.salary}</span>
          </div>
          <p class="job-desc">${job.description.length > 140 ? job.description.substring(0, 140) + '...' : job.description}</p>
          <div class="job-footer">
            <div class="${vacanciesClass}">
              ${vacanciesText}
            </div>
            <button class="btn btn-primary btn-sm btn-apply-trigger" data-id="${job.id}" style="padding: 10px 18px; font-size: 0.85rem;">View Details</button>
          </div>
        `;
        jobsGrid.appendChild(card);
      });

      // Bind Apply Modal Triggers
      document.querySelectorAll('.btn-apply-trigger').forEach(btn => {
        btn.addEventListener('click', () => {
          const jobId = btn.getAttribute('data-id');
          openJobModal(jobId);
        });
      });

      // Trigger scroll reveals for dynamic elements
      if (typeof initializeScrollReveals === 'function') {
        initializeScrollReveals();
      } else {
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        revealElements.forEach(el => revealObserver.observe(el));
      }
    };

    // Apply Filter Logic
    const filterJobs = () => {
      const searchVal = jobSearch.value.toLowerCase().trim();
      const locVal = jobLocationFilter.value;

      const filtered = activeJobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchVal) ||
                              job.company.toLowerCase().includes(searchVal) ||
                              job.description.toLowerCase().includes(searchVal);
        const matchesLoc = locVal === 'all' || job.location === locVal;
        return matchesSearch && matchesLoc;
      });

      displayJobs(filtered);
    };

    jobSearch.addEventListener('input', filterJobs);
    jobLocationFilter.addEventListener('change', filterJobs);

    // Initial Display
    displayJobs(activeJobs);
  };

  const openJobModal = (jobId) => {
    const storedJobs = JSON.parse(localStorage.getItem('job_openings')) || [];
    const job = storedJobs.find(j => j.id === jobId);
    if (!job) return;

    document.getElementById('jobModalTitle').textContent = job.title;
    document.getElementById('jobModalSubtitle').textContent = `${job.company} • ${job.location}`;
    document.getElementById('jobModalExp').textContent = job.experience;
    document.getElementById('jobModalSalary').textContent = job.salary;
    document.getElementById('jobModalDesc').textContent = job.description;
    document.getElementById('jobModalVacancies').textContent = `${job.vacancies} position(s) available`;
    document.getElementById('jobModalContact').textContent = `Please contact: ${job.contact}`;

    const applyBtn = document.getElementById('jobModalApplyBtn');
    if (job.contact.includes('@')) {
      applyBtn.setAttribute('href', `mailto:${job.contact}?subject=Application for ${encodeURIComponent(job.title)}`);
      applyBtn.textContent = 'Apply Via Email';
      applyBtn.style.display = 'inline-flex';
    } else if (job.contact.startsWith('+') || /^\d+/.test(job.contact)) {
      applyBtn.setAttribute('href', `tel:${job.contact.replace(/\s+/g, '')}`);
      applyBtn.textContent = 'Call Sourcing Team';
      applyBtn.style.display = 'inline-flex';
    } else {
      applyBtn.setAttribute('href', '#contact');
      applyBtn.textContent = 'Contact Us';
    }

    jobApplyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const jobModalClose = () => {
    jobApplyModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (jobApplyModalClose) jobApplyModalClose.addEventListener('click', jobModalClose);
  if (jobModalCloseBtn) jobModalCloseBtn.addEventListener('click', jobModalClose);
  if (jobApplyModal) {
    jobApplyModal.addEventListener('click', (e) => {
      if (e.target === jobApplyModal) jobModalClose();
    });
  }

  // ==========================================
  // 14. Overhauled Services Sidebar Tabs & Slideshow
  // ==========================================
  const servicesData = [
    {
      title: "Permanent Staffing / Direct Hiring",
      desc: "End-to-end recruitment solutions for permanent positions across multiple industries, helping organizations hire qualified and long-term talent.",
      badge: "Direct Placement",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>`
    },
    {
      title: "Contract Staffing & Workforce Support",
      desc: "Flexible staffing solutions for short-term, long-term, and project-based workforce requirements, ensuring operational efficiency and scalability.",
      badge: "Flexible Staffing",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>`
    },
    {
      title: "Bulk & Volume Hiring",
      desc: "Large-scale recruitment support for manufacturing, logistics, retail, automotive, and other industries requiring rapid workforce deployment.",
      badge: "Mass Scale Recruitment",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        <circle cx="19" cy="7" r="2"/>
      </svg>`
    },
    {
      title: "IT Staff Augmentation",
      desc: "Providing skilled IT professionals on demand for project-based assignments, contract roles, and long-term resource requirements.",
      badge: "On-Demand Tech Talent",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
        <line x1="14" y1="4" x2="10" y2="20"/>
      </svg>`
    },
    {
      title: "Payroll & Compliance Management",
      desc: "Comprehensive payroll processing, statutory compliance, employee record management, attendance tracking, and workforce administration.",
      badge: "Corporate HR Support",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 11 11 13 15 9"/>
      </svg>`
    },
    {
      title: "Internship & Placement Services",
      desc: "Connecting fresh graduates and trainees with active corporate slots, helping organizations source young minds and groom them early.",
      badge: "Emerging Talent Grooming",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c0 2 2.5 3.5 6 3.5s6-1.5 6-3.5v-5"/>
      </svg>`
    },
    {
      title: "Campus Recruitment Services",
      desc: "Organizing campus hiring drives, partner university relationships, logistics support, and online test coordination for massive recruitments.",
      badge: "University Collaboration",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c0 2 2.5 3.5 6 3.5s6-1.5 6-3.5v-5"/>
        <line x1="12" y1="22" x2="12" y2="15"/>
      </svg>`
    }
  ];

  const serviceTabItems = document.querySelectorAll('.service-list-item');
  const serviceSpotlightCard = document.getElementById('serviceSpotlightCard');
  let activeServiceIdx = 0;
  let serviceSlideTimer = null;
  const serviceSlideDuration = 5000; // 5 seconds
  let isServicePaused = false;

  const renderActiveServiceSpotlight = (index) => {
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
          <div style="display: flex; gap: 12px; margin-top: 15px; flex-wrap: wrap;">
            <a href="service-details.html?id=${index}" class="service-spotlight-cta btn btn-primary" style="padding: 12px 24px;">
              View Details
              <svg style="width: 18px; height: 18px; margin-left: 6px; vertical-align: middle;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
            <a href="#contact" class="service-spotlight-cta btn btn-secondary" style="padding: 12px 24px;">
              Inquire Now
            </a>
          </div>
        </div>
        <a href="service-details.html?id=${index}" class="spotlight-visual" style="display: block;">
          <img src="${data.img}" alt="${data.title}">
          <span class="spotlight-visual-badge">${data.badge}</span>
        </a>
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
      renderActiveServiceSpotlight(activeServiceIdx);
    }, serviceSlideDuration);
  };

  // Add click listeners to tab buttons (redirect immediately)
  serviceTabItems.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      window.location.href = `service-details.html?id=${index}`;
    });
  });

  // Initialize Services Spotlight
  if (serviceTabItems.length > 0) {
    renderActiveServiceSpotlight(0);
    startServiceSlideShow();
  }

  // ==========================================
  // 15. Dynamic Testimonials Seeding & Renderer
  // ==========================================
  const seedTestimonials = [];

  const initTestimonials = () => {
    let storedTestimonials = localStorage.getItem('testimonials');
    if (!storedTestimonials) {
      localStorage.setItem('testimonials', JSON.stringify(seedTestimonials));
      storedTestimonials = JSON.stringify(seedTestimonials);
    }
    renderTestimonials();
  };

  const renderTestimonials = () => {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;
    
    const stored = JSON.parse(localStorage.getItem('testimonials')) || [];
    const activeTestimonials = stored.filter(t => t.active);
    
    grid.innerHTML = '';
    
    if (activeTestimonials.length === 0) {
      grid.innerHTML = `
        <div style="text-align: center; padding: 60px; color: var(--text-muted); width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <svg style="width: 48px; height: 48px; margin-bottom: 16px; color: var(--text-muted); opacity: 0.6;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-main);">No active testimonials found</h3>
          <p style="font-size: 0.9rem; margin-top: 8px;">We value client feedback. Customer stories and staffing success highlights will be published shortly.</p>
        </div>
      `;
      return;
    }
    
    // Duplicate the active list so it scrolls seamlessly in a loop
    const displayList = [...activeTestimonials, ...activeTestimonials];
    
    displayList.forEach(t => {
      // Get initials
      const names = t.author.split(' ');
      const initials = names.map(n => n.charAt(0)).join('').substring(0, 2).toUpperCase();
      
      // Star rating display
      const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
      
      const card = document.createElement('div');
      card.className = 'testimonial-card';
      card.innerHTML = `
        <div>
          <div class="testimonial-quote-icon">&ldquo;</div>
          <p class="testimonial-text">${t.text}</p>
        </div>
        <div>
          <div class="testimonial-rating" title="${t.rating} Stars">${stars}</div>
          <div class="testimonial-user-info">
            <div class="testimonial-avatar">${initials}</div>
            <div>
              <h4 class="testimonial-author-name">${t.author}</h4>
              <span class="testimonial-author-company">${t.company}</span>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  };

  initTestimonials();

  // Render jobs on load
  renderJobs();

  // Initialize scroll reveals for static page elements on load
  initializeScrollReveals();

  // Listen for storage events (if admin changes jobs in another tab)
  window.addEventListener('storage', (e) => {
    if (e.key === 'job_openings') {
      renderJobs();
    }
    if (e.key === 'testimonials') {
      renderTestimonials();
    }
  });

  // Export renderers to window so admin can call them when refreshing
  window.refreshJobsOnHome = renderJobs;
  window.refreshTestimonialsOnHome = renderTestimonials;

});
