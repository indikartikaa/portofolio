// ── 1. PROJECT DATA ──────────────────────────────────────────
const projectsData = {
  'proj-greasycle-web': {
    title: 'Greasycle — Digital Platform for Used Cooking Oil',
    desc: 'A circular economy platform to manage used cooking oil waste into biofuel, featuring a pickup scheduling and incentive system.',
    tech: ['PHP MVC', 'Tailwind', 'MySQL'],
    role: 'Full Stack Developer',
    duration: '3 Months',
    image: 'images/pemweb.jpg',
    linkLabel: 'View GitHub',
    linkUrl: 'https://github.com/indikartikaa/greasycle-laravel', 
    link2Label: 'View Project',
    link2Url: 'https://greasycle.site.je/',
    background: 'Many people still improperly dispose of used cooking oil, negatively impacting the environment. Greasycle was developed as a digital solution to support the circular economy by connecting the community with waste collectors in an efficient, integrated platform.',
    contributions: [
      'Analyzed system functional & non-functional requirements',
      'Designed database structure and system workflow',
      'Built the backend architecture using PHP MVC',
      'Designed responsive interfaces using HTML, Tailwind CSS, and JavaScript',
      'Developed multi-role dashboards (Admin, User, Collector) and waste transaction management'
    ]
  },
  'proj-bekalmu': {
    title: 'Bekalmu — POS & Inventory System',
    desc: 'An Android-based Point of Sales application designed to help MSMEs digitalize their sales transactions and daily operations.',
    tech: ['Android Studio', 'Kotlin', 'SQLite'],
    role: 'Mobile Developer',
    duration: 'June 2026',
    image: 'images/pemmob.jpg',
    linkLabel: 'View GitHub',
    linkUrl: '#',
    background: 'The "Bekalmu" MSME required a digital solution to streamline transactions and product management. Before development, in-depth interviews were conducted with the business owner to accurately translate business problems into technical requirements.',
    contributions: [
      'Conducted requirement gathering and direct user interviews',
      'Analyzed the current business processes',
      'Designed database architecture and UI prototypes',
      'Developed a native Android application using Java/Kotlin',
      'Implemented POS transaction and inventory management modules'
    ]
  },
  'proj-kangbubur': {
    title: 'Kang Bubur — Desktop Cashier',
    desc: 'A desktop cashier application developed to handle high-volume daily transactions and automatically generate sales reports.',
    tech: ['VB.NET', 'MySQL', 'Crystal Report'],
    role: 'Desktop App Developer',
    duration: 'Academic Project',
    image: 'images/pemdesk.jpg',
    linkLabel: 'View GitHub',
    linkUrl: '#',
    background: 'The "Kang Bubur" culinary business faced challenges in recording fast-paced daily transactions and generating accurate sales reports manually, thus requiring a robust desktop POS solution.',
    contributions: [
      'Designed Entity Relationship Diagrams (ERD) and UML models',
      'Built the backend logic and graphical interface using VB.NET and MySQL',
      'Implemented CRUD operations and user authentication modules',
      'Created an automated reporting module utilizing Crystal Report'
    ]
  },
  'proj-portfolio': {
    title: 'Personal Portfolio Website',
    desc: 'An interactive and responsive personal website designed to showcase projects, publications, and technical skills effectively.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    role: 'Front-End Engineer',
    duration: '2026',
    image: 'images/porto indi.png',
    linkLabel: 'View GitHub',
    linkUrl: 'https://github.com/indikartikaa/portofolio',
    background: 'Recruiters often skim through traditional text-based resumes. This website was built as a centralized, interactive platform to provide a deeper, more engaging, and comprehensive technical portfolio screening process.',
    contributions: [
      'Designed a modern UI/UX layout with dark mode support',
      'Developed the interface using HTML, Tailwind CSS, and Vanilla JavaScript for optimal performance',
      'Implemented interactive components such as dynamic modals, scroll spy, and a mobile hamburger menu',
      'Organized projects, certifications, and experiences into a structured architecture'
    ]
  },
  'proj-greasycle-ba': {
    title: 'Greasycle — Process & UI/UX Analysis',
    desc: 'The upstream phase focusing on translating user pain points into intuitive interface solutions and wireframes.',
    tech: ['Figma', 'UI/UX', 'User Flow'],
    role: 'Business / System Analyst',
    duration: '2026',
    image: 'images/ebis.jpg',
    // Tombol Kedua (Tambahan) -> TAMBAHKAN DUA BARIS INI
    linkLabel: 'View on Figma',
    linkUrl: 'https://www.figma.com/proto/lfnjBwEdwNRImmADBEK4vx/GREACYCLE?node-id=2-557&p=f&viewport=-1729%2C-263%2C0.35&t=U8ufwhBLz4kbAfLT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=212%3A203&show-proto-sidebar=1&page-id=0%3A1',
    link2Label: 'View Laporan',
    link2Url: 'https://drive.google.com/file/d/1Fx4NkfbexyXsclBkOD2nk4tgKY4j2kTe/view?usp=sharing',
    background: 'A successful platform requires a deep understanding of its users. This project focused on the initial business analysis and UI/UX design to ensure the platform effectively solved the community\'s waste management problems before entering the coding phase.',
    contributions: [
      'Conducted problem identification and business process analysis',
      'Mapped user personas, user journeys, and logical user flows',
      'Designed basic wireframes up to interactive high-fidelity prototypes using Figma'
    ]
  },
  'proj-jkn': {
    title: 'Mobile JKN Literacy Research',
    desc: 'Statistical research to measure the impact of digital literacy on the effectiveness of accessing healthcare services via the app.',
    tech: ['Jamovi', 'Excel', 'Statistics'],
    role: 'Data Analyst',
    duration: 'Academic Research',
    image: 'images/statkom.jpg',
    linkLabel: 'View Report PDF',
    linkUrl: 'https://drive.google.com/file/d/1IE8bg47Rk7chfVE67IOO_nR4QrcyqO7r/view?usp=sharing',
    background: 'Understanding the correlation between digital literacy and e-health adoption is crucial. This research aimed to statistically prove how the digital literacy of Surabaya citizens affects their ability to utilize the Mobile JKN application.',
    contributions: [
      'Defined research variables and drafted the questionnaire instrument',
      'Cleaned, processed, and modeled respondent data using Microsoft Excel',
      'Performed statistical analysis (regression and correlation) using Jamovi',
      'Drafted the final research report and comprehensive result interpretations'
    ]
  },
  'proj-greasycle-pm': {
    title: 'Greasycle — Project Planning',
    desc: 'Documenting and planning the system development lifecycle to ensure it stays on schedule and within budget constraints.',
    tech: ['ProjectLibre', 'WBS', 'Risk Mgmt'],
    role: 'Project Manager',
    duration: '2026',
    image: 'images/mpsi.jpg',
    linkLabel: 'View Report PDF',
    linkUrl: 'https://drive.google.com/file/d/15kDAVhv0HU61vUHhgJFDL7LkEiSXrZlP/view?usp=sharing',
    background: 'Proper project management is vital for software development success. This project involved creating comprehensive management documentation to guide the Greasycle development team from initiation to closure.',
    contributions: [
      'Drafted the Project Charter and strictly defined the Project Scope',
      'Decomposed complex tasks using a Work Breakdown Structure (WBS)',
      'Planned schedules using Gantt Charts (ProjectLibre) and estimated project costs',
      'Formulated risk mitigation matrices and stakeholder analyses'
    ]
  },
  'proj-samator': {
    title: 'Samator IT Performance Eval.',
    desc: 'An IT infrastructure performance measurement project using the KPI framework to align technology with strategic goals.',
    tech: ['KPI Framework', 'IT Governance'],
    role: 'IT Auditor / Analyst',
    duration: '2025 - 2026',
    image: 'images/pkti.jpg',
    linkLabel: 'View Report PDF',
    linkUrl: 'https://drive.google.com/file/d/1-mXMp1ndaYE21h3xWWfEhYe2yaZT0ILs/view?usp=sharing',
    background: 'Aligning IT infrastructure with business objectives is critical for enterprise efficiency. This project involved auditing and evaluating the IT performance of PT Samator Indo Gas Tbk to provide actionable improvement strategies.',
    contributions: [
      'Evaluated current IT performance using the Phase 1–6 framework methodology',
      'Formulated relevant Key Performance Indicators (KPIs) tailored for the IT division',
      'Provided strategic recommendation development based on comprehensive gap analysis'
    ]
  }
};


// ── 2. DATA LIBRARY MEDIA ────────────────────────────────────
const mediaLibrary = {
  'photo-head': 'images/head-advo.jpeg',
  'cert-staff': 'images/staff-advo.png',
  'photo-pensi': 'images/pensi.jpg',
  'photo-opentalk': 'images/opentalk.jpg',
  'photo-sitasi': 'images/sitasi.jpg',
  'photo-ukmexpo': 'images/ukmexpo.jpg',
  'photo-dimensi': 'images/dimensi.jpg',
  'photo-laskara': 'images/laskara.jpg',
  'photo-radiasi': 'images/radiasi.jpg',
  'photo-altera': 'images/altera.jpg',
  'cert-bmc-telkom': 'images/sertifikat-telkom.pdf',
  'cert-bmc-unesa': 'images/sertifikat-unesa.pdf',    
  'cert-data-analytics': 'images/cert-data-analytics.pdf',
  'cert-ml-ai': 'images/cert-ml-ai.pdf',
  'cert-sql-python': 'images/cert-sql-python.pdf',
  'cert-excel': 'images/cert-excel.pdf',
  'cert-dibimbing-da': 'images/cert-dibimbing-da.pdf',
  'cert-dibimbing-web15': 'images/cert-dibimbing-web15.pdf',
  'cert-dibimbing-web16': 'images/cert-dibimbing-web16.pdf',
  'cert-dibimbing-devops': 'images/cert-dibimbing-devops.pdf'
};


// ── 3. MODAL & TAB FUNCTIONS ─────────────────────────────────

// Menutup semua tipe Modal
window.closeModal = function() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) {
    overlay.classList.remove("flex");
    overlay.classList.add("hidden");
    document.body.style.overflow = "auto"; 
  }
};

// Mengganti Tab di dalam Modal Project
window.switchProjectTab = function(tabId) {
  const overviewBtn = document.getElementById('btn-overview');
  const detailsBtn = document.getElementById('btn-details');
  const overviewContent = document.getElementById('content-overview');
  const detailsContent = document.getElementById('content-details');

  if (tabId === 'overview') {
    overviewBtn.className = "flex-1 py-4 text-center font-semibold text-sage-d border-b-2 border-[#9c7582] transition-colors text-[14px] md:text-[15px]";
    detailsBtn.className = "flex-1 py-4 text-center font-medium text-muted hover:text-sage-d border-b-2 border-transparent transition-colors text-[14px] md:text-[15px]";
    overviewContent.classList.remove('hidden');
    detailsContent.classList.add('hidden');
  } else {
    detailsBtn.className = "flex-1 py-4 text-center font-semibold text-sage-d border-b-2 border-[#9c7582] transition-colors text-[14px] md:text-[15px]";
    overviewBtn.className = "flex-1 py-4 text-center font-medium text-muted hover:text-sage-d border-b-2 border-transparent transition-colors text-[14px] md:text-[15px]";
    detailsContent.classList.remove('hidden');
    overviewContent.classList.add('hidden');
  }
};

// Membuka Modal Project dengan Foto Header & Tombol Link
window.openProjectModal = function(projectId) {
  const project = projectsData[projectId];
  const overlay = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-body");
  
  if (overlay && modalBody && project) {
    const techPills = project.tech.map(t => 
      `<span class="text-[11px] md:text-[12px] font-medium bg-[#fdf5f7] border border-[#f3c6d3] text-sage-d px-3 py-1.5 rounded-full shadow-sm">${t}</span>`
    ).join('');

    const contributionsList = project.contributions.map(c => 
      `<li class="mb-1">${c}</li>`
    ).join('');

    // Mengecek apakah proyek ini punya tombol kedua
    let secondButtonHtml = '';
    if (project.link2Label && project.link2Url) {
      secondButtonHtml = `
        <a href="${project.link2Url}" target="_blank" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#9c7582] text-[#9c7582] hover:bg-[#9c7582] hover:text-white px-5 py-2 rounded-xl font-bold transition-colors text-[13px] md:text-[14px] shadow-sm">
          ${project.link2Label} <i data-lucide="file-text" class="w-4 h-4"></i>
        </a>
      `;
    }

    modalBody.innerHTML = `
      <div class="w-full max-w-[700px] bg-white dark:bg-card-dark rounded-[24px] overflow-hidden shadow-2xl relative mx-4 max-h-[90vh] flex flex-col cursor-auto" onclick="event.stopPropagation()">
        
        <div class="flex flex-col flex-1 overflow-hidden">
          <div class="flex border-b border-brd dark:border-brd-dark px-2 md:px-6 shrink-0">
            <button id="btn-overview" onclick="switchProjectTab('overview')" class="flex-1 py-4 text-center font-semibold text-sage-d border-b-2 border-[#9c7582] transition-colors text-[14px] md:text-[15px]">
              Project Overview
            </button>
            <button id="btn-details" onclick="switchProjectTab('details')" class="flex-1 py-4 text-center font-medium text-muted hover:text-sage-d border-b-2 border-transparent transition-colors text-[14px] md:text-[15px]">
              Project Details
            </button>
          </div>
          
          <div class="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
            <div id="content-overview" class="block animate-fadeIn">
              <h2 class="text-2xl md:text-3xl font-serif font-bold text-txt dark:text-txt-dark mb-4 leading-tight">${project.title}</h2>
              <p class="text-muted dark:text-muted-dark mb-8 text-[14px] md:text-[15px] leading-relaxed">${project.desc}</p>
              
              <h4 class="font-bold text-txt dark:text-txt-dark mb-3 text-[14px] md:text-[15px]">Technologies / Tools Used</h4>
              <div class="flex flex-wrap gap-2 mb-8">${techPills}</div>
              
              <div class="flex flex-col md:flex-row gap-6 md:gap-12 mb-8 border-t border-brd dark:border-brd-dark pt-6">
                <div>
                  <h4 class="font-bold text-txt dark:text-txt-dark text-[14px] mb-1">Role</h4>
                  <p class="text-[#9c7582] font-semibold text-[14px] md:text-[15px]">${project.role}</p>
                </div>
                <div>
                  <h4 class="font-bold text-txt dark:text-txt-dark text-[14px] mb-1">Duration</h4>
                  <p class="text-[#9c7582] font-semibold text-[14px] md:text-[15px]">${project.duration}</p>
                </div>
              </div>
            </div>
            
            <div id="content-details" class="hidden animate-fadeIn">
              <h4 class="font-bold text-txt dark:text-txt-dark mb-3 text-[15px] md:text-[16px]">Background</h4>
              <p class="text-muted dark:text-muted-dark mb-8 text-[14px] md:text-[15px] leading-relaxed">${project.background}</p>
              <h4 class="font-bold text-txt dark:text-txt-dark mb-3 text-[15px] md:text-[16px]">Specific Contributions</h4>
              <ul class="list-disc pl-5 text-[#9c7582] dark:text-sage-m space-y-2 text-[14px] md:text-[15px] marker:text-[#f3c6d3]">
                ${contributionsList}
              </ul>
            </div>
          </div>

          <!-- Sticky Footer (Dinamis: Bisa 1 atau 2 Tombol) -->
        <div class="p-4 md:p-5 border-t border-brd dark:border-brd-dark shrink-0 bg-[#fdf5f7] dark:bg-[#1a1114] flex flex-col-reverse sm:flex-row justify-end gap-3">
           ${secondButtonHtml}
           <a href="${project.linkUrl}" target="_blank" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#9c7582] hover:bg-[#8f415e] text-white px-6 py-2.5 rounded-xl font-bold transition-colors text-[13px] md:text-[14px] shadow-sm">
              ${project.linkLabel} <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
           </a>
        </div>
        </div>
      </div>
    `;
    
    if(window.lucide) { window.lucide.createIcons(); }
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
    document.body.style.overflow = "hidden"; 
  }
};

// Membuka Modal Media (PDF/Gambar Organisasi)
window.openMediaModal = function(mediaId) {
  const fileSrc = mediaLibrary[mediaId];
  const overlay = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-body");
  
  if(overlay && modalBody && fileSrc) {
    let mediaHTML = '';
    if (fileSrc.toLowerCase().endsWith('.pdf')) {
      mediaHTML = `<iframe src="${fileSrc}" class="w-full h-[75vh] md:w-[800px] rounded-xl shadow-md bg-white" frameborder="0"></iframe>`;
    } else {
      mediaHTML = `<img src="${fileSrc}" class="max-w-full max-h-[75vh] object-contain rounded-xl shadow-md" alt="Media Detail" onerror="this.src='https://via.placeholder.com/600x400?text=Image+Not+Found'">`;
    }

    modalBody.innerHTML = `
      <div class="p-4 md:p-6 flex justify-center items-center bg-card dark:bg-card-dark w-full rounded-2xl" onclick="event.stopPropagation()">
        ${mediaHTML}
      </div>
    `;
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
};

// Fungsi Tab Kepanitiaan vs Organisasi
window.showSection = function(type) {
  const orgSection = document.getElementById('section-org');
  const comSection = document.getElementById('section-com');
  const btnOrg = document.getElementById('btn-org');
  const btnCom = document.getElementById('btn-com');

  if(!orgSection || !comSection || !btnOrg || !btnCom) return;

  orgSection.classList.toggle('hidden', type !== 'org');
  orgSection.classList.toggle('block', type === 'org');
  comSection.classList.toggle('hidden', type !== 'com');
  comSection.classList.toggle('block', type === 'com');
  
  const activeClass = 'flex-1 py-3 text-[13px] md:text-[14px] font-bold rounded-full bg-sage-d text-white transition-all shadow-md';
  const inactiveClass = 'flex-1 py-3 text-[13px] md:text-[14px] font-bold rounded-full text-muted dark:text-muted-dark hover:text-sage-d transition-all';
  
  btnOrg.className = type === 'org' ? activeClass : inactiveClass;
  btnCom.className = type === 'com' ? activeClass : inactiveClass;
};


// ── 4. COMPONENT LOADER & INIT ───────────────────────────────
async function loadComponent(id, file) {
  try {
    const response = await fetch(file);
    if(!response.ok) throw new Error('File not found');
    const html = await response.text();
    const element = document.getElementById(id);
    if(element) element.innerHTML = html;
  } catch (error) {
    console.error(`Gagal memuat komponen ${file}:`, error);
  }
}

async function initApp() {
  await Promise.all([
    loadComponent('navbar-container', 'components/navbar.html'),
    loadComponent('home-container', 'components/home.html'),
    loadComponent('about-container', 'components/about.html'),
    loadComponent('education-container', 'components/education.html'),
    loadComponent('skills-container', 'components/skills.html'),
    loadComponent('projects-container', 'components/projects.html'),
    loadComponent('publications-container', 'components/publications.html'),
    loadComponent('experience-container', 'components/experience.html'),
    loadComponent('certifications-container', 'components/certifications.html'),
    loadComponent('contact-container', 'components/contact.html'),
    loadComponent('footer-container', 'components/footer.html')
  ]);

  if (typeof lucide !== 'undefined') lucide.createIcons();
  setupInteractions();
}

// ── 5. SETUP INTERACTIONS (TEMA, SCROLL, DLL) ────────────────
function setupInteractions() {
  
  // A. Tema (Dark/Light)
  const themeBtn = document.getElementById("theme-toggle");
  const htmlDoc = document.documentElement; 
  if(themeBtn) {
    const initTheme = localStorage.getItem("indi-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (initTheme === "dark") htmlDoc.classList.add("dark");
    else htmlDoc.classList.remove("dark");
    
    themeBtn.innerHTML = initTheme === 'dark' ? '<i data-lucide="moon" class="w-4 h-4 md:w-5 md:h-5"></i>' : '<i data-lucide="sun" class="w-4 h-4 md:w-5 md:h-5"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();

    themeBtn.addEventListener("click", () => {
      const isDark = htmlDoc.classList.toggle("dark");
      localStorage.setItem("indi-theme", isDark ? "dark" : "light");
      themeBtn.innerHTML = isDark ? '<i data-lucide="moon" class="w-4 h-4 md:w-5 md:h-5"></i>' : '<i data-lucide="sun" class="w-4 h-4 md:w-5 md:h-5"></i>';
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  }

  // B. Hamburger Menu (Mobile)
  // ── 6. FUNGSI HAMBURGER MENU (MOBILE) ────────────────────────
window.toggleMobileMenu = function() {
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerBtn = document.querySelector('[onclick="toggleMobileMenu()"]');
  
  if (mobileMenu) {
    // Membuka atau menutup menu (ganti hidden jadi flex)
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    
    // Mengganti ikon Hamburger (garis tiga) menjadi Silang (X)
    if (hamburgerBtn) {
      const isHidden = mobileMenu.classList.contains("hidden");
      hamburgerBtn.innerHTML = isHidden 
        ? '<i data-lucide="menu" class="w-6 h-6"></i>' 
        : '<i data-lucide="x" class="w-6 h-6"></i>';
      
      // Render ulang ikonnya
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  }
};

  // C. Scrollspy (Warna Menu Navbar yang Aktif)
  const sections = document.querySelectorAll("section[id]"); 
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  const runScrollSpy = () => {
    let current = "";
    const scrollPos = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= (sectionTop - 200) && scrollPos < (sectionTop + sectionHeight - 200)) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("text-sage-d", "font-bold", "bg-sage-l", "dark:bg-sage-d/20");
      link.classList.add("text-muted", "dark:text-muted-dark", "font-medium"); 
      
      if (current && link.getAttribute("href") === `#${current}`) {
        link.classList.remove("text-muted", "dark:text-muted-dark", "font-medium");
        link.classList.add("text-sage-d", "font-bold", "bg-sage-l", "dark:bg-sage-d/20");
      }
    });
  };

  window.addEventListener("scroll", runScrollSpy);
  // Panggil sekali agar saat halaman dimuat, menu Home langsung bold
  setTimeout(runScrollSpy, 500);

  // D. Smooth Scroll
  document.querySelectorAll('nav a[href^="#"], a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      if(targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) { 
        e.preventDefault(); 
        target.scrollIntoView({ behavior: "smooth", block: "start" }); 
      }
    });
  });

  // E. Animasi Muncul saat di Scroll (Scroll Reveal)
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
  }), { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  
  // F. Event Keydown Esc untuk menutup Modal
  document.addEventListener("keydown", e => { 
    const overlay = document.getElementById("modal-overlay");
    if (e.key === "Escape" && overlay && !overlay.classList.contains("hidden")) closeModal(); 
  });
}

// Menjalankan inisialisasi aplikasi
initApp();