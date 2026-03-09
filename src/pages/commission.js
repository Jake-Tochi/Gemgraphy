/**
 * Commission Page — 制作依頼
 */
export function renderCommission(t) {
    const c = t.commission;
    if (!c) return '<p>Loading...</p>';

    const nl = (str) => (str || '').replace(/\n/g, '<br>');

    const processSteps = (c.processSteps || [])
        .map(
            (step, i) => `
        <div class="commission-step fade-in">
          <div class="commission-step__number">${String(i + 1).padStart(2, '0')}</div>
          <div class="commission-step__label">${step}</div>
        </div>`
        )
        .join('');

    const includesList = (c.includesList || [])
        .map((item) => `<li class="commission-includes__item">${item}</li>`)
        .join('');

    return `
    <!-- Hero -->
    <section class="hero hero--short">
      <div class="hero__bg" style="background-image: url('/images/jewelry-gemgraphy.jpg');"></div>
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <p class="text-overline" style="color: var(--color-gold); margin-bottom: var(--space-sm);">${c.heroSubtitle}</p>
        <h1 class="hero__title">${c.heroTitle}</h1>
        <div class="hero__divider"></div>
      </div>
    </section>

    <!-- Overview -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in" style="max-width: 640px; margin: 0 auto; text-align: center;">
          <p class="text-overline">${c.overline}</p>
          <h2 class="heading-2 heading-jp" style="margin-bottom: var(--space-lg);">${c.title}</h2>
          <hr class="divider divider--center" />
          <p class="text-body" style="margin-top: var(--space-lg);">${nl(c.desc)}</p>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section section--light">
      <div class="container">
        <div class="section__header fade-in" style="text-align: center; margin-bottom: var(--space-2xl);">
          <p class="text-overline">${c.processOverline}</p>
          <h2 class="heading-2">${c.processTitle}</h2>
          <hr class="divider divider--center" />
        </div>
        <div class="commission-steps fade-in">
          ${processSteps}
        </div>
      </div>
    </section>

    <!-- Includes -->
    <section class="section section--dark">
      <div class="container">
        <div style="max-width: 720px; margin: 0 auto;">
          <div class="fade-in" style="text-align: center; margin-bottom: var(--space-2xl);">
            <p class="text-overline">${c.includesOverline}</p>
            <h2 class="heading-2">${c.includesTitle}</h2>
            <hr class="divider divider--center" />
            <p class="text-body" style="margin-top: var(--space-md);">${c.includesDesc}</p>
          </div>
          <ul class="commission-includes fade-in">
            ${includesList}
          </ul>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="section">
      <div class="container">
        <div class="fade-in" style="text-align: center; margin-bottom: var(--space-2xl);">
          <p class="text-overline">${c.pricingOverline}</p>
          <h2 class="heading-2">${c.pricingTitle}</h2>
          <hr class="divider divider--center" />
        </div>
        <div class="commission-pricing fade-in">
          <div class="commission-pricing__card">
            <p class="commission-pricing__label">${c.pricingGemgraphy}</p>
            <p class="commission-pricing__range">${c.pricingGemgraphyRange}</p>
          </div>
          <div class="commission-pricing__card">
            <p class="commission-pricing__label">${c.pricingBeadsgraphy}</p>
            <p class="commission-pricing__range">${c.pricingBeadsgraphyRange}</p>
          </div>
        </div>
        <p class="text-body fade-in" style="text-align: center; margin-top: var(--space-lg); color: var(--color-text-muted);">${c.pricingNote}</p>
      </div>
    </section>

    <!-- Period -->
    <section class="section section--light">
      <div class="container">
        <div class="fade-in" style="text-align: center;">
          <p class="text-overline">${c.periodOverline}</p>
          <h2 class="heading-2" style="margin-bottom: var(--space-md);">${c.periodTitle}</h2>
          <hr class="divider divider--center" />
          <p class="heading-3" style="margin-top: var(--space-xl); color: var(--color-gold);">${c.periodDesc}</p>
        </div>
      </div>
    </section>

    <!-- Apply CTA -->
    <section class="section section--dark">
      <div class="container text-center fade-in">
        <p class="text-overline" style="margin-bottom: var(--space-md);">${c.applyOverline}</p>
        <h2 class="heading-2" style="margin-bottom: var(--space-md);">${c.applyTitle}</h2>
        <hr class="divider divider--center" />
        <p class="text-body" style="margin: var(--space-xl) auto; max-width: 480px;">${nl(c.applyDesc)}</p>
        <a href="#/contact" class="cta-btn">${c.applyLink}</a>
      </div>
    </section>
  `;
}
