<script>
  /** @type {string} */
  export let heading = '';
</script>

<div class="legal-shell">
  <header class="legal-header">
    <a href="/" class="legal-logo">OFF / PIXEL</a>
    {#if heading}
      <h1 class="legal-h1">{heading}</h1>
    {/if}
    <slot name="after-heading" />
  </header>
  <div class="legal-prose">
    <slot />
  </div>
</div>

<style>
  .legal-shell {
    max-width: 48rem;
    margin: 0 auto;
    padding: 2rem 0 4rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #1e1810;
    min-height: 100vh;
  }

  .legal-header {
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(30, 24, 16, 0.15);
  }

  .legal-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.15em;
    color: #1e1810;
    text-decoration: none;
    opacity: 0.6;
    display: inline-block;
    margin-bottom: 0.75rem;
  }

  .legal-logo:hover {
    opacity: 1;
  }

  .legal-h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2rem, 5vw, 2.75rem);
    letter-spacing: 0.06em;
    margin: 0;
    font-weight: 400;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .legal-prose :global(h2) {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.35rem;
    letter-spacing: 0.08em;
    margin: 2.5rem 0 1rem;
    font-weight: 400;
    line-height: 1.2;
    scroll-margin-top: 1.5rem;
  }

  .legal-prose :global(h2:first-of-type) {
    margin-top: 0;
  }

  .legal-prose :global(h3) {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin: 1.75rem 0 0.75rem;
    opacity: 0.85;
  }

  .legal-prose :global(p) {
    font-size: 0.9375rem;
    line-height: 1.65;
    margin: 0 0 1rem;
    max-width: 42rem;
  }

  .legal-prose :global(ul),
  .legal-prose :global(ol) {
    margin: 0 0 1.25rem;
    padding-left: 1.35rem;
    max-width: 42rem;
  }

  .legal-prose :global(li) {
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  .legal-prose :global(li ul) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .legal-prose :global(a) {
    color: #1e1810;
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }

  .legal-prose :global(a:hover) {
    opacity: 0.75;
  }

  @media (max-width: 768px) {
    .legal-shell {
      padding: 1.5rem 0 3rem;
    }
  }
</style>
