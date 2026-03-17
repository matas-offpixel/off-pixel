<script>
  let capacity = 1000;
  let budget = 2500;
  let serviceTier = 'Ads';
  let soldOut = 'Yes';

  $: feeCap = capacity > 19000 ? 5000 : capacity > 14000 ? 4500 : 4000;
  $: isLargeShow = capacity >= 4000 || budget >= 14000;
  $: showSize =
    capacity >= 10000 ? 'Xtra Large' :
    capacity >= 4000 ? 'Large' :
    capacity >= 2000 ? 'Medium' : 'Small';
  $: focusVariables =
    capacity >= 10000 ? '1–5' :
    capacity >= 4000 ? '1–4' :
    capacity >= 2000 ? '1–3' : '1–2';

  $: pricingModel = (capacity >= 4000 || budget >= 14000) ? '% of Budget' : 'Per Ticket';

  $: rawFee = pricingModel === '% of Budget'
    ? (serviceTier === 'Ads' ? budget * 0.18
      : serviceTier === 'Ads + D2C' ? budget * 0.22
      : serviceTier === 'Ads + D2C + Creative' ? budget * 0.25
      : 0)
    : (serviceTier === 'Ads' ? capacity * 0.7
      : serviceTier === 'Ads + D2C' ? capacity * 0.8
      : serviceTier === 'Ads + D2C + Creative' ? capacity * 0.9
      : 0);

  $: baseFee = Math.min(feeCap, Math.max(750, Math.round(rawFee)));
  $: sellOutBonus = soldOut === 'Yes' ? Math.round(capacity * 0.1) : 0;
  $: maxFee = baseFee + sellOutBonus;
  $: upfront = Math.round(maxFee * 0.75);
  $: balance = maxFee - upfront;

  function formatCurrency(val) {
    return '£' + val.toLocaleString('en-GB');
  }
</script>

<svelte:head>
  <title>OFF / PIXEL — Quote</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="quote-page">
  <header class="quote-header">
    <a href="/" class="quote-logo">OFF / PIXEL</a>
    <h1>Quote Summary</h1>
  </header>

  <div class="quote-layout">
    <section class="quote-section inputs-section">
      <h2>Inputs</h2>
      <div class="form-grid">
        <label>
          <span>Capacity / tickets left to sell</span>
          <input type="number" bind:value={capacity} min="0" step="100" />
        </label>
        <label>
          <span>Marketing Budget (£)</span>
          <input type="number" bind:value={budget} min="0" step="100" />
        </label>
        <label>
          <span>Service Tier</span>
          <select bind:value={serviceTier}>
            <option value="Ads">Ads</option>
            <option value="Ads + D2C">Ads + D2C</option>
            <option value="Ads + D2C + Creative">Ads + D2C + Creative</option>
          </select>
        </label>
        <label>
          <span>Sold Out?</span>
          <select bind:value={soldOut}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
      </div>
    </section>

    <section class="quote-section outputs-section">
      <h2>Outputs</h2>
      <div class="output-grid">
        <div class="output-row">
          <span class="output-label">Pricing Model</span>
          <span class="output-value">{pricingModel}</span>
        </div>
        <div class="output-row">
          <span class="output-label">Show Size</span>
          <span class="output-value">{showSize} <span class="output-detail">({focusVariables} variables in focus)</span></span>
        </div>
        <div class="output-row">
          <span class="output-label">Fee Cap</span>
          <span class="output-value">{formatCurrency(feeCap)}</span>
        </div>
        <div class="output-row highlight">
          <span class="output-label">Base Fee</span>
          <span class="output-value">{formatCurrency(baseFee)}</span>
        </div>
        <div class="output-row" class:muted={soldOut === 'No'}>
          <span class="output-label">Sell-Out Bonus</span>
          <span class="output-value">{soldOut === 'Yes' ? formatCurrency(sellOutBonus) : '—'}</span>
        </div>
        <div class="output-row total">
          <span class="output-label">Max Fee</span>
          <span class="output-value">{formatCurrency(maxFee)}</span>
        </div>
      </div>

      <div class="payment-split">
        <h3>Payment Split</h3>
        <div class="output-row">
          <span class="output-label">75% upfront</span>
          <span class="output-value">{formatCurrency(upfront)}</span>
        </div>
        <div class="output-row">
          <span class="output-label">25% balance (1 month before event)</span>
          <span class="output-value">{formatCurrency(balance)}</span>
        </div>
        {#if soldOut === 'Yes'}
        <div class="output-row">
          <span class="output-label">Sell-out bonus (on completion)</span>
          <span class="output-value">{formatCurrency(sellOutBonus)}</span>
        </div>
        {/if}
      </div>
    </section>
  </div>

  <section class="quote-section notes-section">
    <h2>Commercial Notes</h2>
    <div class="notes-content">
      <div class="notes-col">
        <h3>Pricing</h3>
        <ul>
          <li>Minimum fee: £750</li>
          <li>Fee cap: £4,000 (default) / £4,500 (&gt;14,000 cap) / £5,000 (&gt;19,000 cap)</li>
          <li>Large show threshold: Capacity ≥ 4,000 OR Budget ≥ £14,000</li>
          <li>Sell-out bonus: £0.10 per ticket (if Sold Out = Yes)</li>
        </ul>

        <h3>Show Size &amp; Focus Variables</h3>
        <ul>
          <li><strong>Small:</strong> &lt; 2,000 cap — 1–2 variables in focus</li>
          <li><strong>Medium:</strong> 2,000–4,000 cap — 1–3 variables</li>
          <li><strong>Large:</strong> 4,000–10,000 cap — 1–4 variables</li>
          <li><strong>Xtra Large:</strong> 10,000+ cap — 1–5 variables</li>
        </ul>
      </div>

      <div class="notes-col">
        <h3>Campaign Cadence</h3>
        <ul>
          <li>Campaigns refreshed at least once per week when remaining campaign length is under 4 weeks. Every 2 weeks when longer.</li>
          <li>Creative: UGC style clips + statics with simple text overlays or updated creatives from provided templates. At least 5 creatives to run at all times.</li>
          <li>D2C: engaging signup data &amp; communities with relevant content or ticket updates.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="quote-section terms-section">
    <h2>Payment Terms</h2>
    <div class="terms-content">
      <div class="terms-col">
        <h3>Engagement Structure</h3>
        <p>Fees are agreed per campaign or per event in advance, based on show size, scope, and service tier. All fees are exclusive of VAT (where applicable).</p>

        <h3>Payment Schedule</h3>
        <ul>
          <li>75% upfront to confirm project commencement and secure resourcing. Upfront payment is non-refundable.</li>
          <li>25% balance settled 1 month before the event.</li>
          <li>If sell-out bonus is applicable, this is settled on campaign completion (or within 7 days of invoice, unless otherwise agreed).</li>
        </ul>

        <h3>Invoicing</h3>
        <p>Invoices are issued in advance of work commencing. Upfront payment is required before campaigns are launched or scaled.</p>
      </div>

      <div class="terms-col">
        <h3>Late Payment</h3>
        <p>Late payments may result in campaign activity being paused until accounts are brought up to date. Off Pixel reserves the right to withhold deliverables where invoices remain overdue.</p>

        <h3>Expenses &amp; Third-Party Costs</h3>
        <p>Paid media spend and D2C distribution cost is billed directly by platforms and is not included in Off Pixel fees. Any agreed third-party costs (e.g. freelance creative, tooling, specialist support) will be pre-approved and billed separately at cost.</p>

        <h3>Scope Changes</h3>
        <p>Any material changes to scope (additional creatives, increased cadence, expanded channels) may require a revised fee agreement.</p>

        <h3>Termination</h3>
        <p>Either party may terminate with written notice. Any work completed or in progress up to the termination date remains chargeable.</p>
      </div>
    </div>
  </section>
</div>

<style>
  .quote-page {
    max-width: 72rem;
    margin: 0 auto;
    padding: 2rem 2rem 4rem;
    font-family: system-ui, -apple-system, sans-serif;
    color: #1e1810;
    min-height: 100vh;
  }

  .quote-header {
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(30, 24, 16, 0.15);
  }
  .quote-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.15em;
    color: #1e1810;
    text-decoration: none;
    opacity: 0.6;
    display: block;
    margin-bottom: 0.25rem;
  }
  .quote-logo:hover { opacity: 1; }
  .quote-header h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.5rem;
    letter-spacing: 0.08em;
    margin: 0;
    font-weight: 400;
  }

  .quote-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2.5rem;
  }

  .quote-section {
    margin-bottom: 2rem;
  }
  .quote-section h2 {
    font-family: system-ui, sans-serif;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #1e1810;
    opacity: 0.5;
    margin: 0 0 1.25rem 0;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .form-grid label {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .form-grid label span {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.6;
  }
  .form-grid input,
  .form-grid select {
    font-family: system-ui, sans-serif;
    font-size: 0.85rem;
    color: #1e1810;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(30, 24, 16, 0.25);
    padding: 0.5rem 0;
    outline: none;
    transition: border-color 0.2s ease;
    border-radius: 0;
    -webkit-appearance: none;
  }
  .form-grid input:focus,
  .form-grid select:focus {
    border-bottom-color: #1e1810;
  }
  .form-grid input::placeholder {
    color: rgba(30, 24, 16, 0.3);
  }

  .outputs-section {
    padding: 1.75rem;
    background: rgba(30, 24, 16, 0.04);
    border: 1px solid rgba(30, 24, 16, 0.1);
    border-radius: 0;
    align-self: start;
  }
  .output-grid {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(30, 24, 16, 0.1);
  }
  .output-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 0.8rem;
  }
  .output-label {
    opacity: 0.6;
    font-size: 0.7rem;
    letter-spacing: 0.05em;
  }
  .output-value {
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
  }
  .output-detail {
    font-weight: 400;
    font-size: 0.7rem;
    opacity: 0.5;
  }
  .output-row.highlight .output-value {
    color: #1e1810;
  }
  .output-row.total {
    padding-top: 0.6rem;
    border-top: 1px solid rgba(30, 24, 16, 0.15);
  }
  .output-row.total .output-label {
    opacity: 1;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.7rem;
  }
  .output-row.total .output-value {
    font-size: 1.2rem;
    font-weight: 700;
  }
  .output-row.muted .output-value {
    opacity: 0.35;
  }

  .payment-split h3 {
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    opacity: 0.4;
    margin: 0 0 0.75rem 0;
  }
  .payment-split .output-row {
    font-size: 0.75rem;
  }
  .payment-split .output-label {
    font-size: 0.65rem;
  }
  .payment-split .output-value {
    font-size: 0.8rem;
  }

  .notes-content,
  .terms-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .notes-col h3,
  .terms-col h3 {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 1.25rem 0 0.5rem 0;
    opacity: 0.8;
  }
  .notes-col h3:first-child,
  .terms-col h3:first-child {
    margin-top: 0;
  }
  .notes-col ul,
  .terms-col ul {
    margin: 0;
    padding-left: 1.25rem;
    list-style: disc;
  }
  .notes-col li,
  .terms-col li {
    font-size: 0.7rem;
    line-height: 1.55;
    margin-bottom: 0.35rem;
    opacity: 0.75;
  }
  .notes-col p,
  .terms-col p {
    font-size: 0.7rem;
    line-height: 1.55;
    margin: 0 0 0.75rem 0;
    opacity: 0.75;
  }

  .notes-section,
  .terms-section {
    padding-top: 2rem;
    border-top: 1px solid rgba(30, 24, 16, 0.1);
  }

  @media (max-width: 768px) {
    .quote-page { padding: 1.5rem 1.25rem 3rem; }
    .quote-header h1 { font-size: 2rem; }
    .quote-layout { grid-template-columns: 1fr; }
    .form-grid { grid-template-columns: 1fr; }
    .notes-content,
    .terms-content { grid-template-columns: 1fr; gap: 0; }
  }
</style>
