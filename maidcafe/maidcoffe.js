// === CARDAPIO DATA ===
const menuItems = [
  {
    id: 1,
    category: 'quente',
    emoji: '☕',
    name: 'Latte da Sakura-chan',
    desc: 'Café latte cremoso com um toque de sakura e arte de gatinho no topo!',
    maid: 'Preparado com amor por Sakura-chan 🌸',
    price: 'R$ 14,90'
  },
  {
    id: 2,
    category: 'quente',
    emoji: '🍵',
    name: 'Matcha Moe Moe',
    desc: 'Chá matcha premium com leite vaporizado e Marshmallow de coelhinho.',
    maid: 'Especialidade da Yuki-chan ❄️',
    price: 'R$ 16,90'
  },
  {
    id: 3,
    category: 'quente',
    emoji: '🥐',
    name: 'Cappuccino da Momo-chan',
    desc: 'Cappuccino clássico com canela, chocolate em pó e coração de chantilly.',
    maid: 'A preferida da Momo-chan 🌟',
    price: 'R$ 13,90'
  },
  {
    id: 4,
    category: 'quente',
    emoji: '🍫',
    name: 'Mocha Quentinho',
    desc: 'Café com chocolate belga, chantilly e raspas de chocolate rosa.',
    maid: 'Hana-chan recomenda! 🍓',
    price: 'R$ 15,90'
  },
  {
    id: 5,
    category: 'gelado',
    emoji: '🧊',
    name: 'Frappé da Yuki-chan',
    desc: 'Café gelado batido com gelo, leite e calda de caramelo salgado.',
    maid: 'O hit do verão por Yuki-chan ❄️',
    price: 'R$ 17,90'
  },
  {
    id: 6,
    category: 'gelado',
    emoji: '🍓',
    name: 'Berry Iced Latte',
    desc: 'Latte gelado com xarope de frutas vermelhas e pedaços de morango fresco.',
    maid: 'Sakura-chan caprichou! 🌸',
    price: 'R$ 16,50'
  },
  {
    id: 7,
    category: 'gelado',
    emoji: '🥥',
    name: 'Coconut Cold Brew',
    desc: 'Cold brew suave com leite de coco e flocos de coco torrado.',
    maid: 'A pedida da Momo-chan 🌟',
    price: 'R$ 15,50'
  },
  {
    id: 8,
    category: 'gelado',
    emoji: '🍑',
    name: 'Pêssego Fizz',
    desc: 'Chá gelado de pêssego com toque de soda e hortelã fresca.',
    maid: 'Hana-chan arrasa! 🍰',
    price: 'R$ 14,50'
  },
  {
    id: 9,
    category: 'doce',
    emoji: '🍰',
    name: 'Cheesecake de Morango',
    desc: 'Cheesecake cremoso com calda de morango orgânico e cerejas.',
    maid: 'A sobremesa da Hana-chan 🍓',
    price: 'R$ 18,90'
  },
  {
    id: 10,
    category: 'doce',
    emoji: '🥞',
    name: 'Panquecas Kawaii',
    desc: 'Panquecas fofinhas com maple syrup, frutas e carinha sorridente.',
    maid: 'Sakura-chan decorou! 🌸',
    price: 'R$ 19,90'
  },
  {
    id: 11,
    category: 'doce',
    emoji: '🍮',
    name: 'Pudim de Leite Neko',
    desc: 'Pudim clássico com calda de caramelo e orelhas de gatinho de biscoito.',
    maid: 'Momo-chan adora! 🌟',
    price: 'R$ 12,90'
  },
  {
    id: 12,
    category: 'doce',
    emoji: '🧁',
    name: 'Cupcake Arco-íris',
    desc: 'Cupcake colorido com buttercream de baunilha e confeitos brilhantes.',
    maid: 'Yuki-chan faz com carinho ❄️',
    price: 'R$ 11,90'
  },
  {
    id: 13,
    category: 'especial',
    emoji: '🌟',
    name: 'Combo MaidCoffe',
    desc: 'Café da sua escolha + sobremesa do dia + foto com a maid!',
    maid: 'Experiência completa! 💕',
    price: 'R$ 34,90'
  },
  {
    id: 14,
    category: 'especial',
    emoji: '🎀',
    name: 'Latte Art Personalizado',
    desc: 'Escolha o desenho do latte art: waifu, animal ou nome personalizado!',
    maid: 'Sakura-chan desenha! 🌸',
    price: 'R$ 19,90'
  },
  {
    id: 15,
    category: 'especial',
    emoji: '🎂',
    name: 'Bolo de Aniversário Mini',
    desc: 'Mini bolo decorativo com velinha e cartão da maid favorita.',
    maid: 'A equipe toda celebra! 🎉',
    price: 'R$ 29,90'
  },
  {
    id: 16,
    category: 'especial',
    emoji: '💝',
    name: 'Café dos Namorados',
    desc: 'Dois cafés especiais + sobremesa para dividir + brinde surpresa.',
    maid: 'Para casais fofos! 💕',
    price: 'R$ 39,90'
  }
];

// === RENDER MENU ===
function renderMenu(items) {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = items.map(item => `
    <div class="menu-card reveal">
      <span class="menu-emoji">${item.emoji}</span>
      <h3 class="menu-name">${item.name}</h3>
      <p class="menu-desc">${item.desc}</p>
      <p class="menu-maid">${item.maid}</p>
      <div class="menu-price">${item.price}</div>
      <button class="btn-pedir" onclick="pedirItem(this)">Pedir 💕</button>
    </div>
  `).join('');
  
  // Re-trigger reveal animation for new items
  setTimeout(() => {
    document.querySelectorAll('.menu-card.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('active'), i * 100);
    });
  }, 50);
}

// === FILTER MENU ===
function filterMenu(category) {
  // Update active tab
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter and render
  const filtered = menuItems.filter(item => item.category === category);
  renderMenu(filtered);
}

// === PEDIR BUTTON ANIMATION ===
function pedirItem(btn) {
  const originalText = btn.innerHTML;
  btn.innerHTML = 'Adicionado! ✨';
  btn.style.background = 'linear-gradient(45deg, #4ade80, #22c55e)';
  
  // Create heart particles
  const rect = btn.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    createHeartParticle(rect.left + rect.width / 2, rect.top);
  }
  
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = '';
  }, 1200);
}

function createHeartParticle(x, y) {
  const heart = document.createElement('div');
  heart.innerHTML = ['💕', '💖', '💗', '🌸', '✨'][Math.floor(Math.random() * 5)];
  heart.style.position = 'fixed';
  heart.style.left = x + (Math.random() - 0.5) * 60 + 'px';
  heart.style.top = y + 'px';
  heart.style.fontSize = (16 + Math.random() * 16) + 'px';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '9999';
  heart.style.animation = `floatHeart ${0.8 + Math.random() * 0.6}s ease-out forwards`;
  document.body.appendChild(heart);
  
  setTimeout(() => heart.remove(), 1500);
}

// Add heart float animation to CSS dynamically
const heartStyle = document.createElement('style');
heartStyle.innerHTML = `
  @keyframes floatHeart {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-80px) scale(0.3); opacity: 0; }
  }
`;
document.head.appendChild(heartStyle);

// === FLOATING BACKGROUND PARTICLES ===
function createParticles() {
  const container = document.getElementById('particles');
  const symbols = ['🌸', '💖', '✨', '💕', '🎀', '⭐', '🍥', '🌷'];
  
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.fontSize = (14 + Math.random() * 20) + 'px';
    container.appendChild(p);
  }
}

// === MOBILE MENU TOGGLE ===
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

// Close menu when clicking on a link
 document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// === SCROLL REVEAL ANIMATION ===
function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// === NAVBAR SCROLL EFFECT ===
function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 4px 25px rgba(255, 105, 180, 0.3)';
    } else {
      navbar.style.boxShadow = '0 2px 20px rgba(255, 105, 180, 0.2)';
    }
    
    lastScroll = currentScroll;
  });
}

// === PARALLAX HERO MAID ===
function setupParallax() {
  const maid = document.querySelector('.hero-maid');
  if (!maid) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    maid.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.05}deg)`;
  });
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  // Render initial menu (quente)
  renderMenu(menuItems.filter(item => item.category === 'quente'));
  
  // Setup effects
  createParticles();
  setupReveal();
  setupNavbarScroll();
  setupParallax();
  
  // Reveal hero content sections
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
  }, 300);
});

