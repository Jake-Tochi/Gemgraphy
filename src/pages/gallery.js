/**
 * Gallery Page
 */
export function renderGallery(t) {
  // Placeholder gallery images
  const images = [
    { src: '/images/calligraphy-wa.jpg', alt: '和の書道', class: '' },
    { src: '/images/beadsgraphy-complex.jpg', alt: 'Beadsgraphy', class: 'gallery-grid__item--tall' },
    { src: '/images/jewelry-purple.jpg', alt: '紫のアクセサリー', class: '' },
    { src: '/images/calligraphy-hazuki.jpg', alt: '葉月の書道', class: 'gallery-grid__item--wide' },
    { src: '/images/beadsgraphy-silver.jpg', alt: 'Beadsgraphy', class: '' },
    { src: '/images/calligraphy-kizuna.jpg', alt: '絆の書道', class: '' },
    { src: '/images/jewelry-colorful.jpg', alt: 'カラフルBeadsgraphy', class: '' },
    { src: '/images/calligraphy-names.jpg', alt: '命名書道', class: '' },
    { src: '/images/beadsgraphy-blue.jpg', alt: 'Beadsgraphy', class: '' },
  ];

  const gridItems = images
    .map(
      (img, i) =>
        `<div class="gallery-grid__item ${img.class} fade-in fade-in--delay-${(i % 4) + 1}" data-gallery-index="${i}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" />
        </div>`
    )
    .join('');

  return `
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero__bg" style="background-image: url('/images/beadsgraphy-portrait.jpg');"></div>
      <div class="hero__overlay"></div>
      <div class="page-hero__content">
        <h1 class="page-hero__title">${t.gallery.heroTitle}</h1>
        <p class="page-hero__subtitle">${t.gallery.heroSubtitle}</p>
      </div>
    </section>

    <!-- Gallery Header -->
    <section class="section" style="padding-bottom: var(--space-xl);">
      <div class="container text-center fade-in">
        <p class="text-overline">${t.gallery.overline}</p>
        <h2 class="heading-2">${t.gallery.title}</h2>
        <hr class="divider divider--center" />
        <p class="text-body" style="max-width: 540px; margin: 0 auto;">${t.gallery.desc}</p>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section style="padding-bottom: var(--space-section);">
      <div class="container">
        <div class="gallery-grid" id="gallery-grid">
          ${gridItems}
        </div>
      </div>
    </section>

    <!-- Gallery Modal -->
    <div class="gallery-modal" id="gallery-modal">
      <button class="gallery-modal__close" id="gallery-modal-close">✕</button>
      <img class="gallery-modal__img" id="gallery-modal-img" src="" alt="" />
    </div>
  `;
}

/**
 * Initialize gallery modal behavior
 */
export function initGallery() {
  const grid = document.getElementById('gallery-grid');
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('gallery-modal-img');
  const closeBtn = document.getElementById('gallery-modal-close');

  if (!grid || !modal) return;

  grid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-grid__item');
    if (!item) return;

    const img = item.querySelector('img');
    if (!img) return;

    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.classList.add('gallery-modal--open');
    document.body.style.overflow = 'hidden';
  });

  const closeModal = () => {
    modal.classList.remove('gallery-modal--open');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}
