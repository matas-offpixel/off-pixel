<script>
  import { onMount, tick } from 'svelte';

  let contactOpen = false;
  let contactSent = false;
  let foundersOpen = false;
  let matasOpen = false;
  let sarahOpen = false;
  let matasEl, sarahEl;
  const VIEWPORT_MARGIN = 20;

  function toggleContact() {
    contactOpen = !contactOpen;
    if (contactOpen) contactSent = false;
  }

  function closeContact(e) {
    if (
      contactOpen &&
      e.target !== document.getElementById('contact-trigger') &&
      !document.getElementById('contact-reveal')?.contains(e.target)
    ) {
      contactOpen = false;
      contactSent = false;
    }
  }

  function showFounders() {
    foundersOpen = true;
  }

  function closeFounders() {
    foundersOpen = false;
    matasOpen = false;
    sarahOpen = false;
  }

  function toggleFounders(e) {
    if (e.target.closest('#founders-trigger') || e.target.closest('#founders-reveal')) return;
    if (
      !document.getElementById('founders-reveal')?.contains(e.target) &&
      !document.getElementById('founders-trigger')?.contains(e.target)
    ) {
      closeFounders();
    }
  }

  function openMatas() {
    matasOpen = true;
    sarahOpen = false;
    foundersOpen = true;
    if (matasEl) {
      matasEl.style.setProperty('--nudge-x', '0px');
      matasEl.style.setProperty('--nudge-y', '0px');
    }
    tick().then(() => requestAnimationFrame(() => clampPopupToViewport(matasEl)));
  }

  function closeMatas() {
    matasOpen = false;
    if (!sarahOpen) foundersOpen = false;
  }

  function openSarah() {
    sarahOpen = true;
    matasOpen = false;
    foundersOpen = true;
    if (sarahEl) {
      sarahEl.style.setProperty('--nudge-x', '0px');
      sarahEl.style.setProperty('--nudge-y', '0px');
    }
    tick().then(() => requestAnimationFrame(() => clampPopupToViewport(sarahEl)));
  }

  function closeSarah() {
    sarahOpen = false;
    if (!matasOpen) foundersOpen = false;
  }

  async function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: formData });
      const data = await res.json().catch(() => ({}));
      if (res.ok) contactSent = true;
      else console.error(data.error ?? 'Failed to send');
    } catch (err) {
      console.error(err);
    }
  }

  function clampPopupToViewport(popup) {
    if (!popup) return;
    const rect = popup.getBoundingClientRect();
    let nudgeX = 0;
    let nudgeY = 0;
    if (rect.right > window.innerWidth - VIEWPORT_MARGIN) nudgeX = window.innerWidth - VIEWPORT_MARGIN - rect.right;
    if (rect.left + nudgeX < VIEWPORT_MARGIN) nudgeX = VIEWPORT_MARGIN - rect.left;
    if (rect.bottom > window.innerHeight - VIEWPORT_MARGIN) nudgeY = window.innerHeight - VIEWPORT_MARGIN - rect.bottom;
    if (rect.top + nudgeY < VIEWPORT_MARGIN) nudgeY = VIEWPORT_MARGIN - rect.top;
    popup.style.setProperty('--nudge-x', nudgeX + 'px');
    popup.style.setProperty('--nudge-y', nudgeY + 'px');
  }

  onMount(() => {
    const closeContactBound = (e) => {
      closeContact(e);
    };
    const toggleFoundersBound = (e) => {
      toggleFounders(e);
    };
    const closeOutsideMatasSarah = (e) => {
      const t = e.target;
      if (
        matasEl &&
        matasOpen &&
        !document.querySelector('.founders-name-matas-wrap')?.contains(t) &&
        !matasEl.contains(t)
      )
        closeMatas();
      if (
        sarahEl &&
        sarahOpen &&
        !document.querySelector('.founders-name-sarah-wrap')?.contains(t) &&
        !sarahEl.contains(t)
      )
        closeSarah();
    };
    document.addEventListener('click', closeContactBound);
    document.addEventListener('click', toggleFoundersBound);
    document.addEventListener('click', closeOutsideMatasSarah);
    document.addEventListener('touchend', closeOutsideMatasSarah, { passive: true });
    const onResize = () => {
      if (matasEl && matasOpen) clampPopupToViewport(matasEl);
      if (sarahEl && sarahOpen) clampPopupToViewport(sarahEl);
    };
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('click', closeContactBound);
      document.removeEventListener('click', toggleFoundersBound);
      document.removeEventListener('click', closeOutsideMatasSarah);
      document.removeEventListener('touchend', closeOutsideMatasSarah);
      window.removeEventListener('resize', onResize);
    };
  });
</script>

<svelte:window />

<div class="corner-bottom-wrap">
  <div class="corner corner-contact" on:mouseenter={() => (contactOpen = true)}>
    <button
      type="button"
      class="contact-trigger"
      aria-expanded={contactOpen}
      aria-controls="contact-reveal"
      id="contact-trigger"
      on:click|preventDefault={toggleContact}
    >
      Contact
    </button>
    <div class="contact-reveal" id="contact-reveal" class:is-open={contactOpen} aria-hidden={!contactOpen}>
      <div class="contact-reveal-box">
        <h2 class="contact-heading">Contact</h2>
        <form class="contact-form" id="contact-form" on:submit={handleContactSubmit}>
          <label for="contact-name">Name</label>
          <input type="text" id="contact-name" name="name" placeholder="Your name" required />

          <label for="contact-company">Company</label>
          <input type="text" id="contact-company" name="company" placeholder="Company name" />

          <label for="contact-url">Website or Instagram URL</label>
          <input type="url" id="contact-url" name="url" placeholder="https://…" />

          <label for="contact-budget">Project Budget</label>
          <select id="contact-budget" name="budget">
            <option value="">Select range</option>
            <option value="Under £5k">Under £5k</option>
            <option value="£5k – £15k">£5k – £15k</option>
            <option value="£15k – £50k">£15k – £50k</option>
            <option value="£50k+">£50k+</option>
          </select>

          <label for="contact-message">Message</label>
          <textarea id="contact-message" name="message" placeholder="Tell us about your project" required></textarea>

          <button type="submit" disabled={contactSent}>{contactSent ? 'Message sent' : 'Send Message'}</button>
        </form>
      </div>
    </div>
  </div>

  <div class="corner corner-focus">
    <div class="focus-strategy-wrap">
      <span class="focus-item">STRATEGY</span>
      <div class="focus-strategy-reveal" aria-hidden="true">
        <ul class="focus-reveal-list">
          <li>AUDIENCE &amp; MARKET SEGMENTATION</li>
          <li>PRE-SALE AND LAUNCH STRATEGY</li>
          <li>ALWAYS-ON FUNNEL STRATEGY</li>
          <li>BRAND BUILDING &amp; AWARENESS</li>
          <li>SALES ACCELERATION &amp; DEMAND SPIKES</li>
        </ul>
      </div>
    </div>
    <span class="focus-sep"> · </span>
    <div class="focus-paid-wrap">
      <span class="focus-item">PAID MEDIA</span>
      <div class="focus-paid-reveal" aria-hidden="true">
        <ul class="focus-reveal-list">
          <li>META &amp; TIKTOK PAID SOCIAL</li>
          <li>PROGRAMMATIC &amp; DISPLAY</li>
          <li>SEARCH &amp; SHOPPING</li>
          <li>PARTNERSHIP &amp; AFFILIATE</li>
          <li>RETARGETING &amp; CONVERSION OPTIMISATION</li>
        </ul>
      </div>
    </div>
    <span class="focus-sep"> · </span>
    <div class="focus-d2c-wrap">
      <span class="focus-item">D2C</span>
      <div class="focus-d2c-reveal" aria-hidden="true">
        <ul class="focus-reveal-list">
          <li>D2C CAMPAIGN STRATEGY</li>
          <li>CUSTOMER DATA CAPTURE &amp; SEGMENTATION</li>
          <li>EMAIL &amp; WHATSAPP AUTOMATION</li>
          <li>LOYALTY &amp; RETENTION PROGRAMMES</li>
          <li>COMMUNITY GROWTH</li>
        </ul>
      </div>
    </div>
    <br class="focus-line-break" />
    <span class="focus-sep"> · </span>
    <div class="focus-creative-wrap">
      <span class="focus-item">CREATIVE</span>
      <div class="focus-creative-reveal" aria-hidden="true">
        <ul class="focus-reveal-list">
          <li>CAMPAIGN CONCEPT DEVELOPMENT</li>
          <li>PERFORMANCE-LED CREATIVE IDEATION</li>
          <li>UGC-DRIVEN CREATIVE VARIATION</li>
          <li>TEMPLATE-BASED RAPID ITERATION</li>
          <li>TREND-DRIVEN CREATIVE INNOVATION</li>
        </ul>
      </div>
    </div>
    <span class="focus-sep"> · </span>
    <div class="focus-data-wrap">
      <span class="focus-item">DATA</span>
      <div class="focus-data-reveal" aria-hidden="true">
        <ul class="focus-reveal-list">
          <li>MARKETING PERFORMANCE ANALYTICS</li>
          <li>DATA MODELLING &amp; ATTRIBUTION INSIGHTS</li>
          <li>LOOKER / MODERN BI TOOLS</li>
          <li>CUSTOMER DATA STRATEGY</li>
          <li>AI-ASSISTED MARKETING INSIGHTS</li>
        </ul>
      </div>
    </div>
    <span class="focus-sep"> · </span>
    <div class="focus-governance-wrap">
      <span class="focus-item">GOVERNANCE</span>
      <div class="focus-governance-reveal" aria-hidden="true">
        <ul class="focus-reveal-list">
          <li>DATA GOVERNANCE FRAMEWORKS</li>
          <li>DATA QUALITY &amp; LINEAGE STANDARDS</li>
          <li>ENTERPRISE DATA DICTIONARIES</li>
          <li>REGULATORY DATA COMPLIANCE</li>
          <li>DATA OWNERSHIP &amp; ACCOUNTABILITY MODELS</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="corner corner-clients">
  <span class="work-label">Work: </span>
  <div class="work-events-wrap">
    <span class="work-events-trigger" id="events-trigger" aria-expanded="false" aria-controls="clients-reveal" role="button" tabindex="0">Events</span>
    <div class="clients-reveal work-events-reveal" id="clients-reveal" aria-hidden="true">
      <p class="clients-reveal-heading">Proud to have worked with</p>
      <img src="/images/clients/bwl-presents.svg" alt="BWL Presents" width="200" height="42" />
      <img src="/images/clients/drumsheds.svg" alt="Drumsheds" width="300" height="30" />
      <img src="/images/clients/swi.svg" alt="SWI" width="200" height="58" />
      <img src="/images/clients/louder.svg" alt="Louder" width="200" height="36" />
      <img src="/images/clients/live-nation.svg" alt="Live Nation" width="200" height="42" />
      <img src="/images/clients/anyma.svg" alt="Anyma" width="200" height="42" />
      <img src="/images/clients/lwe.svg" alt="LWE" width="200" height="42" />
      <img src="/images/clients/wah.svg" alt="Wah" width="200" height="42" />
      <img src="/images/clients/boundary.svg" alt="Boundary" width="200" height="42" />
      <img src="/images/clients/day-zero.svg" alt="Day Zero" width="200" height="42" />
      <img src="/images/clients/defected.svg" alt="Defected" width="200" height="42" />
      <img src="/images/clients/dhb.svg" alt="DHB" width="200" height="42" />
      <img src="/images/clients/e1.svg" alt="E1" width="200" height="42" />
      <img src="/images/clients/eastenderz.svg" alt="Eastenderz" width="200" height="42" />
      <img src="/images/clients/ee.svg" alt="EE" width="200" height="42" />
      <img src="/images/clients/high-lights.svg" alt="High Lights" width="200" height="42" />
      <img src="/images/clients/jackies.svg" alt="Jackies" width="200" height="42" />
      <img src="/images/clients/maiden-voyage.svg" alt="Maiden Voyage" width="200" height="42" />
      <img src="/images/clients/mos.svg" alt="MOS" width="200" height="42" />
      <img src="/images/clients/nexup.svg" alt="Nexup" width="200" height="42" />
      <img src="/images/clients/one-life.svg" alt="One Life" width="200" height="42" />
      <img src="/images/clients/origins.svg" alt="Origins" width="200" height="42" />
      <img src="/images/clients/paradise.svg" alt="Paradise" width="200" height="42" />
      <img src="/images/clients/perplex.svg" alt="Perplex" width="200" height="42" />
      <img src="/images/clients/prospect.svg" alt="Prospect" width="200" height="42" />
      <img src="/images/clients/77.svg" alt="77" width="200" height="42" />
      <img src="/images/clients/tokyonights.svg" alt="Tokyo Nights" width="200" height="42" />
      <img src="/images/clients/4thefans.svg" alt="4 The Fans" width="200" height="42" />
      <img src="/images/clients/junction2.svg" alt="Junction 2" width="200" height="42" />
      <img src="/images/clients/boudica.svg" alt="Boudica" width="200" height="42" />
    </div>
  </div>
  <span class="work-sep"> · </span>
  <div class="work-data-wrap">
    <span class="work-data-trigger" id="data-trigger" aria-expanded="false" aria-controls="data-reveal" role="button" tabindex="0">Data</span>
    <div class="data-reveal" id="data-reveal" aria-hidden="true">
      <p class="data-reveal-heading">Proud to have worked with</p>
      <div class="data-reveal-logos">
        <img src="/images/clients/google.svg" alt="Google" width="200" height="42" />
        <img src="/images/clients/datatonic.svg" alt="Datatonic" width="200" height="42" />
      </div>
      <p class="data-reveal-footer">Specialist expertise supporting global luxury brands and financial institutions.</p>
    </div>
  </div>
  <span class="work-sep"> · </span>
  <div class="work-founders-wrap" on:mouseenter={() => (foundersOpen = true)}>
    <span
      class="work-founders-trigger"
      id="founders-trigger"
      role="button"
      tabindex="0"
      aria-expanded={foundersOpen}
      aria-controls="founders-reveal"
      on:click|preventDefault={() => (foundersOpen = !foundersOpen)}
    >
      Founders
    </span>
    <div class="founders-reveal" id="founders-reveal" class:is-open={foundersOpen} aria-hidden={!foundersOpen}>
      <svg class="founders-fork-svg" viewBox="0 0 80 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M40 0v16 M40 16L8 44 M40 16L72 44" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div class="founders-names">
        <div class="founders-name-matas-wrap" on:mouseenter={() => openMatas()}>
          <span
            class="founders-name"
            role="button"
            tabindex="0"
            on:click|preventDefault={() => (matasOpen ? closeMatas() : openMatas())}
            on:touchend|preventDefault={() => (matasOpen ? closeMatas() : openMatas())}
          >
            Matas
          </span>
          <div class="matas-about" class:is-open={matasOpen} aria-hidden={!matasOpen} bind:this={matasEl}>
            <div class="matas-about-top-row">
              <img class="matas-about-photo" src="/images/matas.svg" alt="Matas" />
              <div class="matas-about-bio">
                <h3 class="matas-about-name">Matas Liebus</h3>
                <p>
                  Matas is a marketing strategist specialising in data-driven growth across the events, entertainment and
                  experience economy. With over ten years of experience designing and executing high-performance campaigns,
                  he helps promoters, venues and brands translate marketing investment into measurable results. His
                  approach blends paid media strategy, D2C engagement and creative execution, enabling campaigns to
                  launch strong, scale efficiently and build lasting audience relationships.
                </p>
                <p>
                  Across his career, Matas has delivered 1,000+ end-to-end campaigns, working at the intersection of
                  performance marketing, brand equity and community growth. His work focuses on building marketing systems
                  that drive immediate impact while strengthening the long-term value of the brands behind them.
                </p>
              </div>
            </div>
            <p class="matas-about-heading">Selected Case Study</p>
            <div class="matas-about-case-study">
              <p>
                In 2025, Matas led the delivery of 54 end-to-end marketing campaigns for the Broadwick Live Presents
                programme, driving 100,000+ ticket sales and generating approximately £4,000,000 in gross ticket revenue
                across London venues including Magazine London, O2 Academy Brixton and Roundhouse.
              </p>
              <p>
                Working across a portfolio of headliner-driven electronic music events, he was responsible for campaign
                strategy, paid media execution and performance optimisation, alongside the development of supporting
                marketing infrastructure including data capture systems, CRM engagement and D2C communication via email
                and WhatsApp.
              </p>
              <p>
                The programme achieved a 70%+ sell-out rate, demonstrating the effectiveness of a data-driven marketing
                approach combined with agile creative execution aligned to emerging platform trends.
              </p>
            </div>
            <p class="matas-about-disclaimer">Work delivered by Matas in a previous role.</p>
          </div>
        </div>
        <div class="founders-name-sarah-wrap" on:mouseenter={() => openSarah()}>
          <span
            class="founders-name"
            role="button"
            tabindex="0"
            on:click|preventDefault={() => (sarahOpen ? closeSarah() : openSarah())}
            on:touchend|preventDefault={() => (sarahOpen ? closeSarah() : openSarah())}
          >
            Sarah
          </span>
          <div class="sarah-reveal" class:is-open={sarahOpen} aria-hidden={!sarahOpen} bind:this={sarahEl}>
            <div class="matas-about-top-row">
              <img class="matas-about-photo" src="/images/sarah.svg" alt="Sarah" />
              <div class="matas-about-bio">
                <h3 class="matas-about-name">Sarah Hussain</h3>
                <p>
                  Sarah is a technical trainer and data specialist with deep expertise across cloud technologies, data
                  governance and modern analytics infrastructure. She holds four Google certifications, including Cloud
                  Digital Leader, Professional Data Engineer, Professional Machine Learning Engineer and Google Authorized
                  Trainer, and has built her career helping organisations understand and apply modern data platforms
                  effectively.
                </p>
                <p>
                  She specialises in developing training programmes, technical learning paths and hands-on labs,
                  delivering instructor-led training to organisations ranging from global banks to fast-growing technology
                  companies. Across Europe and the Middle East, Sarah has trained 2,000+ learners on topics including
                  data modelling, Looker, dbt, machine learning and emerging AI technologies, consistently achieving
                  industry-leading satisfaction scores.
                </p>
              </div>
            </div>
            <p class="matas-about-heading">Selected Case Study</p>
            <div class="matas-about-case-study">
              <p>
                In 2024, Sarah delivered "Launchpad for Women", a two-day cloud technology training event attended by
                over 1,500 participants across the EMEA region.
              </p>
              <p>
                The programme introduced foundational cloud concepts and modern data workflows, combining technical
                instruction with practical learning paths designed to help participants understand how cloud technologies
                power today's data-driven organisations.
              </p>
              <p>
                With women currently representing only around 20% of senior roles in technology, the initiative aimed to
                help close the knowledge gap by providing accessible training and practical insight into cloud
                technologies and data infrastructure.
              </p>
              <p>The event was recognised as a significant initiative supporting the growth of women in the technology sector.</p>
            </div>
            <p class="matas-about-disclaimer">Work delivered by Sarah in a previous role.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<main class="main">
  <h1 class="logo" aria-label="OFF / PIXEL">
    <span class="logo-off">OFF</span><span class="logo-slash">/</span><span class="logo-pixel">PIXEL</span>
  </h1>
  <p class="tagline">
    Omnichannel marketing<br class="tagline-br" />
    and data strategies that<br class="tagline-br" />
    go beyond the brief
  </p>
</main>