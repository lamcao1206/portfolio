/* Handle the navbar event when scroll */
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/* Handle the appearance of skill sections */
const skillsSection = document.querySelector('.skills-section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(skillsSection);

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navlink');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

const skillsGrid = document.getElementById('skills-grid');
const skills = [
  {
    name: 'HTML',
    color: '#E34F26',
    icon: '/html.svg',
  },
  {
    name: 'CSS',
    color: '#1572B6',
    icon: '/css.svg',
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    icon: '/js.svg',
  },
  {
    name: 'MySQL',
    color: '#00758f',
    icon: '/mysql.svg',
  },
  {
    name: 'Express.js',
    color: '#000',
    icon: '/express.svg',
  },
  {
    name: 'React',
    color: '#61dafb',
    icon: '/react.svg',
  },
  {
    name: 'Node.js',
    color: '#339933',
    icon: '/nodejs.svg',
  },
  {
    name: 'Git',
    color: '#f05032',
    icon: '/git.svg',
  },
  {
    name: 'TailwindCSS',
    color: '#06b6d4',
    icon: '/tailwind.svg',
  },
  {
    name: 'Postman',
    color: '#FF6C37',
    icon: '/postman.svg',
  },
];

skills.forEach((skill) => {
  const skillCard = document.createElement('div');
  skillCard.classList.add('skill-card');

  skillCard.innerHTML = `
    <img src="${skill.icon}" alt="${skill.name}" class="skill-icon" />
    <p style="color:${skill.color}; font-weight: 500">${skill.name}</p>
  `;

  skillsGrid.appendChild(skillCard);
});

const projectsSection = document.querySelector('.projects-section');
observer.observe(projectsSection);
